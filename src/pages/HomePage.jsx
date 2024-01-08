// import React from "react";
// import Hero from "../../src//images/protfolio_background.avif"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./HomePage.css";
export default function HomePage() {
  return (
    <div id="hero-container">
      <div id="hero"></div>

      <h1 id="welcome">
        Hi, my name is Sucheta Mukherjee
        <h2>Full Stack Web Developer</h2>
        <h2>Welcome to my page!!</h2>
        <h2>
          <span className="p-1">
            <a
              href="https://www.linkedin.com/in/sucheta-mukherjee-07347b88/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "white" }}
                className="link"
              />
            </a>
          </span>
          <span className="p-1">
            <a
              href="https://github.com/sucheta90"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "white" }}
                className="link"
              />
            </a>
          </span>
        </h2>
      </h1>
    </div>
  );
}
