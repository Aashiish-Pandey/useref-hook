import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');

  //const [renderCount, setRenderCount] = useState(0);

  const renderCount = useRef(1);

  useEffect(() => renderCount.current++);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>my name is :{name}</p>
      <p>{renderCount.current}</p>
    </div>
  );
}
