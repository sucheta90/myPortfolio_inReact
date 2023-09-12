import ProfilePicture from "../images/profile.png";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="p-5" id="about-page">
      <div className="row d-flex justify-content-evenly align-items-center">
        <div className="col-6 d-flex align-items-center" id="profile-img">
          <img src={ProfilePicture} className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <h1>About Me </h1>
          <p>
            Hello! I&#39;m Sucheta Mukherjee, a passionate web developer with a
            diverse background. My journey began as a self-taught front-end
            developer, and I&#39;ve since graduated from the Full Stack Bootcamp
            at Southern Methodist University. I thrive on working with a wide
            range of technologies, from HTML, CSS, JavaScript, and React on the
            front end, to Node, Express, MySQL, MongoDB, GraphQL, Apollo Server,
            and Apollo Client on the back end. My goal is to continue learning
            and evolving as a developer, taking on exciting projects and
            contributing to innovative solutions. I believe that the key to
            success in web development is a combination of technical expertise,
            curiosity, and adaptability. I&#39;m always up for a challenge and
            ready to explore new horizons. Feel free to reach out if you&#39;d
            like to connect or collaborate. Let&#39;s create something amazing
            together!
          </p>
          {/* <p className="col"> 
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
                </p> */}
        </div>
      </div>
    </div>
  );
}
