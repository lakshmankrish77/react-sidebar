import { LOGIN, LOGOUT } from '../actions/authentication.action';
import { Users } from '../../pages/auth/LoginPage';

const initialState = {
  email: '',
  pass: '',
};

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        email: action.payload.email,
        pass: action.payload.password,
      };
    }
    default:
      return state;
  }
}
