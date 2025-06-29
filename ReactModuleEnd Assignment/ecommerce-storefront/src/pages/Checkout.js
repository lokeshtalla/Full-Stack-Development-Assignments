import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((s, p) => s + p.price, 0);
  const handleSubmit = e => {
    e.preventDefault();
    alert('Order placed!');
    clearCart();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <button type="submit">Place Order</button>
    </form>
  );
}