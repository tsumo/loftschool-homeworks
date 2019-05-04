import { show } from '../api';
import { showRequest, showFailure, showSuccess } from '../actions';

// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

export const showMiddleware = store => next => action => {
  const { type, payload } = action;

  if (type === showRequest.toString()) {
    show(payload)
      .then(res => store.dispatch(showSuccess(res)))
      .catch(err => store.dispatch(showFailure(err)));
  }

  return next(action);
};

export default showMiddleware;
