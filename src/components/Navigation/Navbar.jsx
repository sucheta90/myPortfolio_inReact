import { Link, useLocation } from "react-router-dom";
// import Resume from "../../resume/Sucheta Mukherjee_newResume.pdf";
import "./Navbar.css";
export default function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg shadow bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <Link
                to="/"
                className={
                  currentPage === "/"
                    ? "nav-link px-5 active"
                    : " px-5 nav-link"
                }
              >
                <h3 className="nav-tab">Home</h3>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                to="/About"
                className={
                  currentPage === "/About"
                    ? "nav-link px-5 active"
                    : " px-5 nav-link"
                }
              >
                <h3 className="nav-tab">About Me</h3>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                to="/Project"
                className={
                  currentPage === "/Project"
                    ? "nav-link px-5 active"
                    : "px-5 nav-link"
                }
              >
                <h3 className="nav-tab">Projects</h3>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                to="/OpenSource"
                className={
                  currentPage === "/OpenSource"
                    ? "nav-link px-5 active"
                    : "px-5 nav-link"
                }
              >
                <h3 className="nav-tab">Open Source Contributions</h3>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                to="/Contact"
                className={
                  currentPage === "/Contact"
                    ? "nav-link px-5 active"
                    : " px-5 nav-link"
                }
              >
                <h3 className="nav-tab">Contact</h3>
              </Link>
            </li>
            {/* <li className="nav-item px-2">
              <Link
                className={
                  currentPage === "/Contact"
                    ? "nav-link px-5 active"
                    : " px-5 nav-link"
                }
              >
                <a href={Resume} download={true} className="nav-tab">
                  Resume
                </a>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
