import { useState } from "react";
import "./Card.css";
// eslint-disable-next-line react/prop-types



 {/* eslint-disable-next-line react/prop-types */}
export default function Card({project}){
  const [showMessage, setShowMessage] = useState(false)
  
  function handleClick(e){
   
    if(e.target.id){
      setShowMessage(!showMessage);
    }
    e.target.id === 'close'? setShowMessage(!showMessage) : "";
  }
  
    return (
     
    <div className="card d-flex align-items-center shadow mb-5 bg-body-tertiary rounded card-container" id={project.id}>
       {/* eslint-disable-next-line react/prop-types */}
       <img src={project.image} className="shadow mb-5 bg-body-tertiary rounded" style={{width: "200px",height:"180px"}}  id='image-tile' onClick={handleClick}/>
       {/* eslint-disable-next-line react/prop-types */}
       {showMessage && <p id="description" className="d-flex flex-column">{project.description} <button id='close' className="" onClick={handleClick}>Close</button></p>}
       {/* </div>  */}
        <div className="card-body" >
              {/* eslint-disable-next-line react/prop-types */}
            <h5 className="card-title">{project.title}</h5>
        </div>
        <div className="card-body w-100 d-flex align-items-center justify-content-center pb-2" >
              {/* eslint-disable-next-line react/prop-types */}
            <a href={project.githubRepo} className="card-link" target="_blank" rel="noreferrer"><button className="btn btn-sm rounded-pill" style={{backgroundColor: "#f76f8eff", color: "white", fontWeight:"bold"}}>Githhub</button></a>
              {/* eslint-disable-next-line react/prop-types */}
            {project.liveSite? <a href={project.liveSite} className="card-link" target="_blank" rel="noreferrer"><button className="btn btn-sm rounded-pill" style={{backgroundColor: "#f76f8eff", color: "white", fontWeight:"bold"}}>Visit Site</button></a>: <a href={project.videoWalkthrough} className="card-link" target="_blank" rel="noreferrer"><button className="btn btn-sm rounded-pill" style={{backgroundColor: "#f76f8eff", color: "white", fontWeight:"bold"}}> Demo </button></a>}  
            
        </div>
    </div>
    );
}

