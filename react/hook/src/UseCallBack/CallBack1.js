import React, { useState, useCallback, memo } from 'react';

const ListItem = memo(({ item, onDelete }) => {
  console.log(`Rendering ${item}`);
  return (
    <li>
      {item}
      <button onClick={() => onDelete(item)}>Delete</button>
    </li>
  );
});

function List() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);


  
  const deleteItem = useCallback((itemToDelete) => {
    setItems((currentItems) => currentItems.filter(item => item !== itemToDelete));
  }, []);


  return (
    <div>
        {items.map((item) => (
            <ListItem key={item} item={item} onDelete={deleteItem} />
        ))}
        
    </div>
    
  );
}

export default List;
