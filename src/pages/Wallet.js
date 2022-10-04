import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <Header email={email} expenses={expenses}/>
        <WalletForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.Wallet,
});
export default connect(mapStateToProps)(Wallet);
