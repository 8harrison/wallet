// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = { currencies: [], expenses: [] };

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((cur) => cur !== 'USDT'),
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default walletReducer;
