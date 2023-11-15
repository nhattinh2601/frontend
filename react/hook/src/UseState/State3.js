import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Áo thun', description: 'Áo thun đơn giản' },
  { id: 2, name: 'Quần jean', description: 'Quần jean nam nữ' },
  { id: 3, name: 'Giày thể thao', description: 'Giày thể thao nam' },
  { id: 4, name: 'Áo dài', description: 'Trang phục Việt Nam truyền thống' },
  { id: 5, name: 'Quần bơi', description: 'Quần chuyên dụng cho vận động viên bơi' },
  { id: 6, name: 'Giày cao gót', description: 'Giày cao 10 cm' }

];

function ProductSearch() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const handleKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm"
          value={searchKeyword}
          onChange={handleKeywordChange}
        />
        <button onClick={handleSearch}>Tìm kiếm</button>
      </div>
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map(product => (
              <li key={product.id}>
                {product.name} - {product.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>Không có sản phẩm nào phù hợp.</p>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;
