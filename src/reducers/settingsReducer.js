const initialState = {
    incrementAmount: 5,
    incrementShow: false,
    durationAmount: 4,
    durationShow: false,
    carbRatioAmount: 9,
    carbRatioShow: false,
    correctionAmount: 32,
    correctionShow: false,
    targetBgAmount: 110,
    targetBgShow: false,
    settingTypes: [
        "carbRatio", 
        "correction",
        "duration", 
        "increment", 
        "targetBg"],
    increment: {
        amount: 5,
        show: false,
        htmlInput: "increment"
    },
    duration: {
        amount: 5,
        show: false,
        htmlInput: "duration"
    },
    carbRatio: {
        amount: 5,
        show: false,
        htmlInput: "carb-ratio"
    },
    correction: {
        amount: 5,
        show: false,
        htmlInput: "correction"
    },
    targetBg: {
        amount: 5,
        show: false,
        htmlInput: "target-bg"
    }
}

//create the reducer

const settingsReducer = (state = initialState, action) => {
    console.log(action)
    let currentSetting, currentAmount;
    switch(action.type) {
        case 'SHOW_SETTING' :
            currentSetting =  action.settingType;
            console.log(state[currentSetting])
            return {
                ...state,
                [currentSetting]: {
                    ...state[currentSetting],
                    show: true
                }
            }
        case 'UPDATE_SETTING' :
            currentSetting =  action.settingType;
            console.log(state[currentSetting])
            return {
                ...state,
                [currentSetting]: {
                    ...state[currentSetting],
                    show: false
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
        default :
            return state
    }

};

export default settingsReducer;
