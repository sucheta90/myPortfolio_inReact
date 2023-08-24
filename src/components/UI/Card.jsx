export default function Card(props){
    return (
    <div className="card">
        <h4>{props.project.title}</h4>
       <img src={props.project.image}/>
    </div>
    );
}