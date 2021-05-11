import React, { useState, useRef } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  return (
    <div>
      <div> count : {count}</div>
      <div> renders : {renders.current++}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
