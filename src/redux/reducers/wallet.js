// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = { currencies: [], expenses: [] };

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: Object.entries(action.payload).filter((cur) => cur[0] !== 'USDT'),
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
