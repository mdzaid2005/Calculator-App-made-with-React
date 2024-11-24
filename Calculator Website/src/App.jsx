import React, { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(eval(expression).toString());
      } catch {
        setResult('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator-container">
      <h1>Calculator App</h1>
      <Display expression={expression} result={result} />
      <Buttons handleClick={handleClick} />
    </div>
  );
}

export default App;
