import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello, TrybeWallet!
        <Route path="/" component={ Login } />
        <Route path="/carteira" component={ wallet } />
      </div>
    );
  }
}

export default App;
