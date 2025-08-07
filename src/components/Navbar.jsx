import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate('/', { state: { scrollTo: section } });
  };

  return (
    <div className="Navbar">
      <h2 className="logo" onClick={() => navigate('/')}>WebSync</h2>

      <div className="navbar-links">
        <button onClick={() => handleNavigation('whyUs')}>Why Us</button>
        <button onClick={() => handleNavigation('ourWork')}>Our Work</button>
        <button onClick={() => handleNavigation('pricing')}>Pricing</button>
        <button onClick={() => handleNavigation('faq')}>FAQ</button>
      </div>

      <button onClick={() => navigate('/bookcall')} className="cta-button">
        Book a Call
      </button>
    </div>
  );
};

export default Navbar;
