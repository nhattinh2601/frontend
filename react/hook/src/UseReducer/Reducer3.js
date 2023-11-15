import React, { useReducer } from 'react';

const colorReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { backgroundColor: action.color };
    default:
      return state;
  }
};

function ColorChanger() {
  const [state, dispatch] = useReducer(colorReducer, { backgroundColor: 'white' });

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', color });
  };

  return (
    <div style={state}>
      <h2>Color Changer</h2>
      <button onClick={() => changeColor('red')}>Change to Red</button>
      <button onClick={() => changeColor('blue')}>Change to Blue</button>
      <button onClick={() => changeColor('green')}>Change to Green</button>
    </div>
  );
}

export default ColorChanger;
