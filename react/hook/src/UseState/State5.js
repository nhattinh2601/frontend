import React, { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('white');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const colors = ['white', 'red', 'blue', 'green', 'yellow', 'purple'];

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div>
      <h1>Bảng màu</h1>
      <div>
        <p>Chọn màu:</p>
        {colors.map((color, index) => (
          <button
            key={index}
            style={{
              backgroundColor: color,
              border: color === selectedColor ? '2px solid black' : 'none'
            }}
            onClick={() => {
              setSelectedColor(color);
              changeBackgroundColor(color);
            }}
          >
            {color}
          </button>
        ))}
      </div>
      <div>
        <p>Màu nền hiện tại: {selectedColor}</p>
      </div>
      <div style={{ backgroundColor: backgroundColor }}>
        <p>Phần này có màu nền dựa trên sự lựa chọn của bạn.</p>
      </div>
    </div>
  );
}

export default ColorPicker;
