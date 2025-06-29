import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/checkout">Checkout</Link>
      {user ? (
        <>
          {' '}| <span>Welcome, {user.username}</span>
          {' '}<button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          {' '}| <Link to="/login">Login</Link>
          {' '}| <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}