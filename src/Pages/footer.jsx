// components/Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Side: Branding */}
        <div className="footer-brand">
          <h2>🛠️ Cosmic</h2>
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
          <p>Email: <a href="mailto:hello@devminds.co">vibhugupta022@gmail.com</a></p>
             <a href='https://www.linkedin.com/in/vibhu-gupta-2b9181325/'>Linkedin</a>
          <p>📍 India • Remote</p>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">© {new Date().getFullYear()} Cosmic. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
