// Coloque aqui suas actions
export const ADD_USER_EMAIL = 'ADD_USER_EMAIL';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const addEmail = (email) => ({ type: ADD_USER_EMAIL, email });

const receiveCurrencies = (payload) => ({
  type: RECEIVE_CURRENCIES,
  payload,
});

export const fetchCurrencies = () => async (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const data = response.json();
  dispatch(receiveCurrencies(data));
};
