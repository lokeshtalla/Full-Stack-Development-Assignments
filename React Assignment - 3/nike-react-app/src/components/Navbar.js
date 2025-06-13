import React from 'react';
import { Link } from 'react-router-dom';
import nikeLogo from '../assets/logo.png'; // Import logo

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    {/* Logo and brand name */}
    <div className="flex items-center gap-2">
      <img src={nikeLogo} alt="Nike Logo" className="w-8 h-8 object-contain" />
      <h1 className="text-xl font-bold">Nike</h1>
    </div>

    {/* Navigation links */}
    <div className="flex gap-4">
      <Link to="/" className="hover:text-blue-600">Home</Link>
      <Link to="/menu" className="hover:text-blue-600">Menu</Link>
      <Link to="/location" className="hover:text-blue-600">Location</Link>
      <Link to="/about" className="hover:text-blue-600">About</Link>
    </div>
  </nav>
);

export default Navbar;
