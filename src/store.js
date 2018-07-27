import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; //defaults to index.js
import Thunk from 'redux-thunk';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(Thunk))

export default store
