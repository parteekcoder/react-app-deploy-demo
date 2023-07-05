import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="container">
      <h1 className="title">Counter App</h1>
      <div className="counter">
        <button className="decrement" onClick={decrementCount}>
          -
        </button>
        <p className="count">{count}</p>
        <button className="increment" onClick={incrementCount}>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
