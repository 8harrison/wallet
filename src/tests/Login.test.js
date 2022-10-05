import { render, screen } from '@testing-library/react';
import App from '../App';

describe('testando Login', () => {
  test('testa se aparece os campos', () => {
    render(<App />);
    const inputs = screen.getAllByRole('input');
    const btn = screen.getByText(/entrar/i);

    expect(inputs[0]).toBeInTheDocument();
    expect(inputs[1]).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
