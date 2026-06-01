import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {" "}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{config.developer.title}</div>
              <div className="landing-h2-2">{config.developer.secondaryTitle}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{config.developer.tertiaryTitle}</div>
              <div className="landing-h2-info-1">{config.developer.quaternaryTitle}</div>
            </h2>
            <p className="landing-copy">{config.developer.shortDescription}</p>
          </div>
          <div className="mobile-photo">
            <img src="/images/sugiono-mobile.svg" alt={config.developer.fullName} />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
