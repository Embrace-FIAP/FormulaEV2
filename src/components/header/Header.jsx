import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <img src={logo} alt="logo" id='logo'/>
      <nav className={`navItems ${isOpen && "open"}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/racing">Racing</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="loginButton"
        onClick={() => navigate('/login')}
      >
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