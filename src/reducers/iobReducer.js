const initialState = {
    iobAmount: 0,
    iobTimeLeft: 0,
    iobStack: []
}

//create the reducer

const iobReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'handleDashForm' :
        console.log(action)
            return {
                ...state,
            }
        case 'IOB_ON_LOGIN' :
        console.log(action)
            return {
                ...state,
            }
        case 'UPDATE_IOB_ENTRY' :
        console.log(action)
            return {
                ...state,
            }
        case 'UPDATE_IOB' :
        console.log(action)
            return {
                ...state,
            }
        default :
            return state
    }

};

export default iobReducer;
