import { showRequest, showFailure, showSuccess } from '../actions';

const initialState = {
  isLoading: true,
  data: null,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case showRequest.toString():
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null
      };
    case showSuccess.toString():
      return {
        ...state,
        isLoading: false,
        data: payload
      };
    case showFailure.toString():
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
};
