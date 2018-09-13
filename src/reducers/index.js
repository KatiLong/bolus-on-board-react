import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import settingsReducer from './settingsReducer.js';
import iobReducer from './iobReducer';

const rootReducer = combineReducers({
    user: userReducer,
    settings: settingsReducer,
    iob: iobReducer
})

export default rootReducer;
