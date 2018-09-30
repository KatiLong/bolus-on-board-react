const initialState = {
    email: '',
    name: '',
    userId: '',
    settingsId: '',
    iobId: '',
    bolusToDashboard: false,
    bolusStatus: "not successful"
}

//create the reducer
const userReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'SET_USER' :
            return Object.assign({}, state, {
                email: action.userDetails.loggedInUsername,
                name: action.name,
                settingsId: action.userDetails._id,
                userId: action.userDetails.userID
            })
        case 'ON_USER_LOGIN' :
            console.log(action.userDetails.user); 
            console.log(action.userDetails.user.settingsId, action.userDetails.user.iobId); 
            return {
                ...state,
                email: action.userDetails.user.email,
                name: action.userDetails.user.name,
                userId: action.userDetails.user.userId,
                settingsId: action.userDetails.user.settingsId,
                iobId: action.userDetails.user.iobId
            }
        case 'BOLUS_TO_DASHBOARD' :
            console.log(action);
            return {
                ...state,
                bolusToDashboard: true
            }
        default :
            return state

    }
}

export default userReducer;

////////////Register/////////////
// userDetails:
// carbRatio: 9
// correctionFactor: 34
// insulinDuration: {hours: 4.25, milliSec: 15300000}
// insulinIncrement: 1
// insulinMetric: "units"
// loggedInUsername: "paul@gmail.com"
// targetBG: 120
// userID: "5b9f2aa17963d90ce34349e7"
// __v: 0
// _id: "5b9f2aa17963d90ce34349e8"

//////////////Login////////////
// name: "Phynre Fisher"
// password: "$2a$10$3vrG7iX2P8cYxs5lXYPOC.msSKSqSD5jhFfu6CRkjEAyFzGMLhJq."
// username: "HispanoSuiza@gmail.com"
// __v: 0
// _id: "5b9f3fe46a247f10810fc076"

// case 'SET_IOB_ID' :
// return Object.assign({}, state, {
//     iobId: action.userDetails._id
// })
// case 'SET_SETTINGS_ID' :
// return Object.assign({}, state, {
//     settingsId: action.userDetails._id
// })