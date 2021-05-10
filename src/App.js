import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');

  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>my name is :{name}</p>
      <button onClick={focus}>click</button>
    </div>
  );
}
