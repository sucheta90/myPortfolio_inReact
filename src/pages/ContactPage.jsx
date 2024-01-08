import "./ContactPage.css";
import { useState } from "react";
import { validateEmail } from "../../utils/validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import keys from "../../utils/keys";

export default function ContactPage() {
  const contactForm = document.getElementById("contact-form");
  // const contactForm = useRef();
  const [showMessage, setShowMessage] = useState("");
  const [userName, setUserName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "user_name") {
      setUserName(inputValue);
    }

    if (inputType === "user_email") {
      setEmail(inputValue);
    }
    if (inputType === "message") {
      setMessage(inputValue);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
    const validEmail = validateEmail(email);
    if (!validEmail) {
      setShowMessage(
        <div className="alert alert-danger my-4" role="alert">
          Please provide a valid email.
        </div>
      );
    } else if (validEmail && userName && message) {
      emailjs
        .sendForm(keys.service, keys.template, contactForm, keys.some_key)
        .then(
          (result) => {
            console.log(result.text);
            setShowMessage(
              <div className="alert alert-success  my-2" role="alert">
                Thank You!!! You message has been sent
              </div>
            );
            setUserName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }
  return (
    <div className="form-container overflow-scroll" id="contact-page">
      <div
        id="contact-content"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="card col-lg-5">
          <h1>Get In Touch</h1>
          <form className="my-5" id="contact-form" onSubmit={handleSubmit}>
            {showMessage}
            <p>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="user_name"
                value={userName}
                placeholder="Name"
              />
            </p>
            <p>
              <input
                type="email"
                onChange={handleChange}
                placeholder="Email"
                className="form-control"
                name="user_email"
                required
                value={email}
              />
            </p>
            <p>
              <textarea
                type="text"
                onChange={handleChange}
                name="message"
                value={message}
                className="form-control"
                rows="3"
                placeholder="Type your message here"
                required
              />
            </p>

            <button
              className="btn rounded-pill px-5 my-2"
              style={{
                backgroundColor: "#f76f8eff",
              }}
            >
              <h3 className="text-light my-1">Send</h3>
            </button>
          </form>
          <div>
            {/* Social links */}
            <span className="p-1">
              <a
                href="https://www.linkedin.com/in/sucheta-mukherjee-07347b88/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#37505cff", fontSize: "2em" }}
                  className="link"
                />
              </a>
            </span>
            <span className="p-1">
              <a
                href="https://github.com/sucheta90"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "#37505cff", fontSize: "2em" }}
                  className="link"
                />
              </a>
            </span>
            <span className="p-1">
              <a
                href="mailto:sucheta.mu@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#37505cff", fontSize: "2em" }}
                  className="link"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
