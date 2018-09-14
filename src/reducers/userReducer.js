const initialState = {
    email: 'carmen@gmail.com',
    name: 'Carmen SanDiego'
}

//create the reducer
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGNIN' :
            return {
                ...state
            }
        default :
            return state
    }

};

export default userReducer;
