// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER_EMAIL } from '../actions';

const INITIAL_STATE = {};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default userReducer;
