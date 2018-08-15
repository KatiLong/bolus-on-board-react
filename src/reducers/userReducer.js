const initialState = {
    email: '',
    name: ''
}

//create the reducer
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'signupSubmit' :
            return {}
        default :
            return state
    }

};

export default userReducer;
