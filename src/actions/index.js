import { iobLoginCalculator } from '../components/dashboard/dashboard-calculators/login-iob-calculator.js';
import { newBolusEntry } from '../components/dashboard/dashboard-calculators/new-bolus-iob-calculator';
import { iobCalculator } from '../components/dashboard/dashboard-calculators/iob-calculator.js';

/////////////////User///////////////////////
// For future refactor and to understand later: https://github.com/reduxjs/redux/issues/1676
let API_BASE_URL = `http://localhost:8080/`;
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
            console.log(userDetails);
            // Set User info and Id's to Redux State
            // dispatch(setUser(userDetails, user.name));
            // Set User Settings to Redux State
            // dispatch(userSettings(userDetails));
            
            // Set User Information in Redux State
            reduxStateToUpdate.user.email = userDetails.loggedInUsername
            reduxStateToUpdate.user.name = user.name
            reduxStateToUpdate.user.userId = userDetails.userID
            reduxStateToUpdate.user.settingsId = userDetails._id;
            // // Set User Settings from Server in Redux State
            reduxStateToUpdate.settings.carbRatio = userDetails.carbRatio;
            reduxStateToUpdate.settings.correction = userDetails.correction;
            reduxStateToUpdate.settings.duration = userDetails.duration;
            reduxStateToUpdate.settings.incrementInsulin = userDetails.incrementInsulin;
            reduxStateToUpdate.settings.lowBg = userDetails.lowBg;
            reduxStateToUpdate.settings.targetBg = userDetails.targetBg;

            // carbRatio: 9
            // correction: 32
            // duration: 4.25
            // incrementInsulin: 1
            // loggedInUsername: "Trixie@gmail.com"
            // lowBg: 65
            // targetBg: 120
            // userID: "5ba81963b955320894b6d6a4"
            // __v: 0
            // _id: "5ba81963b955320894b6d6a5"

            console.log('loggedIn Username for IOB:', user)
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
                // dispatch(setIobId(iobDetails));
                reduxStateToUpdate.user.iobId = iobDetails._id
                
                console.log(reduxStateToUpdate);
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
            } else {
                // Set User Information in Redux State
                reduxStateToUpdate.user.email = results.username
                reduxStateToUpdate.user.name = results.name
                reduxStateToUpdate.user.userId = results._id

                // Call for Settings
                fetch(`${API_BASE_URL}settings/${results.username}`, {
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
                .catch(error => console.log(error))
                
                // Call for IOB info
                fetch(`${API_BASE_URL}iob-stack/${results.username}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(res => {

                    // Set IOB info and ID in Redux State
                    reduxStateToUpdate.user.iobId = res[0]._id
                    reduxStateToUpdate.iob.iobStack = [...res[0].currentInsulinStack];
                    reduxStateToUpdate.iob.iobAmount = res[0].insulinOnBoard.amount;
                    reduxStateToUpdate.iob.iobTimeLeft = res[0].insulinOnBoard.timeLeft;
                    // Call InsulinOnBoard Calc ? 
                    // iobLoginCalculator(props);
                    console.log(reduxStateToUpdate);

                    // Combined Reducer for all Login Actions (udpates all three Reducers in one)
                    dispatch(onUserLogin(reduxStateToUpdate));
                })
                // Redirect to Dashboard
                .then(() => history.push('/dashboard'))
                .catch(error => console.log(error))
            }
        })
        .catch(error => console.log(error))
    }
} 

const ON_USER_LOGIN = 'ON_USER_LOGIN';
export const onUserLogin = (userDetails) => ({
    type: ON_USER_LOGIN,
    userDetails
})

// dispatch(setUserLogin(results));
// dispatch(setSettingsId(res[0]))
// dispatch(userSettings(res[0]));
// dispatch(setIobId(res[0]));

// IOB GET return object
// [{…}]
// 0:
// currentInsulinStack: Array(0)
// length: 0
// __proto__: Array(0)
// insulinOnBoard:
// amount: 0
// timeLeft: 0
// __proto__: Object
// loggedInUsername: "HispanoSuiza@gmail.com"
// __v: 0
// _id: "5ba72827db20961a2e6cfdcd"


const SET_USER = 'SET_USER';
export const setUser = (userDetails, name) => ({
    type: SET_USER,
    userDetails,
    name
})

const USER_SETTINGS = 'USER_SETTINGS';
export const userSettings = (userDetails) => ({
    type: USER_SETTINGS,
    userDetails
})

const SET_IOB_ID = 'SET_IOB_ID';
export const setIobId = (userDetails) => ({
    type: SET_IOB_ID,
    userDetails
})

/////////////////IOB/////////////////////
const UPDATE_IOB = 'UPDATE_IOB';
export const updateIob = (iobAmount, iobTimeLeft) => ({
    type: UPDATE_IOB,
    iobAmount, 
    iobTimeLeft
})

const IOB_ON_LOGIN = 'IOB_ON_LOGIN';
export const iobOnLogin = (state) => ({
    type: IOB_ON_LOGIN,
    state
})

const ADD_IOB_ENTRY = 'ADD_IOB_ENTRY';
export const addIobEntry = (state) => ({
    type: ADD_IOB_ENTRY,
    state
})

const UPDATE_IOB_ENTRY = 'UPDATE_IOB_ENTRY';
export const updateIobEntry = (state) => ({
    type: UPDATE_IOB_ENTRY,
    state
})
const DELETE_IOB_ENTRY = 'DELETE_IOB_ENTRY';
export const deleteIobEntry = (state) => ({
    type: DELETE_IOB_ENTRY,
    state
})

/////////////////Dashboard/////////////////////

// Dashboard Forms (Bolus, Basal, BG, A1c Submit function to server)
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
