import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDespesa, fetchCurrencies } from '../redux/actions/index';

class WalletForm extends Component {
  state = {
    id: 0,
    quantia: 0,
    descricao: '',
    metodoDePagamento: 'Dinheiro',
    finalidade: 'Alimentação',
    moeda: 'USD',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  btnSalvaValores = async () => {
    const {
      quantia,
      descricao,
      metodoDePagamento,
      finalidade,
      moeda,
      id,
    } = this.state;
    const { dispatch } = this.props;
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const data = await response.json();
    dispatch(
      addDespesa(
        {
          id,
          value: quantia,
          currency: moeda,
          method: metodoDePagamento,
          tag: finalidade,
          description: descricao,
          exchangeRates: data,

        },
      ),
    );

    this.setState({
      quantia: '',
      descricao: '',
      metodoDePagamento: 'Dinheiro',
      finalidade: 'Alimentação',
      moeda: 'USD',
      id: id + 1,
    });
  };

  render() {
    const {
      quantia,
      descricao,
      metodoDePagamento,
      finalidade,
      moeda,
    } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        WalletForm
        <input
          data-testid="value-input"
          type="text"
          name="quantia"
          onChange={ this.handleChange }
          value={ quantia }
        />
        <input
          data-testid="description-input"
          type="text"
          name="descricao"
          onChange={ this.handleChange }
          value={ descricao }
        />
        <select
          data-testid="method-input"
          name="metodoDePagamento"
          onChange={ this.handleChange }
          value={ metodoDePagamento }
        >
          <option> Dinheiro</option>
          <option> Cartão de crédito</option>
          <option> Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="finalidade"
          onChange={ this.handleChange }
          value={ finalidade }
        >
          <option> Alimentação</option>
          <option> Lazer</option>
          <option> Trabalho</option>
          <option> Transporte</option>
          <option> Saúde</option>
        </select>
        <select
          data-testid="currency-input"
          name="moeda"
          onChange={ this.handleChange }
          value={ moeda }
        >
          {currencies.map((currency) => (
            <option key={ currency[0] }>{currency[0]}</option>
          ))}
        </select>
        <button type="button" onClick={ this.btnSalvaValores }>
          Adicionar despesa
        </button>
        {/* {expenses.map((expense, index) => (
          <div key={ index }>
            <p>{expense.total}</p>
          </div>
        ))} */}
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

// const mapDispatchToProps = (dispatch) => ({
//   dispatchExpenses: (expenses) => dispatch(addDespesa(expenses)),
// });
export default connect(mapStateToProps)(WalletForm);
