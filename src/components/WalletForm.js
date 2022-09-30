import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div>
        WalletForm
        <input data-testid="value-input" type="text" />
        <input data-testid="description-input" type="text" />
        <select data-testid="currency-input">
          {/* <option> {currencies}</option> */}
        </select>
      </div>
    );
  }
}

export default WalletForm;
