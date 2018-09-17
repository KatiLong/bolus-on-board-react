const initialState = {
    email: 'carmen@gmail.com',
    name: 'Carmen SanDiego',
    userId: '',
    settingsId: '',
    iobId: ''
}

//create the reducer
const userReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER' :
            return Object.assign({}, state, {
                    email: action.userDetails.loggedInUsername,
                    name: action.name,
                    settingsId: action.userDetails.settingsId,
                    userId: action.userDetails.userId
                })
        case 'SET_IOB' :
            return Object.assign({}, state, {
                    userIob: action.userDetails._id
                })
        default :
            return state

    }
}

export default userReducer;

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