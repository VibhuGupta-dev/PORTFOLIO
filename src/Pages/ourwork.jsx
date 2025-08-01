import React, { useState } from "react";
import brandai from "../assets/project1.png";
import credboost from "../assets/project2.png";
import "./ourwork.css";
import ArrowRight from "../assets/rightarrow.svg";
import ArrowLeft from "../assets/leftarrow.svg";

const projects = [
  {
    title: "BrandAI",
    image: brandai,
    description: "A platform for creating Content for Social Media, with AI.",
  },
  {
    title: "CredBoost",
    image: credboost,
    description: "Manage your Testimonials and Reviews with ease.",
  },
];

export default function Projects() {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr(curr === 0 ? projects.length - 1 : curr - 1);
  const next = () => setCurr(curr === projects.length - 1 ? 0 : curr + 1);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Our Work</h2>
      <div className="subtitle">MVPs built for founders and startups</div>

      <div className="image-carousel">
        <div className="center-card">
          <h3 className="card-title">{projects[curr].title}</h3>
          <div className="card-image">
            <img src={projects[curr].image} alt={projects[curr].title} />
          </div>
          <p className="card-desc">{projects[curr].description}</p>
        </div>

        <div className="buttons-r-f">
        <button
          src={ArrowRight}
          className="carousel-btn lleft"
          onClick={prev}
          alt="Previous project"
        />
        <button
          src={ArrowLeft}
          className="carousel-btn rright"
          onClick={next}
          alt="Next project"
        />
        </div>
      </div>
    </section>
  );
}
