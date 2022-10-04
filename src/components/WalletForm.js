import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDespesa, fetchCurrencies } from '../redux/actions/index';

class WalletForm extends Component {
  state = {
    expenses: [],
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

  btnSalvaValores = () => {
    const {
      quantia,
      descricao,
      metodoDePagamento,
      finalidade,
      moeda,
      expenses,
    } = this.state;
    const { currencies } = this.props;
    const moedaCotada = currencies.find((curry) => curry[0] === moeda);
    const cotacao = moedaCotada[1].ask;
    let valorTotal = cotacao * parseFloat(quantia);
    valorTotal = valorTotal.toFixed(2);
    this.setState({
      expenses: [
        ...expenses,
        [quantia, descricao, metodoDePagamento, finalidade, moeda, valorTotal],
      ],
    });
  };

  render() {
    const {
      expenses,
    } = this.state;
    const { currencies, dispatch } = this.props;
    return (
      <div>
        WalletForm
        <input
          data-testid="value-input"
          type="text"
          name="quantia"
          onChange={ this.handleChange }
        />
        <input
          data-testid="description-input"
          type="text"
          name="descricao"
          onChange={ this.handleChange }
        />
        <select
          data-testid="method-input"
          name="metodoDePagamento"
          onChange={ this.handleChange }
        >
          <option> Dinheiro</option>
          <option> Cartão de crédito</option>
          <option> Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          name="finalidade"
          onChange={ this.handleChange }
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
        >
          {currencies.map((currency) => (
            <option key={ currency[0] }>{currency[0]}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={ () => {
            this.btnSalvaValores();
            dispatch(addDespesa(expenses));
          } }
        >
          Adicionar despesa
        </button>
        {expenses.map((expense, index) => (
          <div key={ index }>
            <p>{expense[5]}</p>
          </div>
        ))}
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
  currenciesSelected: state.wallet.currenciesSelected,
});

// const mapDispatchToProps = (dispatch) => ({
//   dispatchExpenses: (expenses) => dispatch(addDespesa(expenses)),
// });
export default connect(mapStateToProps)(WalletForm);
