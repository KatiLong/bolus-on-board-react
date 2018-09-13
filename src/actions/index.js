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

export const handleDashForm = (payload, history) => {
    console.log(payload);
    // this.setState({DateTime: `${this.state.currentDate}T${this.state.currentTime}`});
    return (dispatch) => {
        //Fetch
        fetch(`http://localhost:8080/${payload.formType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({payload})
        })
        .then(res => res.json())
        .then(data => history.push('/dashboard'))
        .catch(error => console.log(error))
    }
}

export const handleBolus = (insulinType, history) => {
    return (dispatch) => {
        //Fetch
        fetch('http://localhost:8080/bolus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({insulinType})
        })
        .then(res => res.json())
        .then(data => history.push('/dashboard'))
        .catch(error => console.log(error))
    }
}

export const registerUser = (name, username, password) => {
    return (dispatch) => {
        fetch('http://localhost:8080/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify({name, username, password})
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
    }
}

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
