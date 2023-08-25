import Projects from "../../utils/projects"
import Card from "../components/UI/Card"


export default function ProjectPage(){

    return (
        <div className="p-5" style={{backgroundColor:"#ffead0ff"}}>
        <h1>Project </h1>
        <ul className="row p-2">
            {Projects.map(el => <li className="col-lg-3" key={el.id}><Card project={el} key={el.id}/></li>)}
        </ul>
        </div>
    )
}