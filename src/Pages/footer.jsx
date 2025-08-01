// components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Side: Branding */}
        <div className="footer-brand">
          <h2>🛠️ DevMinds</h2>
          <p>Turning Ideas into MVPs.</p>
        </div>

        {/* Center: Navigation */}
        <div className="footer-links">
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#ourWork">Work</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Side: Contact */}
        <div className="footer-contact">
          <p>Email: <a href="mailto:hello@devminds.co">hello@devminds.co</a></p>
          <p>📍 India • Remote</p>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">© {new Date().getFullYear()} DevMinds. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
