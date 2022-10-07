// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES, ADD_EXPENSES, DELETE_EXPENSE } from '../actions';

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
  case DELETE_EXPENSE:
    console.log(action.payload.expense.id);
    return {
      ...state,
      expenses: [...state.expenses.filter((ex) => ex.id !== action.payload.expense.id)],
    };
  default:
    return state;
  }
}

export default walletReducer;
