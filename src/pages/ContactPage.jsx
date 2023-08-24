import './ContactPage.css';
export default function ContactPage(){
    return (
        <div className="mx-auto d-flex flex-column justify-content-center align-items-center h-100 form-container">
        <h2>Contact </h2>
        <div className="card m-5 col-lg-5">
            <h4>Get In Touch</h4>
            <form
                // action="https://formsubmit.co/mukherjee.sucheta90@email.com"
                // method="POST"
            >
                <p>
                <span><input type="text" className="form-control" name="firstName" placeholder="First Name"/></span>
                <span><input type="text" className="form-control" name="lastName" placeholder="Last Name"/></span>
                </p>
                <p>
                    <input type="email"placeholder="Email" className="form-control" name="email"/>
                </p>
                <p>
                    <textarea type="text" name="message" className="form-control" rows="3" placeholder="Type your message here"/>
                </p>
                <button type="button" className="btn" id="form-btn">Send</button>
                
            </form>
        </div>
        </div>
    )
}