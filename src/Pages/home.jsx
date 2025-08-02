import React from "react";
import Bookcall from "./bookcall";
import ScrollVelocity from "../components/ScrollVelocity";
import './home.css';
function Home() {
  const velocity = 50
  return (
    <section id="whyus" className="section-home">
    <div className="home">
        <button className="slotbook" onClick={() => scrollTo('bookCall')}>
        Book Slot For August
      </button>
      <h1 className="h1">Build and Validate in <br />
       21 Days</h1>
      <p className="p">We build full-stack web apps that go live fast. You can test, earn, and <br />grow before anyone catches up</p>
      <button className="ctaa-button" onClick={() => scrollTo('bookCall')}>
        Book a Call
      </button>
      <div className="scroll-wrapper">
  <ScrollVelocity
    texts={['Scroll to explore ']}
    velocity={velocity}
    className="custom-scroll-text"
  />
</div>

      
    </div>
    </section>
  );
}
export default Home;
