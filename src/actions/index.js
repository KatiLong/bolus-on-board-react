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

//Asynchronous Call to Server
const UPDATE_SETTING = 'UPDATE_SETTING';
export const updateSetting = (setting) => ({
    type: UPDATE_SETTING,
    setting
})

const SHOW_SETTING = 'SHOW_SETTING';
export const showSetting = (settingType) => ({
    type: SHOW_SETTING,
    settingType
})

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
