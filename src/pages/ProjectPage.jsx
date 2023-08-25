import Projects from "../../utils/projects"
import Card from "../components/UI/Card"
import WeatherDashboard from "../images/weatherDashboard.png";
import ReadmeGen from "../images/readmeGenerator.png";
import Streamly from "../images/streamly!.png";
import Plutus from "../images/plutus.png";
import SocialMedia from "../images/socialMedia.png";
import EmployeeTracker from "../images/employee_tracker.png";



export default function ProjectPage(){

    return (
        <div className="p-2" style={{backgroundColor:"#ffead0ff"}}>
        <h1>Project </h1>
        <ul className="row p-2">
            {Projects.map(el => {
                if(el.title === "Weather Dashboard"){
                    el.image =  WeatherDashboard
                }else if(el.title === "STREAMLY!"){
                    el.image = Streamly
                }else if(el.title === "Plutus" ){
                    el.image = Plutus
                }else if( el.title === "Employee Tracker" ){
                    el.image = EmployeeTracker
                }else if(el.title === "The Social Network API"){
                    el.image = SocialMedia
                }else{
                    el.image = ReadmeGen
                }
            return <li className="col-lg-3" key={el.id}><Card project={el} key={el.id}/></li>})}
        </ul>
        </div>
    )
}