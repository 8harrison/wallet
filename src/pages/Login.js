import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    userEmail: '',
    senha: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  verificaSenha = (senha) => {
    const MIN_SENHA = 6;
    if (senha.length >= MIN_SENHA) {
      return true;
    }
  };

  // https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  verifica = () => {
    const { userEmail, senha } = this.state;
    const re = /\S+@\S+\.\S+/;
    if (!re.test(userEmail) || !this.verificaSenha(senha)) {
      return true;
    }
  };

  modificaHistory = () => {
    const { history } = this.props;
    history.push('/carteira');
  };

  render() {
    const { userEmail, senha } = this.state;
    const { email } = this.props;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          name="userEmail"
          value={ userEmail }
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          name="senha"
          value={ senha }
        />
        <button
          type="button"
          disabled={ this.verifica() }
          onClick={ () => { email(userEmail); this.modificaHistory(); } }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  email: PropTypes.func.isRequired,
  history: PropTypes.shape({
    length: PropTypes.number,
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  email: (email) => { dispatch(addEmail(email)); },
});

export default connect(null, mapDispatchToProps)(Login);
