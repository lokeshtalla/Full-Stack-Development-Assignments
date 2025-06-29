import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import Filter from './Filter';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const filtered = products
    .filter(p => category === 'All' || p.category === category)
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Filter category={category} setCategory={setCategory} products={products} />
      <div className="horizontal-product-row">
        {filtered.map(p => <ProductCard key={p.id} {...p} />)}
      </div>
    </>
  );
}
