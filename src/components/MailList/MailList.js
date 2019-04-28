import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MailList.module.css';
import classNames from 'classnames';
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

function MailList(props) {
  const { data, className } = props;
  return (
    <div className={classNames(styles.container, className)}>
      {data.map(item => (
        <NavLink
          to={'/app/' + props.folder + '/' + item.id}
          className={styles.link}
          key={item.id}
        >
          {item.body}
        </NavLink>
      ))}
    </div>
  );
}

export default MailList;
