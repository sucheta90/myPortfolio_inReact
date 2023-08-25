import ProfilePicture from "../images/profile.png"
import './AboutPage.css';

export default function AboutPage(){
    return (
        <div className="p-5" id="about-page">
        <div className="row d-flex justify-content-evenly">
            <div className="col-6 d-flex align-items-center" id="profile-img">
                <img src={ProfilePicture} className="img-fluid"/>
            </div>
            <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <h1>About Me </h1>
                <p className="col"> I am a Frontend web developer based in Glen Allen, Virginia. My expertise lies in creating user-friendly web applications and websites, leveraging a skill set that encompasses HTML, CSS, JavaScript, and React. With proficiency in these languages, I strive to build exceptional online experiences.</p><p></p>

                <p className="col" >During my prior employment in the Customer Service industry, I gained valuable experience in problem-solving. Upon relocating to the USA, I transitioned into the role of an office administrative assistant. This position provided me with a comprehensive understanding of crucial aspects such as organizational skills, time management, effective communication, rapid learning, critical thinking, and meticulous attention to detail. These experiences have shaped me into a well-rounded professional with a strong foundation in various essential skills.</p>

                <p className="col">I have a strong passion for continuous learning and skill growth, as I find great satisfaction in swiftly acquiring new knowledge. Given the ever-evolving nature of the technologies I work with, I am dedicated to honing my skills and staying up-to-date. My objective is to demonstrate my expertise, foster collaboration, and contribute to a stimulating and fulfilling work environment as part of a team. If you wish to connect with me, please do not hesitate to reach out.</p> 
            </div>
            
        </div>
        </div>
    )
}