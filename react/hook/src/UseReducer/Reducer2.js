import React, { useReducer, useState } from 'react';

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { result: state.result + action.value };
    case 'SUBTRACT':
      return { result: state.result - action.value };
    case 'MULTIPLY':
      return { result: state.result * action.value };
    case 'DIVIDE':
      return { result: state.result / action.value };
    case 'CLEAR':
      return { result: 0 };
    default:
      return state;
  }
};

function Calculator() {
  const [calculatorState, dispatch] = useReducer(calculatorReducer, { result: 0 });
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);

  const handleOperation = (type) => {
    if (!inputValue) return;
    const result = calculatorState.result;
    const operation = `${result} ${type} ${inputValue}`;
    setHistory([...history, operation]);

    dispatch({ type, value: parseFloat(inputValue) });
    setInputValue('');
  };

  const handleClear = () => {
    setHistory([]);
    dispatch({ type: 'CLEAR' });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[0-9.]*$/.test(value)) {
      setInputValue(value);
    }
  };

  return (
    <div className="calculator">
      <h1>Máy tính</h1>
      <div className="result">Kết quả: {calculatorState.result}</div>
      <div className="input">
        <input
          type="text"
          placeholder="Nhập số"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="buttons">
        <button onClick={() => handleOperation('ADD')}>+</button>
        <button onClick={() => handleOperation('SUBTRACT')}>-</button>
        <button onClick={() => handleOperation('MULTIPLY')}>*</button>
        <button onClick={() => handleOperation('DIVIDE')}>/</button>
        <button onClick={handleClear}>Xóa</button>
      </div>
      <div className="history">
        <h2>Lịch sử</h2>
        <ul>
          {history.map((operation, index) => (
            <li key={index}>{operation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
