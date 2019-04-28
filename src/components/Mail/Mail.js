import React from 'react';
import { withData } from '../../context/Data/Data.js';
import styles from './Mail.module.css';
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

function Mail(props) {
  function findById(id) {
    for (let item of props.data.inbox) {
      if (item.id === id) {
        return item;
      }
    }
    for (let item of props.data.outbox) {
      if (item.id === id) {
        return item;
      }
    }
  }

  const { match } = props;
  const id = match.params.id;
  const item = findById(id);
  return (
    <div className={styles.container}>
      {item.from ? (
        <p className="t-mail-from">
          From: <b>{item.from}</b>
        </p>
      ) : (
        <p className="t-mail-to">
          From: <b>{item.to}</b>
        </p>
      )}
      <p className="t-mail-body">{item.body}</p>
    </div>
  );
}

export default withData(Mail);
