import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Header from '../components/Header';
import renderWithRedux from './helpers/renderWithRouter';

describe('testando Login', () => {
  test('testa se aparece os campos de login', () => {
    renderWithRedux(<App />);
    const inputs = screen.getAllByRole('input');

    expect(inputs[0]).toBeInTheDocument();
    expect(inputs[1]).toBeInTheDocument();

    userEvent.type(inputs[0], 'alguem@alguem.com');
    userEvent.type(inputs[1], '123456');

    // expect(btn).toBeInTheDocument();
  });

  test('testa o wallet form', () => {
    renderWithRedux(<App />);
    const inputs = screen.getAllByRole('input');

    expect(inputs[0]).toBeInTheDocument();
    expect(inputs[1]).toBeInTheDocument();

    userEvent.type(inputs[0], 'alguem@alguem.com');
    userEvent.type(inputs[1], '123456');

    const btn = screen.getByText(/entrar/i);
    userEvent.click(btn);

    const input = screen.getAllByRole('input');
    expect(input[0]).toBeInTheDocument();
    expect(input[1]).toBeInTheDocument();
  });
  test('testa o header', () => {
    renderWithRedux(<Header />);
    const paragrafos = screen.getAllByRole('paragraph');

    expect(paragrafos[0]).toBeInTheDocument();
    expect(paragrafos[1]).toBeInTheDocument();
    expect(total()).toBeCalledTimes(1);
  });
});
