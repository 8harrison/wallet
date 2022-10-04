// Coloque aqui suas actions
export const ADD_USER_EMAIL = 'ADD_USER_EMAIL';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addEmail = (payload) => ({ type: ADD_USER_EMAIL, payload });

const receiveCurrencies = (payload) => ({
  type: RECEIVE_CURRENCIES,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const data = await response.json();
  dispatch(receiveCurrencies(data));
};

export const addDespesa = (payload) => ({ type: ADD_EXPENSES, payload });
