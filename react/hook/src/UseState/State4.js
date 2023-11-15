import React, { useState } from 'react';

function List() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setNewTodo('');
    }
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setNewTodo(todos[index]);
  };

  const updateTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = newTodo;
      setTodos(updatedTodos);
      setNewTodo('');
      setEditingIndex(-1);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Danh sách công việc</h1>
      <div>
        <input
          type="text"
          placeholder="Thêm công việc mới"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {editingIndex === -1 ? (
          <button onClick={addTodo}>Thêm</button>
        ) : (
          <button onClick={updateTodo}>Cập nhật</button>
        )}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Sửa</button>
            <button onClick={() => deleteTodo(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
