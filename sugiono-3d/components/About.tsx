import "./styles/About.css";
import { config } from "../config";

const About = () => {
  const aboutHighlights = [
    "3+ years experience",
    "Laravel & PHP",
    "REST API",
    "Enterprise systems",
  ];

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <h2 className="about-headline">
          Building backend systems that keep operational teams moving.
        </h2>
        <div className="about-highlights">
          {aboutHighlights.map((item) => (
            <span key={item} className="about-pill">
              {item}
            </span>
          ))}
        </div>
        <p className="para">
          {config.about.description}
        </p>
      </div>
    </div>
  );
};

export default About;
