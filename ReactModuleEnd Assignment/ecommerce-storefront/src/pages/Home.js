import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to My Store</h1>
      <div className="horizontal-product-wrapper">
        <ProductList />
      </div>
      <Cart />
    </div>
  );
}
