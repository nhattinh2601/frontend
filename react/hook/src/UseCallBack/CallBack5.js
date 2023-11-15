import React, { useState, useCallback, useMemo } from 'react';

function Filter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const data = useMemo(() => ['Táo', 'Chuối', 'Nho', 'Quýt', 'Ổi'], []);

  const search = useCallback(() => {
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchQuery, data]);

  return (
    <div>
      <h1>Tìm kiếm trái cây</h1>
      <input
        type="text"
        placeholder="Tìm kiếm theo keyword"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={search}>Tìm kiếm</button>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
