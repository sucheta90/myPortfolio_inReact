import ProfilePicture from "../images/IMG_20200601_150351_569-EDIT.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div id="about-page" className="overflow-y-scroll">
      <h1 className="py-2 mb-2">About Me </h1>
      <div className="container h-100 w-100 mt-3">
        <div className="row justify-content-center" id="about-container">
          <section className="col-lg-5 p-4">
            <img src={ProfilePicture} className="img-fluid w-75" />
          </section>
          <section
            className="col-lg-7 row d-flex justify-content-around"
            id="about-content"
          >
            <p className="p-0 mt-2 mb-0 w-75">
              {/* Hello! I&#39;m Sucheta Mukherjee, a passionate web developer with
              a diverse background. My journey began as a self-taught front-end
              developer, and I&#39;ve since graduated from the Full Stack
              Bootcamp at Southern Methodist University. I thrive on working
              with a wide range of technologies, from HTML, CSS, JavaScript, and
              React on the front end, to Node, Express, MySQL, MongoDB, GraphQL,
              Apollo Server, and Apollo Client on the back end. My goal is to
              continue learning and evolving as a developer, taking on exciting
              projects and contributing to innovative solutions. I believe that
              the key to success in web development is a combination of
              technical expertise, curiosity, and adaptability. I&#39;m always
              up for a challenge and ready to explore new horizons. Feel free to
              reach out if you&#39;d like to connect or collaborate. Let&#39;s
              create something amazing together! */}
              Hi! I&#39;m Sucheta Mukherjee, a passionate web developer with a
              varied background in customer service and office administration. I
              started as a self-taught front-end developer and have since
              graduated from Southern Methodist University&#39;s Full Stack
              Bootcamp. I love working with a wide range of technologies, from
              HTML, CSS, JavaScript, and React on the front end to Node,
              Express, MySQL, MongoDB, GraphQL, Apollo Server, and Apollo Client
              on the back end. I&#39;m committed to continuing my learning and
              growth in development, taking on challenging projects, and
              contributing to innovative solutions.
              <br />I believe that the key to success in web development is a
              combination of technical skills, a curious mind, and adaptability.
              I&#39;m always excited to tackle new challenges and explore new
              frontiers. If you&#39;re interested in connecting or
              collaborating, please don&#39;t hesitate to reach out. Let&#39;s
              work together to create something truly extraordinary!
            </p>
            <p className="mt-0 p-0 w-75 align-self-start"></p>
          </section>
        </div>
      </div>
    </div>
  );
}
