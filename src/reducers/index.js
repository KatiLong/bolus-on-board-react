import { combineReducers } from 'redux';

import userReducer from './userReducer.js';
import settingsReducer from './settingsReducer.js';
import bolusReducer from './bolusReducer.js'

const rootReducer = combineReducers({
    user: userReducer,
    settings: settingsReducer,
    bolus: bolusReducer
})

export default rootReducer;
