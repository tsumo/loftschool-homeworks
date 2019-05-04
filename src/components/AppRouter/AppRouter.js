import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';

// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

export default () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/shows/:id" component={ShowPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);
