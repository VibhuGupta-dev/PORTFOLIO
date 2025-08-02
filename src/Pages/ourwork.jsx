import React, { useState } from "react";
import brandai from "../assets/project1.mp4";
import credboost from "../assets/project2.mp4";
import "./ourwork.css";
import ArrowRight from "../assets/rightarrow.svg";
import ArrowLeft from "../assets/LeftArrow.svg";

const projects = [
  {
    title: "CodeNest",
    video: brandai,
    description: "A platform to connect with your clients",
  },
  {
    title: "OutWord",
    video: credboost,
    description: "Outword is a chatapp which was made as a project ",
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
          <div className="card-video">
            <video
              src={projects[curr].video}
              autoPlay
              muted
              loop
              playsInline
              className="project-video"
            />
          </div>
          <p className="card-desc">{projects[curr].description}</p>
        </div>

        <div className="buttons-r-f">
          <button className="carousel-btn lleft" onClick={prev}>
            <img src={ArrowLeft} alt="Previous project" />
          </button>
          <button className="carousel-btn rright" onClick={next}>
            <img src={ArrowRight} alt="Next project" />
          </button>
        </div>
      </div>
    </section>
  );
}
