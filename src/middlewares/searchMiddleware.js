import { search } from '../api';
import { searchRequest, searchFailure, searchSuccess } from '../actions';

// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.

export const searchMiddleware = store => next => action => {
  const { type, payload } = action;

  if (type === searchRequest.toString()) {
    search(payload)
      .then(res => store.dispatch(searchSuccess(res)))
      .catch(err => store.dispatch(searchFailure(err)));
  }

  return next(action);
};

export default searchMiddleware;
