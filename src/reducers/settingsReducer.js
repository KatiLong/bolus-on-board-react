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
    let currentSetting;
    switch(action.type) {
        case 'SHOW_SETTING' :
            currentSetting =  action.settingType + 'Show';
            console.log(state[action.settingType])
            return {
                ...state,
                [currentSetting]: true
            }
        case 'UPDATE_SETTING' :
            currentSetting = action.settingType;
            return {
                ...state,
                [currentSetting['show']]: false
            }
        case 'SETTING_ON_CHANGE' :
            return {
                ...state
            }
        default :
            return state
    }

};

export default settingsReducer;
