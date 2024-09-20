import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/image/logo.png';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <img src={logo} alt="logo" id='logo'/>
      <nav className={`navItems ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Leaderboard</a>
        <a href="/contact">Contact</a>
      </nav>
      <button
        className="loginButton"
        onClick={() => alert('Login clicked!')}>
        Login
      </button>
      <button
        className="navToggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu Toggle"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="customIcon" />
      </button>
    </header>
  );
};

export default Header;