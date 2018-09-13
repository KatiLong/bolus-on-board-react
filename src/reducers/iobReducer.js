const initialState = {
    iobAmount: 0,
    iobTimeLeft: 0,
    iobStack: []
}

//create the reducer

const iobReducer = (state = initialState, action) => {
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
        default :
            return state
    }

};

export default iobReducer;
