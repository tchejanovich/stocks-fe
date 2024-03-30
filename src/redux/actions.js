export const SET_TICKER = 'SET_TICKER';
export const SET_FROM_DATE = 'SET_FROM_DATE';
export const SET_TO_DATE = 'SET_TO_DATE';
export const LOAD_RESULTS = 'LOAD_RESULTS';
export const SET_RESULTS = 'SET_RESULTS';
export const SET_ERROR = 'SET_ERROR';

export function setTickerAction(value) {
  return { type: SET_TICKER, payload: { value } };
}

export function setFromDateAction(value) {
  return { type: SET_FROM_DATE, payload: { value } };
}

export function setToDateAction(value) {
  return { type: SET_TO_DATE, payload: { value } };
}

export function loadResultsAction() {
  return { type: LOAD_RESULTS };
}

export function setResultsAction(data, errorMessage) {
  return { type: SET_RESULTS, payload: { data, errorMessage } };
}

export function setErrorAction(value) {
  return { type: SET_ERROR, payload: { value } };
}
