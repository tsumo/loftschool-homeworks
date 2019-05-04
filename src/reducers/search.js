import { searchRequest, searchFailure, searchSuccess } from '../actions';

const initialState = {
  isLoading: false,
  shows: null,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case searchRequest.toString():
      return {
        ...state,
        isLoading: true,
        shows: null,
        error: null
      };
    case searchSuccess.toString():
      return {
        ...state,
        isLoading: false,
        shows: payload
      };
    case searchFailure.toString():
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
};
