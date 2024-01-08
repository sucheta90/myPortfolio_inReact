import ProfilePicture from "../images/IMG_20200601_150351_569-EDIT.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Resume from "../resume/Sucheta_Mukherjee_newResume.pdf";
import "./AboutPage.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  // faBootstrap,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutPage() {
  return (
    <div id="about-page" className="overflow-y-scroll">
      <h1 className="py-2 mb-2">About Me </h1>
      <div className="container h-100 w-100 mt-3">
        <div className="row justify-content-center" id="about-container">
          <section className="col-lg-5 col-xl-4 p-4">
            <img src={ProfilePicture} className="img-fluid w-75" />
          </section>
          <section
            className="col-lg-7 pb-4 col-xl-8 row d-flex justify-content-around"
            id="about-content"
          >
            <p className="mt-2 p-0 w-75">
              Hi! I&#39;m <em>Sucheta Mukherjee</em>, a passionate web developer
              with a varied background in customer service and office
              administration. I started as a self-taught front-end developer and
              have since graduated from Southern Methodist University&#39;s Full
              Stack Coding Bootcamp.{" "}
            </p>

            <p className="mt-2 p-0 w-75">
              I love working with a wide range of technologies, from HTML{" "}
              <FontAwesomeIcon icon={faHtml5} />, CSS{" "}
              <FontAwesomeIcon icon={faCss3Alt} />, JavaScript{" "}
              <FontAwesomeIcon icon={faSquareJs} />, and React{" "}
              <FontAwesomeIcon icon={faReact} /> on the front end to Node{" "}
              <FontAwesomeIcon icon={faNodeJs} />, Express, MySQL, MongoDB,
              GraphQL, Apollo Server, and Apollo Client on the back end. I&#39;m
              committed to continuing my learning and growth in development,
              taking on challenging projects, and contributing to innovative
              solutions.
            </p>
            <p className="mt-2 p-0 w-75">
              I believe that the key to success in web development is a
              combination of technical skills, a curious mind, and adaptability.
              I&#39;m always excited to tackle new challenges and explore new
              frontiers. If you&#39;re interested in connecting or
              collaborating, please don&#39;t hesitate to reach out. Let&#39;s
              work together to create something truly extraordinary!
            </p>
            <section>
              <a
                href="https://www.linkedin.com/in/sucheta-mukherjee-07347b88/"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="btn"
                  style={{ backgroundColor: "#f76f8eff" }}
                  className="btn btn-lg m-4 about_page-btn"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "white", fontSize: "1.3em" }}
                    className="link"
                  />
                </button>
              </a>
              <a
                href="https://github.com/sucheta90"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <button
                  className="btn btn-lg m-4 about_page-btn"
                  type="btn"
                  style={{ backgroundColor: "#f76f8eff" }}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "white", fontSize: "1.3em" }}
                    className="link"
                  />{" "}
                </button>
              </a>
              <a href="/Contact" target="_blank" rel="noreferrer">
                <button
                  className="btn btn-lg m-4 about_page-btn"
                  type="btn"
                  style={{ backgroundColor: "#f76f8eff" }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white", fontSize: "1.3em" }}
                    className="link"
                  />
                </button>
              </a>
              <a
                href={Resume}
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="btn btn-lg m-4 about_page-btn"
                  type="btn"
                  style={{ backgroundColor: "#f76f8eff" }}
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    style={{ color: "white", fontSize: "1.3em" }}
                    className="link"
                  />
                </button>
              </a>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
