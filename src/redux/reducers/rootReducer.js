import { combineReducers } from 'redux';
import { register } from './register.reducer';
import { login } from './authentication.reducer';

const rootReducer = combineReducers({ login, register });
export default rootReducer;
