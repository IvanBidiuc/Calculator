import React, { useState, useCallback } from 'react';
import { Button } from '../atoms/Button';
import './App.css';

const operators = ['/', '+', '-', '*'];
const btn = [
  '1',
  '2',
  '3',
  '/',

  '4',
  '5',
  '6',
  '+',

  '7',
  '8',
  '9',
  '-',

  'clear',
  '0',
  '=',
  '*'
  
];
// eslint-disable-next-line
export function Calculator() {
  const [input, setInput] = useState('');
  const addSymbol = (item) => {
    const isValueOperator = ['/', '+', '-', '*'].includes(
      input[input.length - 1]
    );
    if (!isValueOperator) {
      setInput(input + item);
    } else {
      if (operators.includes(item)) {
        setInput(input.substr(0, input.length - 1) + item);
      } else if (item === 'clear') {
        setInput('');
      } else if (item === '=') {
        setInput(input.substr(0, input.length - 1));
      } else {
        setInput(input + item);
      }
      return;
    }
    if (input === '' && item === '=') {
      setInput('');
      return;
    }
    if (item === 'clear') {
      setInput('');
    } else {
      setInput(input + item);
    }
    if (item === '=') {
      // eslint-disable-next-line
      let x = eval(input);
      setInput(x);
    }
  };

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  return (
    <div className="calculator_container">
      <input className="output" value={input} onChange={handleChange} />
      {btn.map((item) => (
        <Button key={item.id} item={item} handleClick={addSymbol} />
      ))}
    </div>
  );
}
