const initialState = {
    email: 'carmen@gmail.com',
    name: 'Carmen SanDiego',
    settingsId: '',
    iobId: ''
}

//create the reducer
const userReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'LOGIN' :
            return {
                ...state
            }
        case 'registerUser' :
            return {
                ...state
            }
        default :
            return state
    }

};

export default userReducer;
