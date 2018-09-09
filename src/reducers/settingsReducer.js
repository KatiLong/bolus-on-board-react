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
    targetBgShow: false
}

//create the reducer
const settingsReducer = (state = initialState, action) => {
    console.log(action)
    let currentSetting =  action.settingType + 'Show';
    switch(action.type) {
        case 'UPDATE_SETTING' :
            return {
                ...state,
                [currentSetting]: false
            }
        case 'SHOW_SETTING' :
            return {
                ...state,
                [currentSetting]: true
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
