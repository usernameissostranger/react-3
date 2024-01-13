import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => setInput((prevInput) => prevInput + value);
  const handleCalculate = () => setResult(() => eval(input).toString());

  return (
    <div className="calculator">
      <input onChange={(e) => setInput(e.target.value)} value={input}  className="inputField" />
      <div className="buttonRow">
        {['1', '2', '3', '+'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
      </div>
      <div className="buttonRow">
        {['4', '5', '6', '-'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
      </div>
      <div className="buttonRow">
        {['7', '8', '9', '*'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
      </div>
      <div className="buttonRow">
        <button onClick={() => handleClick('0')} className="zeroButton">
          0
        </button>
        <button onClick={handleCalculate} className="equalButton">
          =
        </button>
        <button onClick={() => handleClick('/')} className="operatorButton">
          /
        </button>
      </div>
      <div className="result">
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Calculator;
