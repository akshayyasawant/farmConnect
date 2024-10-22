import React from 'react';
import { useCart } from './context/CartContext'; // Adjust the path relative to CartPage.js

const CartPage = () => {
  const { cart } = useCart(); // Destructure cart from the context

  if (!cart) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
