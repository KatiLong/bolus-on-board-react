const initialState = {
    increment: {
        amount: 5,
        show: false,
        htmlInput: "increment"
    },
    duration: {
        amount: 4,
        show: false,
        htmlInput: "duration"
    },
    carbRatio: {
        amount: 8,
        show: false,
        htmlInput: "carb-ratio"
    },
    correction: {
        amount: 32,
        show: false,
        htmlInput: "correction"
    },
    targetBg: {
        amount: 110,
        show: false,
        htmlInput: "target-bg"
    },
    lowBg: {
        amount: 70,
        show: false,
        htmlInput: "low-bg"
    }
}

//create the reducer

const settingsReducer = (state = initialState, action) => {
    console.log(action)
    let currentSetting, currentAmount;
    switch(action.type) {
        case 'SHOW_SETTING' :
            currentSetting =  action.settingType;
            return {
                ...state,
                [currentSetting]: {
                    ...state[currentSetting],
                    show: true
                }
            }
        case 'SETTING_ON_CHANGE' :
            currentSetting =  action.settingType;
            currentAmount = action.amount;
            console.log(currentAmount);
            return {
                ...state,
                [currentSetting]: {
                    ...state[currentSetting],
                    amount: [currentAmount]
                }
            }
        case 'HIDE_SETTING' :
            currentSetting =  action.settingType;
            console.log(state[currentSetting])
            return {
                ...state,
                [currentSetting]: {
                    ...state[currentSetting],
                    show: false
                }
            }
        default :
            return state
    }

};

export default settingsReducer;


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
