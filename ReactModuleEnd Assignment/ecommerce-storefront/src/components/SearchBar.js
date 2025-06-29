import React from 'react';

export default function SearchBar({ searchTerm, onSearch }) {
  const handleInputChange = (e) => {
    const value = e.target.value.trimStart(); // avoids leading whitespace
    onSearch(value);
  };

  return (
    <div className="search-bar" style={{ marginBottom: '1rem' }}>
      <label htmlFor="search-input" style={{ marginRight: '8px' }}>
        Search:
      </label>
      <input
        id="search-input"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search products..."
        style={{
          padding: '0.6rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          width: '250px'
        }}
      />
    </div>
  );
}
