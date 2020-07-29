import React from 'react';
import './Button.css';

// eslint-disable-next-line
export function Button({ item, handleClick }) {
  return (
    <button
      type="button"
      className="button_area"
      onClick={() => handleClick(item)}
      onKeyDown={() => handleClick(item)}
    >
      <div className="button">{item}</div>
    </button>
  );
}
