import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>
      &copy; {new Date().getFullYear()} Life At Intuit. All rights reserved.
    </p>
  </footer>
);

export default Footer;
