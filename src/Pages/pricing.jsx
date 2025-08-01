import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [plan, setPlan] = useState('Standard');

  return (
    <section id="pricing" className="section-pricing" >
      <h1 className='h1-pricing'>Pricing</h1>
      <h2 className='h2-pricing'>We offer a range of pricing options to suit your needs.</h2>

      <div className="pricing-content">
        {/* Left Card */}
        <div className="pricing-card left-card">
          <div className="slots-label">🔔 1 Slots Left</div>
          <h2 className="left-heading">Join<br /> <span>MVP <span className="gradient-text">Experience</span></span></h2>
          <p className="left-desc">Don't sleep on your ideas, build your MVP with us.</p>
          <button className="left-btn">
            Book a 15 Minute Call → 
            <span className="btn-subtext">Let's discuss your idea and how we can help you</span>
          </button>
        </div>

        {/* Right Card */}
        <div className="pricing-card right-card">
          <div className="plan-toggle">
            <button
              className={`toggle-btn ${plan === 'Standard' ? 'active' : ''}`}
              onClick={() => setPlan('Standard')}
            >
              Standard
            </button>
            <span className="pro-label" onClick={() => setPlan('Pro')}>Pro 🔥</span>
          </div>

          <div className="payment-label">One Time Payment</div>
          {plan === 'Standard' ? (
            <div className="price-details">
              <h2>$1997</h2>
              <p>One time payment for MVP Development</p>
              <hr />
              <h3>What's Included</h3>
              <ul>
                <li>✅ MVP Development in 1 Month</li>
                <li>✅ Founder Led Development</li>
                <li>✅ Free Maintenance for Next Month</li>
                <li>✅ Scalable Tech Stack: Next.js, Supabase</li>
                <li>✅ Regular Updates</li>
              </ul>
            </div>
          ) : (
            <div className="price-details">
              <h2>$2997</h2>
              <p>Premium MVP Development Package</p>
              <hr />
              <h3>What's Included</h3>
              <ul>
                <li>🚀 Everything in Standard</li>
                <li>🚀 Priority Support</li>
                <li>🚀 AI Integration Consultation</li>
                <li>🚀 Ongoing Dev Support (2 Months)</li>
              </ul>
            </div>
          )}
          <button className="right-btn">Reserve →</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
