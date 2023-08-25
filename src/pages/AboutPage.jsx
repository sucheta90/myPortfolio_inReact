import ProfilePicture from "../images/profile.png"
import './AboutPage.css';

export default function AboutPage(){
    return (
        <div className="p-5" id="about-page">
        <div className="row d-flex justify-content-evenly align-items-center">
            <div className="col-6 d-flex align-items-center" id="profile-img">
                <img src={ProfilePicture} className="img-fluid"/>
            </div>
            <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h1>About Me </h1>
                <p className="col"> 
                    As an aspiring web developer, I have acquired a strong foundation in frontend technologies, including HTML, CSS, JavaScript, and jQuery. I am skilled in creating responsive and visually appealing web interfaces. Moreover, I am proficient in working with popular CSS frameworks such as Bulma and Bootstrap, which enable me to build sleek and intuitive user interfaces efficiently.
                </p>

                <p className="col" >
                    Currently, I am expanding my knowledge and getting familiar with backend technologies, particularly Node.js, Express.js, MySQL, and Sequelize. I understand the importance of a robust backend to complement the frontend and enhance the overall functionality of web applications. By exploring these technologies, I aim to develop full-stack capabilities and create dynamic, data-driven web applications.
                </p>

                <p className="col">
                    I am an enthusiastic learner, consistently seeking to improve my skills and stay up to date with the latest trends and best practices in web development. My passion for problem-solving and creativity drives me to build innovative and user-friendly digital solutions. I am eager to contribute my expertise and collaborate with diverse teams to develop impactful web projects.
                </p> 
                <p className="col">
                As I continue my journey as a web developer, I am excited to take on new challenges, learn from experienced professionals, and leverage my knowledge to build cutting-edge web applications that make a positive impact in the digital world.
                </p>
            </div>
            
        </div>
        </div>
    )
}