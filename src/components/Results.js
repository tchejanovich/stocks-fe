import React from 'react';
import { useSelector } from 'react-redux';

import DataRow from './DataRow';

import { resultsSelector } from '../redux/selectors';

const Results = () => {
  const { loading, errorMessage, data, firstLoadTriggered } =
    useSelector(resultsSelector);

  if (loading) {
    return <div>Loading..</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage} </div>;
  }

  if (!firstLoadTriggered) {
    return null;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <DataRow
        backgroundColor="grey"
        fontColor="white"
        values={['Item', 'Maximum', 'Minimum', 'Average']}
      />
      <DataRow
        backgroundColor="lightgrey"
        values={[
          'Price',
          `$${data.max_price.toFixed(2)}`,
          `$${data.min_price.toFixed(2)}`,
          `$${data.average_price.toFixed(2)}`,
        ]}
      />
      <DataRow
        values={[
          'Volume',
          data.max_volume.toFixed(2),
          data.min_volume.toFixed(2),
          data.average_volume.toFixed(2),
        ]}
      />
      <DataRow backgroundColor="lightgrey" values={new Array(4).fill('')} />
    </div>
  );
};

export default Results;
