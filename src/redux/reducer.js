import {
  SET_TICKER,
  SET_FROM_DATE,
  SET_TO_DATE,
  LOAD_RESULTS,
  SET_RESULTS,
  SET_ERROR,
} from '../redux/actions';

const initialState = {
  ticker: '',
  fromDate: null,
  toDate: null,
  results: {
    firstLoadTriggered: false,
    loading: false,
    errorMessage: null,
    data: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKER:
      return {
        ...state,
        ticker: action.payload.value,
      };

    case SET_FROM_DATE:
      return {
        ...state,
        fromDate: action.payload.value,
      };

    case SET_TO_DATE:
      return {
        ...state,
        toDate: action.payload.value,
      };

    case LOAD_RESULTS:
      return {
        ...state,
        results: {
          firstLoadTriggered: true,
          loading: true,
          errorMessage: null,
          data: null,
        },
      };

    case SET_RESULTS:
      return {
        ...state,
        results: {
          ...state.results,
          loading: false,
          errorMessage: action.payload.errorMessage,
          data: action.payload.data,
        },
      };

    case SET_ERROR:
      return {
        ...state,
        results: {
          ...state.results,
          errorMessage: action.payload.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
