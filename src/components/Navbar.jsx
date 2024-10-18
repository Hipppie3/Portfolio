import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={animate ? 'dropdown' : ''}>
      <div className="left-nav">
        <NavLink to="/"><img src={logo} alt="Daniel Truong logo" className="logo" /></NavLink>
        <button className="navbar-toggle" onClick={toggleMenu}>☰</button>
      </div>
      <div className={`right-nav ${isOpen ? 'active' : ''}`}>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/portfolio">portfolio</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
