import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';
import classNames from 'classnames';
// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.authorize(this.state.email, this.state.password);
  };

  render() {
    const { isAuthorized, authError } = this.props;
    const { email, password } = this.state;
    return isAuthorized === true ? (
      <Redirect to="/app" />
    ) : (
      <div className={styles.bg}>
        <div className={classNames(styles.form, 't-form')}>
          <p key="email">
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              type="text"
              name="email"
              className={classNames(styles.input, 't-input-email')}
              value={email}
              onChange={this.handleChange}
            />
          </p>
          <p key="password">
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className={classNames(styles.input, 't-input-password')}
              value={password}
              onChange={this.handleChange}
            />
          </p>
          {authError !== '' ? <p className={styles.error}>{authError}</p> : ''}
          <div className={styles.buttons}>
            <button
              className={classNames(styles.button, 't-login')}
              onClick={this.handleSubmit}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
