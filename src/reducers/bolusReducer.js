const initialState = {
    insulinType: 'Humalog',
    insulinAmount: 0,
    carbAmount: 0,
    bloodSugar: 110,
    suggestedBolus: 0,
    currentDate: "",
    currentTime: ""
}
//create the reducer

const bolusReducer = (state = initialState, action) => {
    console.log(action)

    switch(action.type) {
        case 'UPDATE_INPUT' :
            return {
                ...state,
                [action.inputType]: action.inputValue
            }
        default :
            return state
    }

};

export default bolusReducer;