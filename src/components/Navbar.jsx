import React from 'react';
import './Navbar.css';
import arrowdown from '../assets/arrowDown.svg';
import arrowup from '../assets/ArrowUp.svg';

const Navbar = ({ sectionRefs }) => {
  const scrollTo = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Navbar">
      <h2 className="logo">ZenStack</h2>

      <div className="navbar-links">
        
        <button onClick={() => scrollTo('whyUs')}>Why Us</button>
        <button onClick={() => scrollTo('ourWork')}>Our Work</button>
        <button onClick={() => scrollTo('pricing')}>Pricing</button>
        <button onClick={() => scrollTo('faq')}>FAQ</button>
      </div>

      <button className="cta-button" >
        Book a Call
      </button>
    </div>
  );
};

export default Navbar;
