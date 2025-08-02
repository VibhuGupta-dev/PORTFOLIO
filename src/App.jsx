import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import FAQ from './Pages/faq';
import WhyUs from './Pages/whyus';
import OurWork from './Pages/ourwork';
import Pricing from './Pages/pricing';
import BookCall from './Pages/bookcall';
import Home from './Pages/home';
import Footer from './Pages/footer';

const App = () => {
  const location = useLocation();

  const faqRef = useRef(null);
  const whyUsRef = useRef(null);
  const ourWorkRef = useRef(null);
  const pricingRef = useRef(null);

  const sectionRefs = {
    faq: faqRef,
    whyUs: whyUsRef,
    ourWork: ourWorkRef,
    pricing: pricingRef,
  };

  // 🔁 Scroll on load when location.state.scrollTo is present
  useEffect(() => {
    const section = location.state?.scrollTo;
    if (section && sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <div ref={whyUsRef}><WhyUs /></div>
              <div ref={ourWorkRef}><OurWork /></div>
              <div ref={pricingRef}><Pricing /></div>
              <div ref={faqRef}><FAQ /></div>
              <Footer />
            </>
          }
        />
        <Route path="/bookcall" element={<BookCall />} />
      </Routes>
    </>
  );
};

export default App;
