/* eslint-disable react/prop-types */
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faRightToBracket,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({ project }) {
  return (
    <div id={project.id} className="card project-card">
      {/* description body */}
      <img src={project.image} className="card-img-top" alt="" />

      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: "600" }}>
          {project.title}
        </h5>
        <p className="collapse" id={`${project.id}_description`}>
          {project.description}
        </p>
        <div className="d-flex justify-content-evenly">
          <a
            href={`#${project.id}_description`}
            className="btn social-link"
            data-bs-toggle="collapse"
            role="button"
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </a>
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noreferrer"
            className="btn social-link"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
          </a>
          {project.liveSite ? (
            <a
              href={project.liveSite}
              className="btn social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
            </a>
          ) : (
            <a
              href={project.videoWalkthrough}
              className="btn social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />{" "}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
