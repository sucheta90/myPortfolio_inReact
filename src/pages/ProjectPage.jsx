import Projects from "../../utils/projects";
import Card from "../components/UI/Card";
import WeatherDashboard from "../images/weatherDashboard.webp";
import ReadmeGen from "../images/readmeGenerator.webp";
import Streamly from "../images/streamly!.webp";
import Plutus from "../images/plutus.webp";
import SocialMedia from "../images/socialMedia.webp";
import EmployeeTracker from "../images/employee_tracker.webp";
import BookItBash from "../images/bookItBash.webp";

export default function ProjectPage() {
  return (
    <div
      className="p-2"
      style={{
        backgroundColor: "#ffead0ff",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <h1>Projects </h1>

      <ul className="row p-2 d-flex justify-content-evenly">
        {Projects.map((el) => {
          if (el.title === "Weather Dashboard") {
            el.image = WeatherDashboard;
          } else if (el.title === "STREAMLY!") {
            el.image = Streamly;
          } else if (el.title === "Plutus") {
            el.image = Plutus;
          } else if (el.title === "Employee Tracker") {
            el.image = EmployeeTracker;
          } else if (el.title === "Social Network API") {
            el.image = SocialMedia;
          } else if (el.title === "BookItBash") {
            el.image = BookItBash;
          } else {
            el.image = ReadmeGen;
          }
          return (
            <li className="col-lg-3 col-mb-9 col-sm-9 m-1" key={el.id}>
              <Card project={el} key={el.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
