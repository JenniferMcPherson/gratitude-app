import { useState } from 'react';

export default function ShoppingCart() {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems([...items, product]);
  };

  const removeItem = (productId) => {
    setItems(items.filter(item => item.id !== productId));
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => {/* Implement checkout */}}>Checkout</button>
    </div>
  );
}
