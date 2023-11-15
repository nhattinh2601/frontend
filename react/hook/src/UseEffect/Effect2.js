import React, { useEffect, useState } from 'react';

function Effect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    const fetchData = () => {
      setTimeout(() => {
        const mockData = 'Dữ liệu từ API';
        setData(mockData);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Ứng dụng React sử dụng useEffect</h1>
      {data ? <p>{data}</p> : <p>Đang tải dữ liệu...</p>}
    </div>
  );
}

export default Effect;
