import React, { useState, useEffect, useRef } from 'react';
import Count from './Count';
import './style.css';

export default function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <Count />
    </div>
  );
}
