/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faRightToBracket,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({ project }) {
  const [showMessage, setShowMessage] = useState(false);

  function handleClick(e) {
    console.log(e.target.id);

    // if (e.target.id === "open-modal") {
    //   setShowMessage(!showMessage);
    //   return;
    // }
    // e.target.id === "close" ? setShowMessage(!showMessage) : "";

    e.target.id === "open-modal"
      ? setShowMessage(!showMessage)
      : e.target.id === "close"
      ? setShowMessage(!showMessage)
      : "";
  }

  return (
    <div
      className="card d-flex align-items-center shadow mb-5 bg-body-tertiary rounded card-container"
      id={project.id}
    >
      <img
        src={project.image}
        className="shadow mb-5 bg-body-tertiary rounded"
        style={{ width: "100%", height: "200px" }}
      />

      {showMessage && (
        <div id="description">
          <p className=" card">{project.description} </p>
          <button
            id="close"
            className="btn btn-lg btn-warning"
            onClick={handleClick}
          >
            Close
          </button>
        </div>
      )}

      <div className="card-body">
        <h4 className="card-title ">{project.title}</h4>
      </div>
      <div className="card-body" id="buttons">
        <button
          className="btn btn-lg rounded-pill"
          id="open-modal"
          onClick={handleClick}
          style={{
            backgroundColor: "#f76f8eff",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            style={{ color: "white" }}
            className="no-click"
          />
        </button>
        <a
          href={project.githubRepo}
          className="card-link"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="btn btn-lg rounded-pill"
            style={{
              backgroundColor: "#f76f8eff",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
          </button>
        </a>

        {project.liveSite ? (
          <a
            href={project.liveSite}
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="btn btn-lg rounded-pill"
              style={{
                backgroundColor: "#f76f8eff",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <FontAwesomeIcon icon={faRightToBracket} />
            </button>
          </a>
        ) : (
          <a
            href={project.videoWalkthrough}
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="btn btn-lg rounded-pill"
              style={{
                backgroundColor: "#f76f8eff",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {" "}
              <FontAwesomeIcon icon={faYoutube} />{" "}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
