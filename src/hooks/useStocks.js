import { useSelector, useDispatch } from 'react-redux';

import {
  tickerSelector,
  fromDateSelector,
  toDateSelector,
} from '../redux/selectors';
import {
  setTickerAction,
  setFromDateAction,
  setToDateAction,
  loadResultsAction,
  setResultsAction,
  setErrorAction,
} from '../redux/actions';

import getTickerData from '../api/getTickerData';

const useStocks = () => {
  const ticker = useSelector(tickerSelector);
  const from = useSelector(fromDateSelector);
  const to = useSelector(toDateSelector);

  const dispatch = useDispatch();
  const setTicker = (value) => dispatch(setTickerAction(value));
  const setFrom = (value) => dispatch(setFromDateAction(value));
  const setTo = (value) => dispatch(setToDateAction(value));

  const validateInput = () => {
    if (ticker === '') {
      dispatch(setErrorAction("Ticker can't be empty"));
    } else if (!from) {
      dispatch(setErrorAction("'From' date can't be empty"));
    } else if (!to) {
      dispatch(setErrorAction("'To' date can't be empty"));
    } else if (new Date(from) > new Date(to)) {
      dispatch(setErrorAction("'To' should be greater than 'From"));
    } else {
      return true;
    }
  };

  const search = async () => {
    if (!validateInput()) {
      return;
    }

    dispatch(loadResultsAction());
    const { data, errorMessage } = await getTickerData({ ticker, from, to });
    dispatch(setResultsAction(data, errorMessage));
  };

  return {
    ticker,
    setTicker,
    from,
    setFrom,
    to,
    setTo,
    search,
  };
};

export default useStocks;
