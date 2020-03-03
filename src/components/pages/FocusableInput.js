import React, { useRef } from 'react';
import FancyButton from '../small/FancyButton';
import './FocusableInput.css';

const FocusableInput = () => {
  const inputRef = useRef();
  return (
    <div className="focusable-input-wrapper">
      {/* Qué pasa si cambiamos este input por nuestro FancyInput? */}
      <input className="focusable-input" ref={inputRef} />
      <FancyButton onClick={() => inputRef.current.focus()}>Focus that input!</FancyButton>
    </div>
  );
};
export default FocusableInput;
