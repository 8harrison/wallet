import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        Header TrybeWallet
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{expenses}
        </p>
        <p data-testid="header-currency-field">BRL </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
