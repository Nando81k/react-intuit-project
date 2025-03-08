import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo">Life At Intuit</div>
      <ul className="nav-links">
        <li>
          <a href="#company-background">Company Background</a>
        </li>
        <li>
          <a href="#analysis">Key Findings</a>
        </li>
        <li>
          <a href="#key-findings">Interpretation</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
