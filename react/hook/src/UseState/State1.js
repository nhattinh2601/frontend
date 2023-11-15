import React, { useState } from 'react';

function State() {
  const [count , setCount] = useState(4)

  function decCount() {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount);
  }

  function incCount() {
    setCount(prevCount => prevCount < 10 ? prevCount + 1 : prevCount);
  }

  return (
  <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
      <button 
        onClick={decCount}
        style={{ fontSize: '1rem', padding: '10px', margin: '5px' }}
      > - </button>
      <span style={{ fontSize: '1.5rem', margin: '0 15px' }}>
        {count}
      </span>
      <button 
        onClick={incCount}
        style={{ fontSize: '1rem', padding: '10px', margin: '5px' }}
      > + </button>
    </div>
  
  </>

  );
}

export default State;
