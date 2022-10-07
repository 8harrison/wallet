import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
// tive ajuda da Caren

it('botao adc despesa', () => {
  const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
  const { location: { pathname } } = history;
  const buttonAdc = screen.getByRole('button', {
    name: /adicionar despesa/i,
  });
  expect(pathname).toBe('/carteira');
  expect(buttonAdc).toBeInTheDocument();
});
it('adc despesa', async () => {
  const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
  const { location: { pathname } } = history;
  const value1 = screen.getByTestId('value-input');
  const description1 = screen.getByTestId('description-input');
  const buttonAdc = screen.getByRole('button', {
    name: /adicionar despesa/i,
  });
  expect(pathname).toBe('/carteira');
  expect(buttonAdc).toBeInTheDocument();
  userEvent.type(value1, '20');
  userEvent.type(description1, 'hamburguer');
  userEvent.click(buttonAdc);
  const btnExcluir = await screen.findByTestId('delete-btn');
  const tipoGasto = await screen.findByRole('cell', {
    name: /alimentação/i,
  });
  expect(btnExcluir).toBeInTheDocument();
  expect(tipoGasto).toBeInTheDocument();
  userEvent.click(btnExcluir);
});
describe('testando Login', () => {
  test('testa se aparece os campos de login', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const btn = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    userEvent.type(emailInput, 'alguem@alguem.com');
    userEvent.type(passwordInput, '123456');
    userEvent.click(btn);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });

  test('', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const walletInputs = screen.getByTestId('value-input');
    const btn = screen.getByRole('button');
    const description = screen.getByTestId('description-input');

    expect(description).toBeInTheDocument();
    expect(walletInputs).toBeInTheDocument();
    expect(btn).toBeInTheDocument();

    userEvent.type(description, 'hamburguer');
    userEvent.type(walletInputs, 12);
    userEvent.click(btn);

    // const hamburguer = await screen.getByText('hamburguer');
    // expect(hamburguer).toBeInTheDocument();
  });

  test('testa carteira', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    expect(value).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
  });
});
//   // test('testa o wallet form', () => {
//   //   renderWithRouterAndRedux(<App />);
//   //   const inputs = screen.getAllByRole('input');

//   //   expect(inputs[0]).toBeInTheDocument();
//   //   expect(inputs[1]).toBeInTheDocument();

//   //   userEvent.type(inputs[0], 'alguem@alguem.com');
//   //   userEvent.type(inputs[1], '123456');

//   //   const btn = screen.getByText(/entrar/i);
//   //   userEvent.click(btn);

//   //   const input = screen.getAllByRole('input');
//   //   expect(input[0]).toBeInTheDocument();
//   //   expect(input[1]).toBeInTheDocument();
//   // });
//   // test('testa o header', () => {
//   renderWithRouterAndRedux(<Header />);
//   const paragrafos = screen.getAllByRole('paragraph');

//   expect(paragrafos[0]).toBeInTheDocument();
//   expect(paragrafos[1]).toBeInTheDocument();
//   expect(total()).toBeCalledTimes(1);
// });
// test('testa o header', () => {
//   renderWithRouterAndRedux(<Login />);
//   const inputs = screen.getAllByRole('input');

//   expect(inputs[0]).toBeInTheDocument();
//   expect(inputs[1]).toBeInTheDocument();
//   expect(total()).toBeCalledTimes(1);
// });
// });
