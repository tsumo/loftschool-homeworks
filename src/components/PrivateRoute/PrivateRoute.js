import React from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';

// Реализуйте приватный роут.
// Он должен проверять статус авторизации
// и перенаправлять пользователя на страницу логина,
// если тот не авторизован.
function PrivateRoute(props) {
  const { isAuthorized, component: Component } = props;
  return isAuthorized === true ? (
    <Component {...props} />
  ) : (
    <Redirect to="/login" />
  );
}

export default withAuth(PrivateRoute);
