import { useState } from 'react';
import './App.scss';

export const App = () => {
  const [count, setCount] = useState(0);

  const isIncreasing = false;

  const addOne = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;

      if (!isIncreasing) {
        return newCount;
      }

      return newCount % 5 === 0 ? prevCount + 101 : newCount;
    });
  };

  const add100 = () => {
    setCount(prevCount => {
      if (isIncreasing && prevCount % 5 === 0 && prevCount !== 0) {
        return prevCount;
      }

      return prevCount + 100;
    });
  };

  // DON'T change the code below
  const increase = () => {
    addOne();
    if (count % 5 === 0) {
      add100();
    }
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
