import React, { useReducer } from 'react';


// Khởi tạo state ban đầu
const initialState = { count: 0 };


function reducer(state, action) {
  switch (action.type) {
    case 'increment': 
      return { count: state.count < 20 ? state.count + 1 : state.count };
    case 'decrement':
      return { count: state.count > 0 ? state.count - 1 : state.count };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })} disabled={state.count === 20}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })} disabled={state.count === 0}>-</button>   
      </div>    
    </>
  );
}

export default Counter;
