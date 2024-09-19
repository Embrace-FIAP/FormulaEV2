import React, { useState } from "react";
import '../styles/navBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="Navbar">
      <a href="/" className="nav-logo">Formula E</a>
      <nav className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Leaderboard</a>
        <a href="/contact">Contact</a>
      </nav>
      <button
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu Toggle"
      >
        <div className="bar"></div>
      </button>
    </header>
  );
};

export default NavBar;