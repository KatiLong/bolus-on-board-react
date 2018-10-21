import { bolusEntryTime } from '../components/dashboard/populateDateTime';

/////////////////User///////////////////////
// For future refactor and to understand later: https://github.com/reduxjs/redux/issues/1676
const {API_BASE_URL} = require('../config');
// let API_BASE_URL = `http://localhost:8080/`;
// Asynchronous Register User
export const registerUser = (user, history) =>  {
    let reduxStateToUpdate = {
        user: {},
        iob: {    
            iobAmount: 0,
            iobTimeLeft: 0,
            iobStack: []
        },
        settings: {}
    }
    return (dispatch) => { 
        fetch(`${API_BASE_URL}user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(userDetails => {
            // Set User Information in Redux State
            reduxStateToUpdate.user.email = userDetails.loggedInUsername
            reduxStateToUpdate.user.name = user.name
            reduxStateToUpdate.user.userId = userDetails.userID
            reduxStateToUpdate.user.settingsId = userDetails._id;
            // Set User Settings from Server in Redux State
            reduxStateToUpdate.settings.carbRatio = userDetails.carbRatio;
            reduxStateToUpdate.settings.correction = userDetails.correction;
            reduxStateToUpdate.settings.duration = userDetails.duration;
            reduxStateToUpdate.settings.incrementInsulin = userDetails.incrementInsulin;
            reduxStateToUpdate.settings.lowBg = userDetails.lowBg;
            reduxStateToUpdate.settings.targetBg = userDetails.targetBg;

            // Second Fetch call for IOB
            fetch(`${API_BASE_URL}iob/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: user.username})
            })
            .then(res => res.json())
            .then(iobDetails => {
                // Set User IOB ID to User Redux State
                reduxStateToUpdate.user.iobId = iobDetails._id
                
                console.log('registerUser', reduxStateToUpdate);
                dispatch(onUserLogin(reduxStateToUpdate));
            })
            // Reroute User to User Dashboard when complete
            .then(() => history.push('/dashboard'))
            .catch(error => console.log("Error in IOB fetch:", error))
        }) 
        .catch(error => {
            if (error === 'Conflict') alert('User with that username already exists');
            return console.log(error)
        })
    }
}
// Asynchronous Login User
export const loginUser = (user, history, props) =>  {
    let reduxStateToUpdate = {
        user: {},
        iob: {},
        settings: {}
    }
    return dispatch => {
        fetch(`${API_BASE_URL}user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(results => {
            if (results.message === "Not found!" || results.message === "Password Invalid") {
                alert('Incorrect Username or Password');
                throw 'Incorrect Username or Password';
            } else {
                // Set User Information in Redux State
                reduxStateToUpdate.user.email = results.username
                reduxStateToUpdate.user.name = results.name
                reduxStateToUpdate.user.userId = results._id
            };
        })
        // Call for Settings
        .then(() => {
            return fetch(`${API_BASE_URL}settings/${reduxStateToUpdate.user.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                // Set user settings ID in Redux State
                reduxStateToUpdate.user.settingsId = res[0]._id;
                // Set User Settings from Server in Redux State
                reduxStateToUpdate.settings.carbRatio = res[0].carbRatio;
                reduxStateToUpdate.settings.correction = res[0].correction;
                reduxStateToUpdate.settings.duration = res[0].duration;
                reduxStateToUpdate.settings.incrementInsulin = res[0].incrementInsulin;
                reduxStateToUpdate.settings.lowBg = res[0].lowBg;
                reduxStateToUpdate.settings.targetBg = res[0].targetBg;
            })
            .catch(error => {throw error})
        })
        // Call for IOB info
        .then((results) => {
            return fetch(`${API_BASE_URL}iob-stack/${reduxStateToUpdate.user.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                // Set IOB info and ID in Redux State
                reduxStateToUpdate.user.iobId = res[0]._id
                reduxStateToUpdate.iob.iobStack = [...res[0].currentInsulinStack];
                // reduxStateToUpdate.iob.iobAmount = res[0].insulinOnBoard.amount;
                // reduxStateToUpdate.iob.iobTimeLeft = res[0].insulinOnBoard.timeLeft;
            })
            .catch(error => { throw error})
        })
        // Combined Reducer for all Login Actions (udpates all three Reducers in one)
        .then(() => {
            console.log(reduxStateToUpdate);
            dispatch(onUserLogin(reduxStateToUpdate))
        })
        // Redirect to Dashboard once all calls complete
        .then(() => history.push('/dashboard'))
        .catch(error => console.log(error))
    }
} 

const ON_USER_LOGIN = 'ON_USER_LOGIN';
export const onUserLogin = (userDetails) => ({
    type: ON_USER_LOGIN,
    userDetails
})


/////////////////IOB/////////////////////
const UPDATE_IOB = 'UPDATE_IOB';
export const updateIob = (iobAmount, iobTimeLeft) => ({
    type: UPDATE_IOB,
    iobAmount, 
    iobTimeLeft
})

// updateIobApi call example
// updateIobApi({
//     insulinOnBoard: {
//         amount: iob.insulinOnBoard.amount,
//         timeLeft: iob.insulinOnBoard.timeLeft
//     }
// }, iobId);

//Update IOB on Server
export const updateIobApi = (iob, iobId) => {
    console.log('updateIobApi action', iob, iobId);
    return (dispatch) => {
        //Fetch 'insulinOnBoard', 'amount', 'timeLeft'
        fetch(`${API_BASE_URL}insulin-on-board/${iobId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(iob)
        })
        //Adds Entry to Redux Stack when server successful
        .then(res => {
            console.log('updateIobApi action',  iob.insulinOnBoard.amount, iob.insulinOnBoard.timeLeft);
            dispatch(updateIob(iob.insulinOnBoard.amount, iob.insulinOnBoard.timeLeft))
        })
        .catch(error => console.log(error))
    }
}

const IOB_ON_LOGIN = 'IOB_ON_LOGIN';
export const iobOnLogin = (state) => ({
    type: IOB_ON_LOGIN,
    state
})

const ADD_IOB_ENTRY = 'ADD_IOB_ENTRY';
export const addIobEntry = (bolusEntry) => ({
    type: ADD_IOB_ENTRY,
    bolusEntry
})


const BOLUS_TO_DASHBOARD = 'BOLUS_TO_DASHBOARD';
export const bolusToDashboard = (state) => ({
    type: BOLUS_TO_DASHBOARD,
    state
})

const UPDATE_IOB_BOLUS = 'UPDATE_IOB_BOLUS';
export const updateIobBolus = (iobAmount, iobTimeLeft) => ({
    type: UPDATE_IOB_BOLUS,
    iobAmount, 
    iobTimeLeft
})
// POST to Server IOB Stack
// Something in math wrong for IOB amount
export const iobEntryPost = (bolusEntry, iobId, iobAmount, history) => {
    console.log(bolusEntry);
    console.log('iobEntryPost Ran, iobAmount: ', iobAmount, 'bolusEntry Amount: ', bolusEntry.entryAmount);
    return (dispatch) => {
        fetch(`${API_BASE_URL}iob/insulin-stack/${iobId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bolusEntry)
        })
        .then(res => res.json())
        .then(res => {
            console.log('iob Entry Post response: ', res);
            // Adds Entry to Redux Stack when server successful
            dispatch(addIobEntry(res));
                // PUT to Add Bolus Entry to Server IOB Stack
                // dispatch(updateIobApi({
                //     insulinOnBoard: {
                //         amount: iobAmount + bolusEntry.entryAmount,
                //         timeLeft: bolusEntry.timeRemaining
                //     }
                // }, iobId, history))
        })
        .then(data => console.log('Bolus Successfully submitted'))
        .then(data => history.push('/dashboard'))
        .catch(error => console.log(error))
    }
}

const UPDATE_IOB_ENTRY = 'UPDATE_IOB_ENTRY';
export const updateIobEntries = (updatedStack) => ({
    type: UPDATE_IOB_ENTRY,
    updatedStack
})

export const updateIobEntryApi = (iobEntry) => {
    return (dispatch) => {
        console.log(iobEntry);
        //Fetch
        fetch(`${API_BASE_URL}insulin-stack-entry/${iobEntry.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(iobEntry)
        })
        .then(res => {
            console.log(res);

        })
        .catch(error => console.log(error))
    }
}

// const DELETE_IOB_ENTRY = 'DELETE_IOB_ENTRY';
// export const deleteIobEntry = (elId) => ({
//     type: DELETE_IOB_ENTRY,
//     elId
// })

export const deleteIobEntryApi = (iobId, elId, index) => {
    return (dispatch) => { 
        fetch(`${API_BASE_URL}iob/insulin-stack/${iobId}/${elId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
}
// Clear IOB and IOB Stack in Redux
const CLEAR_STACK = 'CLEAR_STACK';
export const clearStack = () => ({
    type: CLEAR_STACK
})
// Tempprary function to clear Bolus Post Tests
export const clearIobStack = (iobId, reduxStack) => {
    console.log('clearIobStack')
    return dispatch => {
        // reduxStack.map((el) => {
        //     dispatch(deleteIobEntryApi(iobId, el._id))
        // })
        dispatch(updateIobApi({
            insulinOnBoard: {
                amount: 0,
                timeLeft: 0
            }
        }, iobId))
        // dispatch(clearStack());
    }
}

/////////////////Dashboard/////////////////////

// Bolus Submit
export const handleBolus = (formType, duration, totalIobAmount, iobId, payload, history) => {
    // console.log(formType, payload);
    return (dispatch) => {
        //Fetch
        fetch(`${API_BASE_URL}${formType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(res => {
            // Add Bolus to IOB Stack Server Side, Add bolus Entry to Redux Stack inside server success
            console.log('handleBolus action', res);
            dispatch(iobEntryPost({
                entryAmount: res.bolusAmount,
                currentInsulin: res.bolusAmount,
                timeStart: bolusEntryTime(res.bolusDate, res.bolusTime),
                timeRemaining: duration*3600000, //In Milliseconds,
            }, iobId, totalIobAmount, history));
        })
        .catch(error => console.log(error))
    }
}

// Dashboard Forms (Basal, BG, A1c Submit function to server)
export const handleDashForm = (formType, payload, history) => {
    console.log(formType, payload);
    return (dispatch) => {
        //Fetch
        fetch(`${API_BASE_URL}${formType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => history.push('/dashboard'))
        .catch(error => console.log(error))
    }
}
// Is this ever used? I believe all in React State now and updates to on Submit
const FORM_CHANGE = 'FORM_CHANGE';
export const formChange = (name, username, password) => ({
    type: FORM_CHANGE,
    name,
    username,
    password
})

const SHOW_SETTING = 'SHOW_SETTING';
export const showSetting = (settingType) => ({
    type: SHOW_SETTING,
    settingType
})

const SETTING_ON_CHANGE =  'SETTING_ON_CHANGE';
export const settingOnChange = (settingType, amount) => ({
    type: SETTING_ON_CHANGE,
    settingType,
    amount
})

//PUT Call to Server
//Pass through setting to hide to Reducer
const HIDE_SETTING = 'HIDE_SETTING';
export const hideSetting = (settingType) => ({
    type: HIDE_SETTING,
    settingType
})

// export const updateSetting = (settingType) => console.log('update');


export const updateSetting = (settingType, settingAmount, settingsId) => {
    console.log('Update Setting', settingType, settingAmount, settingsId);
    return (dispatch) => {
        //Fetch
        fetch(`http://localhost:8080/settings/${settingsId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({[settingType]: settingAmount})
        })
        .then(res => {
            console.log(res);
            console.log(settingAmount);
            if (res.status === 204) {
                dispatch(settingOnChange(settingType, settingAmount))
                dispatch(hideSetting(settingType))
            }
        })
        .catch(error => console.log(error))
    }
}

//fetch(`${API_BASE_URL}/expense/${localStorage.getItem('userId')}`, {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json',
//        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
//    },
//    body: JSON.stringify(expense)
//})
//    .then(res => res.json())
//    .then(response => {
//    dispatch(fetchExpenses())
//    setTimeout(() => {
//        console.log('Made it');
//        dispatch(toggleAlert())
//    }, 3000)
//})
//    .catch(error => console.log(error))

// .then(response => response.json())
// $.ajax({
//     type: 'POST',
//     url: '/users/login',
//     dataType: 'json',
//     data: JSON.stringify(loginUserObject),
//     contentType: 'application/json'
// })
