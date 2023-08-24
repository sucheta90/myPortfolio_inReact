import "./Card.css";
export default function Card({project}){
    return (
    <div className="card">
       <div  className="card-body">
       <img src={project.image} className="card-img-top"/>
       </div> 
        <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
        </div>
        <div className="card-body">
            <a href={project.githubRepo} className="card-link" target="_blank" rel="noreferrer">Githhub Repository</a>
            <a href={project.liveSite} className="card-link">Visit Site</a>
        </div>
    </div>
    );
}
