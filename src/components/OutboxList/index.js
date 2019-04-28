import React from 'react';
import { withData } from '../../context/Data/Data.js';
import MailList from '../MailList/MailList.js';

function OutboxList(props) {
  return (
    <MailList
      className="t-outbox-list"
      data={props.data.outbox}
      folder="outbox"
    />
  );
}

export default withData(OutboxList);
