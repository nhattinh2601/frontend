import React, { useReducer } from 'react';

const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      return {
        ...state,
        cart: [...state.cart, newItem],
        total: state.total + newItem.price,
      };
    case 'REMOVE_FROM_CART':
      const removedItem = action.payload;
      const updatedCart = state.cart.filter(item => item.id !== removedItem.id);
      return {
        ...state,
        cart: updatedCart,
        total: state.total - removedItem.price,
      };
    default:
      return state;
  }
};

const products = [
  { id: 1, name: 'Áo', price: 100000 },
  { id: 2, name: 'Quần', price: 150000 },
  { id: 3, name: 'Nón', price: 200000 },
];

function PaymentSystem() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <div className="product-list">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} VNĐ
              <button onClick={() => handleAddToCart(product)}>Thêm giỏ hàng</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Giỏ hàng</h2>
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} VNĐ
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Tổng tiền: {state.total} VNĐ</p>
      </div>
    </div>
  );
}

export default PaymentSystem;
