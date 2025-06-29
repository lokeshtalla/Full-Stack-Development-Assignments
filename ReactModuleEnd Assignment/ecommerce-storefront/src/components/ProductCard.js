import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({id, name, price, image, description}) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">${price.toFixed(2)}</div>
      <button onClick={() => addToCart({id, name, price})}>Add to Cart</button>
    </div>
  );
}