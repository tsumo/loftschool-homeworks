import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import Mail from '../Mail';
import styles from './AppRouter.module.css';
import classNames from 'classnames';
// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

function AppRouter(props) {
  function findTitle(location) {
    switch (location.pathname) {
      case '/app/inbox':
        return 'Inbox';
      case '/app/outbox':
        return 'Outbox';
      default:
        return 'Home';
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={classNames(styles.navList, 't-nav-list')}>
            <li className={styles.navElement}>
              <NavLink
                exact
                to="/app"
                aria-current="page"
                className={classNames(styles.link, 't-link-home')}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navElement}>
              <NavLink
                exact
                to="/app/inbox"
                aria-current="page"
                className={classNames(styles.link, 't-link-inbox')}
              >
                Inbox
              </NavLink>
            </li>
            <li className={styles.navElement}>
              <NavLink
                exact
                to="/app/outbox"
                aria-current="page"
                className={classNames(styles.link, 't-link-outbox')}
              >
                Outbox
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.content}>
          <h3 className={styles.title}>{findTitle(props.location)}</h3>
          <Switch>
            <Route exact path="/app" component={Home} />
            <Route exact path="/app/inbox" component={InboxList} />
            <Route exact path="/app/outbox" component={OutboxList} />
            <Route exact path="/app/inbox/:id" component={Mail} />
            <Route exact path="/app/outbox/:id" component={Mail} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default AppRouter;
