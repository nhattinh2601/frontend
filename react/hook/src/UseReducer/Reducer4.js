import React, { useReducer } from 'react';

const initialState = {
  options: ['Ô 1', 'Ô 2', 'Ô 3'],
  selectedOption: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload };
    default:
      return state;
  }
};

function SelectOptions() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOptionChange = (option) => {
    dispatch({ type: 'SELECT_OPTION', payload: option });
  };

  return (
    <div>
      <h1>Chọn ô</h1>
      <div>
        {state.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionChange(option)}
            className={option === state.selectedOption ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>
      <p>Ô: {state.selectedOption}</p>
    </div>
  );
}

export default SelectOptions;
