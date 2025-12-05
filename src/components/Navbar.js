import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header-wrapper">
      

      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/information">Information</Link></li>
          <li><Link to="/forum">Forum</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;