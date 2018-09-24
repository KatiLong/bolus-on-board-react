const initialState = {
    iobAmount: 0,
    iobTimeLeft: 0,
    iobStack: []
}

//create the reducer

const iobReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ON_USER_LOGIN' : // login.js
            console.log(action);
            return Object.assign({}, state, {
                ...action.userDetails.iob,
                iobStack: [...action.userDetails.iob.iobStack]
            })
        case 'ADD_IOB_ENTRY' : // bolus.js
            console.log(action)
            return {
                ...state,
                iobStack: [...state.iobStack, action.bolusEntry]
            }
        case 'UPDATE_IOB_ENTRY' : // Not Finished
            console.log(action)
            return {
                ...state
            }
        case 'DELETE_IOB_ENTRY' : // Not Finished
            console.log(action)
                return {
                    ...state
                }
        case 'UPDATE_IOB' : // Not Finished
            console.log(action)
            return {
                ...state,
                iobAmount: action.iobAmount,
                iobTimeLeft: action.iobTimeLeft
            }
        case 'UPDATE_IOB_BOLUS' : // For Bolus so I can retain current Code
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
