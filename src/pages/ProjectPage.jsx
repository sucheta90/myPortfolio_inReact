import Projects from "../../utils/projects"
import Card from "../components/UI/Card"


export default function ProjectPage(){

    return (
        <>
        <h1>Project </h1>
        <ul>
            {Projects.map(el => <li><Card project={el} key={el.id}/></li>)}
        </ul>
        </>
    )
}