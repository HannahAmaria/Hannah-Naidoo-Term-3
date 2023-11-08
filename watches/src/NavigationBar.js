import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin'));
  }, []);

  const handleLogout = () => {
    alert('You have been logged out.'); // Alert added
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    window.location = '/login';
  };

  const aadmin = localStorage.getItem('isAdmin');
  return (
    <nav>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/addwatchform" className="nav-link">Add Watch</Link></li>
        {isAdmin &&
          <li><Link to="/orders" className="nav-link">Orders</Link></li>
        }
        <li><Link to="/cart" className="nav-link">Cart</Link></li>
        <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
        <li><Link className="nav-link" onClick={handleLogout}>Log out</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
