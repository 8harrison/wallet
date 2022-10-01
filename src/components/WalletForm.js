import { prototype } from 'mocha';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        WalletForm
        <input data-testid="value-input" type="text" />
        <input data-testid="description-input" type="text" />
        <select data-testid="method-input">
          <option> Dinheiro</option>
          <option> Cartão de crédito</option>
          <option> Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option> Alimentação</option>
          <option> Lazer</option>
          <option> Trabalho</option>
          <option> Transporte</option>
          <option> Saúde</option>
        </select>
        <select data-testid="currency-input">
          {currencies.map((currency) => <option key={ currency }>{currency}</option>) }
        </select>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.shape({
    map: prototype.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
export default connect(mapStateToProps)(WalletForm);
