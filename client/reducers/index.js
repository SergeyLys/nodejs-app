import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import credentials from './credentials';

export default combineReducers({
    routing: routerReducer,
    credentials
});