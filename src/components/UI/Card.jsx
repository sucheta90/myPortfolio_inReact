import "./Card.css";
// eslint-disable-next-line react/prop-types
export default function Card({project}){
    return (
    <div className="card d-flex align-items-center shadow p-3 mb-5 bg-body-tertiary rounded">
       {/* <div  className="card-body"> */}
       {/* eslint-disable-next-line react/prop-types */}
       <img src={project.image} className="img-fluid" style={{width: "300px",height:"230px"}}/>
       {/* </div>  */}
        <div className="card-body" style={{backgroundColor: "#113537ff", color: "white"}}>
              {/* eslint-disable-next-line react/prop-types */}
            <h5 className="card-title">{project.title}</h5>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                {/* eslint-disable-next-line react/prop-types */}
                {project.description}
            </div>
        </div>
        <div className="card-body w-100" style={{backgroundColor: "#113537ff", color: "white"}}>
              {/* eslint-disable-next-line react/prop-types */}
            <a href={project.githubRepo} className="card-link" target="_blank" rel="noreferrer"><button className="btn rounded-pill" style={{backgroundColor: "#f76f8eff", color: "white", fontWeight:"bold"}}>Githhub</button></a>
              {/* eslint-disable-next-line react/prop-types */}
            {project.liveSite? <a href={project.liveSite} className="card-link" target="_blank" rel="noreferrer"><button className="btn rounded-pill" style={{backgroundColor: "#f76f8eff", color: "white", fontWeight:"bold"}}>Visit Site</button></a>: <a href={project.videoWalkthrough} className="card-link" target="_blank" rel="noreferrer"><button className="btn rounded-pill" style={{backgroundColor: "#f76f8eff", color: "white", fontWeight:"bold"}}>Demo Video</button></a>}  
            
        </div>
    </div>
    );
}
