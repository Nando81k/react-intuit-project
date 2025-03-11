import React from 'react';
import './Header.css';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Into Intuit</div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="#company-background">Company Background</a>
          </li>
          <li>
            <a href="#key-findings">Key Findings</a>
          </li>
          <li>
            <a href="#analysis-background">Analysis</a>
          </li>
          <li>
            <a href="#conclusion">Conclusion</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;