import { createAction } from 'redux-actions';

export const showRequest = createAction('SHOW_REQUEST');
export const showFailure = createAction('SHOW_FAILURE');
export const showSuccess = createAction('SHOW_SUCCESS');
