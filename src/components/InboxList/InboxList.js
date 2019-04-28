import React from 'react';
import { withData } from '../../context/Data/Data.js';
import MailList from '../MailList/MailList.js';
// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

function InboxList(props) {
  const { data } = props;
  return <MailList className="t-inbox-list" data={data.inbox} folder="inbox" />;
}

export default withData(InboxList);
