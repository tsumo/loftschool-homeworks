import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
  render = () => {
    const { isAuthorized, component: Component, path } = this.props;
    const redirect = { pathname: '/login' };
    return isAuthorized === true ? (
      <Component {...this.props} />
    ) : (
      <Redirect to={redirect} />
    );
  };
}

export default withAuth(PrivateRoute);
