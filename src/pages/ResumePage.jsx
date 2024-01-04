import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import "./ResumePage.css";
import Resume from "../resume/Sucheta Mukherjee_newResume.pdf";
export default function ResumePage() {
  return (
    <div className="overflow-scroll" id="resume-container">
      <div id="resume-content" className="container">
        <h1 className="mt-4">Resume </h1>
        <div className="row">
          {/* <div className="w-100"> */}
          <section className="">
            <h3>Front-end Proficiencies</h3>
            <ul className="p-0 row d-flex justify-content-evenly">
              <li className="tile col-sm-8 m-2">
                {" "}
                <FontAwesomeIcon icon={faHtml5} /> HTML
              </li>
              <li className="tile col-sm-8 m-2">
                {" "}
                <FontAwesomeIcon icon={faCss3Alt} />
                CSS
              </li>
              <li className="tile col-sm-8 m-2">
                {" "}
                <FontAwesomeIcon icon={faSquareJs} />
                JavaScript
              </li>
              <li className="tile col-sm-8 m-2">jQuery</li>
              <li className="tile col-sm-8 m-2">Responsive Web Design</li>
              <li className="tile col-sm-8 m-2">
                <FontAwesomeIcon icon={faReact} /> React
              </li>
              <li className="tile col-sm-8 m-2">
                <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
              </li>
              <li className="tile col-sm-8 m-2">Bulma</li>
            </ul>
          </section>
          <section className="">
            <h3>Back-end Proficiencies</h3>
            <ul className="p-0 row d-flex justify-content-center">
              <li className="tile col-sm-8 m-2">Rest APIs</li>
              <li className="tile col-sm-8 m-2">
                <FontAwesomeIcon icon={faNodeJs} /> Node
              </li>
              <li className="tile col-sm-8 m-2">Express</li>
              <li className="tile col-sm-8 m-2">MySQL, Sequelize</li>
              <li className="tile col-sm-8 m-2">MongoDB</li>
              <li className="tile col-sm-8 m-2">Graph QL</li>
            </ul>
          </section>
          <a
            href={Resume}
            download={true}
            className="row d-flex justify-content-center mt-4"
          >
            <button className="btn rounded-pill col-6 mb-4" id="resume-btn" style={{boxShadow: "1px 2px 5px rgb(61, 57, 57)"}}>
              <h3 className="text-light">Download Resume</h3>
            </button>
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
