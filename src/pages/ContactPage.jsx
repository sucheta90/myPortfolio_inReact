import './ContactPage.css';
import { useState } from 'react';
import { validateEmail } from '../../utils/validation';
export default function ContactPage(){
    const [showMessage, setShowMessage] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
       
    const handleChange = (e)=>{
       const {target} = e;
       const inputType = target.name;
       const inputValue = target.value;
       if(inputType === "firstName"){
         setFirstName(inputValue);
       }
       if(inputType === "lastName"){
         setLastName(inputValue);
       }
       if(inputType === "email"){
         setEmail(inputValue);
       }
       if(inputType === "message"){
         setMessage(inputValue);
       }
    }
    function handleSubmit(e){
        e.preventDefault();
        const validEmail = validateEmail(email);
        if(!validEmail){
            setShowMessage( <div className="alert alert-danger" role="alert">Please provide a valid email.</div>)
        }else if(validEmail && firstName && lastName && message){
            setShowMessage(<div className="alert alert-success" role="alert">Thank You!!!</div>)
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
        }
    
       
        
    }
    return (
        <div className="mx-auto d-flex flex-column justify-content-center align-items-center h-100 form-container">
   
         {showMessage} 
        <div className="card m-5 col-lg-5">
            <h1>Get In Touch</h1>
            <form
                // action="https://formsubmit.co/mukherjee.sucheta90@email.com"
                // method="POST"
                onSubmit={handleSubmit}
            >
                <p>
                <span><input type="text" onChange={handleChange} className="form-control" name="firstName" placeholder="First Name" required value={firstName}/></span>
                <span><input type="text" onChange={handleChange} className="form-control" name="lastName" placeholder="Last Name" required value={lastName}/></span>
                </p>
                <p>
                    <input type="email"onChange={handleChange} placeholder="Email" className="form-control" name="email" required value={email} />
                </p>
                <p>
                    <textarea type="text" onChange={handleChange} name="message" value={message} className="form-control" rows="3" placeholder="Type your message here" required/>
                </p>
                
                <button className="btn rounded-pill px-5" onChange={handleChange} style={{backgroundColor: "#f76f8eff", color: "white", fontWeight:"bold"}}>Send</button>
                
            </form>
        </div>
        </div>
    )
}