/////////////////User///////////////////////
// For future refactor and to understand later: https://github.com/reduxjs/redux/issues/1676


/////////////////Dashboard/////////////////////
const UPDATE_IOB = 'UPDATE_IOB';
export const updateIob = (state) => ({
    type: UPDATE_IOB,
    state
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

export const handleDashForm = (formType, payload, history) => {
    console.log(formType, payload);
    return (dispatch) => {
        //Fetch
        fetch(`http://localhost:8080/${formType}`, {
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

export const registerUser = (user, history) =>  {
    console.log(user);
    return dispatch => { 
        fetch(`http://localhost:8080/user/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(userDetails => {
            dispatch(setUser(userDetails, user.name));
            dispatch(userSettings(userDetails));
        })
        .then(((userDetails) => {
            // Second Fetch call for IOB
            console.log(userDetails);
            fetch(`http://localhost:8080/iob/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({loggedInUsername: user.username})
            })
            .then(res => res.json())
            .then(iobDetails => console.log(iobDetails))
            // dispatch(setIobId(iobDetails));
            // dispatch(userIob(iobDetails));
        }))   
        .catch(error => {
            if (error === 'Conflict') alert('User with that username already exists');
            console.log(error)
        })
    }
}
// .then(response => response.json())
// $.ajax({
//     type: 'POST',
//     url: '/users/login',
//     dataType: 'json',
//     data: JSON.stringify(loginUserObject),
//     contentType: 'application/json'
// })
// alert('Incorrect Username or Password');
export const loginUser = (user) =>  {
    console.log(user);
    return dispatch => {
        fetch(`http://localhost:8080/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(results => {
            console.log(results);
            if (results.message === "Not found!") {
                alert('Incorrect Username or Password');
            } else {
                dispatch(setUserLogin(results));
                // Call for Settings
                // dispatch(userSettings(userDetails));
                // Call for IOB info
                // dispatch IOB
                // Call InsulinOnBoard Calc
                // Redirect to Dashboard
            }

        })
        .catch(error => console.log(error))
    }
} 

const SET_USER_LOGIN = 'SET_USER_LOGIN';
export const setUserLogin = (userDetails, name) => ({
    type: SET_USER_LOGIN,
    userDetails,
    name
})

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

const USER_IOB = 'USER_IOB';
export const userIob = (userDetails) => ({
    type: USER_IOB,
    userDetails
})

const SET_IOB_ID = 'SET_IOB_ID';
export const setIobId = (userDetails) => ({
    type: SET_IOB_ID,
    userDetails
})

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

export const updateSetting = (settingType) => console.log('update');


// export const updateSetting = (insulinType, history) => {
//     return (dispatch) => {
//         //Fetch
//         fetch('http://localhost:8080/settings/:id', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({insulinType})
//         })
//         .then(res => res.json())
//         .then(data => history.push('/dashboard'))
//         .catch(error => console.log(error))
//     }
// }

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
