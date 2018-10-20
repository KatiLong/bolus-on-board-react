const initialState = {
    incrementInsulin: {
        amount: 0,
        show: false,
        htmlInput: "increment-insulin"
    },
    duration: {
        amount: 0,
        show: false,
        htmlInput: "duration"
    },
    carbRatio: {
        amount: 0,
        show: false,
        htmlInput: "carb-ratio"
    },
    correction: {
        amount: 0,
        show: false,
        htmlInput: "correction"
    },
    targetBg: {
        amount: 0,
        show: false,
        htmlInput: "target-bg"
    },
    lowBg: {
        amount: 0,
        show: false,
        htmlInput: "low-bg"
    }
}

//create the reducer

const settingsReducer = (state = initialState, action) => {
    let currentSetting, currentAmount;
    switch(action.type) {
        case 'USER_SETTINGS' :
            console.log(action);
            return Object.assign({}, state, {
                incrementInsulin: {
                    ...state.incrementInsulin,
                    amount: action.userDetails.incrementInsulin
                },
                duration: {
                    ...state.duration,
                    amount: action.userDetails.duration
                },
                carbRatio: {
                    ...state.carbRatio,
                    amount: action.userDetails.carbRatio
                },
                correction: {
                    ...state.correction,
                    amount: action.userDetails.correction
                },
                targetBg: {
                    ...state.targetBg,
                    amount: action.userDetails.targetBg
                },
                lowBg: {
                    ...state.lowBg,
                    amount: action.userDetails.lowBg
                }
            })
        case 'ON_USER_LOGIN' :
            console.log(action);
            return Object.assign({}, state, {
                incrementInsulin: {
                    ...state.incrementInsulin,
                    amount: action.userDetails.settings.incrementInsulin
                },
                duration: {
                    ...state.duration,
                    amount: action.userDetails.settings.duration
                },
                carbRatio: {
                    ...state.carbRatio,
                    amount: action.userDetails.settings.carbRatio
                },
                correction: {
                    ...state.correction,
                    amount: action.userDetails.settings.correction
                },
                targetBg: {
                    ...state.targetBg,
                    amount: action.userDetails.settings.targetBg
                },
                lowBg: {
                    ...state.lowBg,
                    amount: action.userDetails.settings.lowBg
                }
        })
        case 'SHOW_SETTING' :
            console.log(action)
            currentSetting =  action.settingType;
            return {
                ...state,
                [currentSetting]: {
                    ...state[currentSetting],
                    show: true
                }
            }
        case 'SETTING_ON_CHANGE' :
        console.log(action)
            currentSetting =  action.settingType;
            currentAmount = action.amount;
            console.log(currentAmount);
            return {
                ...state,
                [currentSetting]: {
                    ...state[currentSetting],
                    amount: currentAmount
                }
            }
        case 'HIDE_SETTING' :
        console.log(action)
            currentSetting =  action.settingType;
            console.log(state[currentSetting])
            return {
                ...state,
                [currentSetting]: {
                    ...state[currentSetting],
                    show: false
                }
            }
        case 'HIDE_OTHER_SETTINGS' :
            currentSetting =  action.settingType;
                return {
                    ...state,
                    incrementInsulin: {
                        ...state.incrementInsulin,
                        show: false
                    },
                    duration: {
                        ...state.duration,
                        show: false
                    },
                    carbRatio: {
                        ...state.carbRatio,
                        show: false
                    },
                    correction: {
                        ...state.correction,
                        show: false
                    },
                    targetBg: {
                        ...state.targetBg,
                        show: false
                    },
                    lowBg: {
                        ...state.lowBg,
                        show: false
                    },
                    [currentSetting]: {
                        ...state[currentSetting],
                        show: true
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
