import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  total = () => {
    const { expenses } = this.props;
    let valorTotal = 0;
    expenses.forEach((expense) => {
      valorTotal += expense.exchangeRates[expense.currency].ask * expense.value;
    });
    return valorTotal.toFixed(2);
  };

  render() {
    const { email } = this.props;
    console.log(this.total());
    const valorTotal = this.total();
    return (
      <div>
        Header TrybeWallet
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{valorTotal}</p>
        <p data-testid="header-currency-field">BRL </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf().isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
