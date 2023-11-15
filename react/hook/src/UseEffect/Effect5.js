import React, { useState, useEffect } from 'react';

function DrawingApp() {
  const [color, setColor] = useState('black');
  const [lineWidth, setLineWidth] = useState(2);

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', () => {
      isDrawing = true;
    });

    canvas.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        context.lineWidth = lineWidth;
        context.lineCap = 'round';
        context.strokeStyle = color;
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
      context.beginPath();
    });

    canvas.addEventListener('mouseleave', () => {
      isDrawing = false;
      context.beginPath();
    });
  }, [color, lineWidth]);

  return (
    <div>
      <h1>Ứng dụng Vẽ</h1>
      <div>
        <label>Chọn màu: </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        <label>Độ dày nét vẽ: </label>
        <input
          type="range"
          min="1"
          max="10"
          value={lineWidth}
          onChange={(e) => setLineWidth(parseInt(e.target.value))}
        />
      </div>
      <canvas
        id="canvas"
        width="400"
        height="400"
        style={{ border: '1px solid black' }}
      ></canvas>
    </div>
  );
}

export default DrawingApp;
