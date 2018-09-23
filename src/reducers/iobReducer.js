const initialState = {
    iobAmount: 0,
    iobTimeLeft: 0,
    iobStack: []
}

//create the reducer

const iobReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ON_USER_LOGIN' :
            console.log(action);
            return Object.assign({}, state, {
                ...action.userDetails.iob,
                iobStack: [...action.userDetails.iob.iobStack]
            })
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
                ...state
            }
        case 'UPDATE_IOB' :
        console.log(action)
            return {
                ...state,
                iobAmount: action.iobAmount,
                iobTimeLeft: action.iobTimeLeft
            }
        default :
            return state
    }

};

export default iobReducer;
