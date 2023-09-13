import Projects from "../../utils/projects";
import Card from "../components/UI/Card";
import WeatherDashboard from "../images/weatherDashboard.png";
import ReadmeGen from "../images/readmeGenerator.png";
import Streamly from "../images/streamly!.png";
import Plutus from "../images/plutus.png";
import SocialMedia from "../images/socialMedia.png";
import EmployeeTracker from "../images/employee_tracker.png";
import BookItBash from "../images/bookItBash.png";

export default function ProjectPage() {
  return (
    <div className="p-2" style={{ backgroundColor: "#ffead0ff" }}>
      <h1>Portfolio </h1>
      <ul className="row p-2 d-flex justify-content-center">
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
            <li className="col-lg-4 col-mb-9 col-sm-9" key={el.id}>
              <Card project={el} key={el.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
