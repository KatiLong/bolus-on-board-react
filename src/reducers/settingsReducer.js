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
    switch(action.type) {
        case 'updateSetting' :
            return Object.assign({}, state, {
                setting: action.setting
            })
        default :
            return state
    }

};

export default settingsReducer;
