import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import settingsReducer from './settingsReducer.js';

const rootReducer = combineReducers({
    user: userReducer,
    settings: settingsReducer
})

export default rootReducer;
