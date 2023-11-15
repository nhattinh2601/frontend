import React, { useState, useEffect} from 'react';

function Effect() {
  const [Type , setType] = useState('posts')

  useEffect(() => {
    console.log('Type changed')

    return () => {
      console.log('return from type change')
    }
  }, [Type])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <button onClick = {() => setType('posts')}>Posts</button>
        <button onClick = {() => setType('users')}>Users</button>
        <button onClick = {() => setType('comments')}>Comments</button>
      </div>
      <h1 style={{ textAlign: 'center', margin: '0', padding: '20px 0' }}>
        {Type}
      </h1>

    
    </>

  );
}

export default Effect;
