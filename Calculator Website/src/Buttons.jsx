import React from 'react';
import './Buttons.css';

function Buttons({ handleClick }) {
  const buttonValues = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  return (
    <div className="buttons-container">
      {buttonValues.map((value) => (
        <button
          key={value}
          onClick={() => handleClick(value)}
          className={`button ${value === 'C' ? 'clear' : value === '=' ? 'equals' : ''}`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
