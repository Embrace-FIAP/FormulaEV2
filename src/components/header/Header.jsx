import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/image/logoWhite.png';
import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header style={{ background: isHomePage ? '#020004' : 'var(--gradient-purple)' }}>
      <img src={logo} alt="logo" id='logoHeader' />
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