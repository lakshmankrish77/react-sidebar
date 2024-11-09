import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from '../actions/register.action';

const initialStateRegister = {
  user: '',
  email: '',
  password: '',
  passwordConf: '',
  terms: false,
};

export function register(state = initialStateRegister, action) {
  switch (action.type) {
    case CREATE_USER: {
      return action.payload;
    }
    case DELETE_USER: {
      return state;
    }
    case UPDATE_USER: {
      console.log('UPDATE_USER');
      return state;
    }
    default:
      return state;
  }
}
