// @format
import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    values: {
      firstname: '',
      lastname: '',
      password: ''
    },
    errors: {},
    isSubmitted: false
  };

  changeFirstName = e => {
    this.setState({
      values: { ...this.state.values, firstname: e.target.value },
      errors: {}
    });
  };

  changeLastName = e => {
    this.setState({
      values: { ...this.state.values, lastname: e.target.value },
      errors: {}
    });
  };

  changePassword = e => {
    this.setState({
      values: { ...this.state.values, password: e.target.value },
      errors: {}
    });
  };

  checkFirstName = firstName => {
    return firstName === ''
      ? 'Нужно указать имя'
      : firstName.toLowerCase() !== 'james'
      ? 'Имя указано не верно'
      : '';
  };

  checkLastName = lastName => {
    return lastName === ''
      ? 'Нужно указать фамилию'
      : lastName.toLowerCase() !== 'bond'
      ? 'Фамилия указана не верно'
      : '';
  };

  checkPassword = password => {
    return password === ''
      ? 'Нужно указать пароль'
      : password !== '007'
      ? 'Пароль указан не верно'
      : '';
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        errors: {
          firstname: this.checkFirstName(this.state.values.firstname),
          lastname: this.checkLastName(this.state.values.lastname),
          password: this.checkPassword(this.state.values.password)
        }
      },
      () => {
        if (
          this.state.errors.firstname === '' &&
          this.state.errors.lastname === '' &&
          this.state.errors.password === ''
        ) {
          this.setState({ isSubmitted: true });
        }
      }
    );
  };

  render() {
    if (this.state.isSubmitted) {
      return (
        <div className="app-container">
          <img
            src={require('./assets/bond_approve.jpg')}
            alt="bond approve"
            className="t-bond-image"
          />
        </div>
      );
    }
    return (
      <div className="app-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Введите свои данные, ёпт</h1>
          <p key="firstname" className="field">
            <label className="field__label" htmlFor="firstname">
              <span className="field-label">Имя</span>
            </label>
            <input
              value={this.state.values.firstname}
              className="field__input field-input t-input-firstname"
              type="text"
              name="firstname"
              onChange={this.changeFirstName}
            />
            <span className="field__error field-error t-error-firstname">
              {this.state.errors.firstname}
            </span>
          </p>

          <p key="lastname" className="field">
            <label className="field__label" htmlFor="lastname">
              <span className="field-label">Фамилия</span>
            </label>
            <input
              value={this.state.values.lastname}
              className="field__input field-input t-input-lastname"
              type="text"
              name="lastname"
              onChange={this.changeLastName}
            />
            <span className="field__error field-error t-error-lastname">
              {this.state.errors.lastname}
            </span>
          </p>

          <p key="password" className="field">
            <label className="field__label" htmlFor="password">
              <span className="field-label">Пароль</span>
            </label>
            <input
              value={this.state.values.password}
              className="field__input field-input t-input-password"
              type="password"
              name="lastname"
              onChange={this.changePassword}
            />
            <span className="field__error field-error t-error-password">
              {this.state.errors.password}
            </span>
          </p>

          <div className="form__buttons">
            <input
              type="submit"
              className="button t-submit"
              value="Проверить"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
