import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDespesa, excluiExpense } from '../redux/actions';

class Table extends Component {
  exclui = (expense) => {
    const { dispatch } = this.props;
    dispatch(excluiExpense({expense}));
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        Table
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {expenses.map((expense) => (
            <tbody key={ expense.id }>
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>
                  {Number(expense.exchangeRates[expense.currency].ask).toFixed(
                    2,
                  )}
                </td>
                <td>
                  {(
                    expense.exchangeRates[expense.currency].ask * expense.value
                  ).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.exclui(expense) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
