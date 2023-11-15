import React, { useState, useCallback } from 'react';

function Call() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = useCallback(() => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  }, [newTask]);


  const removeTask = useCallback((index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  }, []);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <input
        type="text"
        placeholder="Nhập tên sản phẩm"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Thêm sản phẩm</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Call;
