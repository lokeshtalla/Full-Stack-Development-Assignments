import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price.toFixed(2)}
          <button onClick={() => removeFromCart(p.id)}>Remove</button>
        </div>
      ))}
      <hr />
      <h3>Total: ${total.toFixed(2)}</h3>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}