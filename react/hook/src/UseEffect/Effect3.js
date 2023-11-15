import React, { useState, useEffect } from 'react';

function ComplexExample() {
  const [originalList, setOriginalList] = useState([
    'Nho', 'Táo', 'Quýt', 'Chôm Chôm'
  ]);
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    const sorted = [...originalList].sort();
    setSortedList(sorted);
  }, [originalList]);

  const addRandomFruit = () => {
    const fruits = ['Nho', 'Táo', 'Quýt', 'Chôm Chôm'];
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    setOriginalList([...originalList, randomFruit]);
  };

  return (
    <div>
      <h1>Sắp xếp và cập nhật danh sách trái cây</h1>
      <button onClick={addRandomFruit}>Thêm trái cây</button>
      <div>
        <h2>Danh sách ban đầu</h2>
        <ul>
          {originalList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Danh sách được sắp xếp</h2>
        <ul>
          {sortedList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ComplexExample;
