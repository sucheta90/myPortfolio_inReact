import ProfilePicture from "../images/profile.webp";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="" id="about-page">
      <div className="row d-flex justify-content-center align-items-center py-5 h-100">
        <div
          className="col-6  d-flex align-items-center justify-content-center"
          id="profile-img"
        >
          <img src={ProfilePicture} className="img-fluid" />
        </div>
        <div className="col-6 col-sm-6 d-flex flex-column align-items-center justify-content-center">
          <h1 className="py-2">About Me </h1>
          <p className="p-2">
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
        </div>
      </div>
      <p className="py-5 m-0"></p>
      <p className="py-5 m-0"></p>
    </div>
  );
}
