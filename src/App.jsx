import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import FAQ from './Pages/faq';
import WhyUs from './Pages/whyus';
import OurWork from './Pages/ourwork';
import Pricing from './Pages/pricing';
import Testimonials from './Pages/testimonials';
import BookCall from './Pages/bookcall';
import Home from './Pages/home';


const App = () => {
  const faqRef = useRef(null);
  const whyUsRef = useRef(null);
  const ourWorkRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const bookCallRef = useRef(null);

  const sectionRefs = {
    faq: faqRef,
    whyUs: whyUsRef,
    ourWork: ourWorkRef,
    pricing: pricingRef,
    testimonials: testimonialsRef,
    bookCall: bookCallRef,
  };

  return (
    <>
    <Navbar sectionRefs={sectionRefs} />
     <Home />
      
      
      <div ref={whyUsRef}><WhyUs /></div>
      <div ref={ourWorkRef}><OurWork /></div>
      <div ref={pricingRef}><Pricing /></div>
     
      <div ref={faqRef}><FAQ /></div>
     
    </>
  );
};

export default App;
