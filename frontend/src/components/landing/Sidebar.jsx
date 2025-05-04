import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const linkClass = (path) =>
    `fw-semibold nav-link${location.pathname === path ? ' text-success' : ' text-dark'}`;

  return (
    <div className="d-flex flex-column p-3 h-100" style={{ minHeight: '100vh' }}>
      <h4 className="fw-bold text-success mb-4">Grocery Splitter</h4>
      <Link to="/" className={linkClass('/')}>
        Dashboard
      </Link>
      <Link to="/explore" className={linkClass('/explore')}>
        Explore
      </Link>
      <Link to="/orders" className={linkClass('/orders')}>
        Orders
      </Link>
      <Link to="/settle-up" className={linkClass('/settle-up')}>
        Settle Up
      </Link>
      <Link to="/all-splits" className={linkClass('/all-splits')}>
        All Splits
      </Link>
      <Link to="/contact" className={linkClass('/contact')}>
        Contact Us
      </Link>
    </div>
  );
}

export default Sidebar;