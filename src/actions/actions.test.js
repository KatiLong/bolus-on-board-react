import {
    registerUser,
    loginUser,
    ON_USER_LOGIN,
    UPDATE_IOB,
    updateIobApi,
    IOB_ON_LOGIN,
    ADD_IOB_ENTRY
} from './actions';


describe('loginUser', () => {
    it('Should login User', () => {
        const user = {
            username: this.state.username,
            password: this.state.password
        };

        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});

describe('generateAuralUpdate', () => {
    it('Should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('ON_USER_LOGIN', () => {
    it('Should return the action', () => {
        const guess = 10;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});