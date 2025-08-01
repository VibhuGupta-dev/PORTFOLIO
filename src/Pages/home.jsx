import React from "react";
import Bookcall from "./bookcall";
import ScrollVelocity from "../components/ScrollVelocity";
import './Home.css';
function Home() {
  const velocity = 50
  return (
    <div className="home">
        <button className="slotbook" onClick={() => scrollTo('bookCall')}>
        Book Slot For August
      </button>
      <h1 className="h1">Build and Validate in <br />
       21 Days</h1>
      <p className="p">We build full-stack web and mobile apps that go live fast. You can test, earn, and <br />grow before anyone catches up</p>
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
  );
}
export default Home;