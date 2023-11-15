import React, { useEffect, useState } from 'react';

function ColorChangingBackground() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  useEffect(() => {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A6'];
    let index = 0;

    const colorChangeInterval = setInterval(() => {
      setBackgroundColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 2000);

    return () => {
      clearInterval(colorChangeInterval);
    };
  }, []);

  return (
    <div style={{ backgroundColor, width: '100vw', height: '100vh' }}>
      <h1>Thay đổi màu!</h1>
    </div>
  );
}

export default ColorChangingBackground;
