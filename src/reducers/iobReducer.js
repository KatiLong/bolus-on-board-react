const initialState = {
    iobAmount: 0,
    iobTimeLeft: 0,
    iobStack: []
}

//create the reducer

const iobReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case 'IOB_ON_LOGIN' :
            return {
                ...state,
            }
        case 'UPDATE_IOB_ENTRY' :
            return {
                ...state,
            }
        case 'UPDATE_IOB' :
            return {
                ...state,
            }
        default :
            return state
    }

};

export default iobReducer;
