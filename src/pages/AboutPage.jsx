import ProfilePicture from "../images/profile.webp";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="d-flex justify-content-center h-100 py-5" id="about-page">
      <div
        className=" row d-flex justify-content-evenly align-items-center"
        id="about-content"
      >
        {/* image */}
        <div className="col-lg-4 col-sm-8" id="profile-img">
          <img
            src={ProfilePicture}
            className="img-fluid p-2"
            id="profile-picture"
          />
        </div>
        {/* content */}
        <div className="col-lg-7 col-sm-8 h-100 d-flex flex-column align-items-center justify-content-center ">
          <h1 className="">About Me </h1>
          <p className="px-1">
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
      <p className="my-5"></p>
    </div>
  );
}
