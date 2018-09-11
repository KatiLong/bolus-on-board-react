/////////////////Dashboard/////////////////////


// //Populates current Date & Time for relevant forms
// function dateTimePopulate (event) {
//     const currentDateTime = new Date();
//     let currentDate, currentTime = '';
//     let month = currentDateTime.getMonth() + 1;
//     let day = currentDateTime.getDay() + 1;
//     let hour = currentDateTime.getHours();
//     let year = currentDateTime.getFullYear();
//     let minutes = currentDateTime.getMinutes();

//     if (month < 10) month = "0" + month;
//     if (day < 10) day = "0" + day;
//     if (hour < 10) hour = "0" + hour;
//     if (minutes < 10) minutes = "0" + minutes;

//     currentDate = `${year}-${month}-${day}`;
//     currentTime = `${hour}:${minutes}`;


//     $(event.currentTarget).next('form').find('.date-dash').val(currentDate);

//     if ($(event.currentTarget).next('form').find('.time-dash')) {
//         $(event.currentTarget).next('form').find('.time-dash').val(currentTime);
//     }

// }
// //function to render HTML for Logs on GET call

// function displayDate (dateString) {
//     let formattedDate = dateString.substring(0, 10).split("-");
//     return formattedDate[1] + "/" + formattedDate[2] + "/" + formattedDate[0];
// }

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
