const initialState = {
    incrementAmount: 5,
    incrementShow: false,
    durationAmount: 4,
    durationShow: false,
    carbRatioAmount: 9,
    carbRatioshow: false,
    correctionAmount: 32,
    correctionAmountShow: false,
    targetBgAmount: 110,
    targetBgShow: false
}

//create the reducer
const settingsReducer = (state = initialState, action) => {
    console.log(action)

    switch(action.type) {
        case 'UPDATE_SETTING' :
            return Object.assign({}, state, {
                setting: action.setting
            })
        case 'SHOW_SETTING' :
            let currentSetting =  action.settingType + 'Show';
            console.log(currentSetting);
            return {
                ...state,
                [currentSetting]: true
            }
        default :
            return state
    }

};

export default settingsReducer;
