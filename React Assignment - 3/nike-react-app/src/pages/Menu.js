import React, { useEffect, useState } from 'react';
import shoeData from '../data/shoes.json';

// Import images manually
import shoe1 from '../assets/shoe1.jpg';
import shoe2 from '../assets/shoe2.jpg';
import shoe3 from '../assets/shoe3.jpg';

// Map image filenames to imports
const imageMap = {
  'shoe1.jpg': shoe1,
  'shoe2.jpg': shoe2,
  'shoe3.jpg': shoe3,
};

const Menu = () => {
  const [shoes, setShoes] = useState([]);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setShoes(shoeData);
    const timer = setTimeout(() => setMessage('🔥 Hot Deal Alert!'), 5000);
    return () => clearTimeout(timer);
  }, []);

  const filtered = shoes.filter(shoe =>
    shoe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search shoes..."
        className="border p-2 mb-4 w-full max-w-md"
      />
      {message && <div className="mb-4 text-red-500">{message}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((shoe, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <img
              src={imageMap[shoe.image]}
              alt={shoe.name}
              className="w-800 h-20 object-cover mb-4 rounded"
            />
            <h3 className="font-bold text-lg mb-1">{shoe.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{shoe.description}</p>
            <p className="text-blue-700 font-semibold">₹{shoe.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
