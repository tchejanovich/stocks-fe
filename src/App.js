import React, { useState } from 'react';

import './App.css';
import Results from './components/Results';
import useStocks from './hooks/useStocks';

const App = () => {
  const { ticker, setTicker, from, setFrom, to, setTo, search } = useStocks();

  return (
    <div style={{ margin: 100 }}>
      <div>
        <div style={{ marginTop: 5 }}>
          <span style={{ marginRight: 15 }}>Enter a Stock Ticker:</span>
          <input
            type="text"
            value={ticker}
            placeholder="AAPL"
            onChange={(event) => setTicker(event.target.value)}
          />
          <button
            onClick={search}
            style={{
              margin: '5px 0 0 10px',
              backgroundColor: '#0093ff',
              marginTop: 5,
              color: 'white',
              border: 'none',
              padding: 7,
              width: 107,
              borderRadius: 10,
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <span>Search</span>
          </button>
        </div>
        <div style={{ marginTop: 5 }}>
          <span style={{ marginRight: 15 }}>From:</span>
          <input
            type="date"
            value={from}
            onChange={(event) => setFrom(event.target.value)}
          />
        </div>
        <div style={{ marginTop: 5 }}>
          <span style={{ marginRight: 15 }}>To:</span>
          <input
            type="date"
            value={to}
            onChange={(event) => setTo(event.target.value)}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: 50,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Results />
      </div>
    </div>
  );
};

export default App;
