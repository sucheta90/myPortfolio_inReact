import './ContactPage.css';
import { useState, useRef } from 'react';
import { validateEmail } from '../../utils/validation';
import emailjs from '@emailjs/browser';

export default function ContactPage(){
    const contactForm = document.getElementById('contact-form')
    // const contactForm = useRef();
    const [showMessage, setShowMessage] = useState("")
    const [userName, setUserName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const templateId = 'template_yypi6th'
       
    const handleChange = (e)=>{
       const {target} = e;
       const inputType = target.name;
       const inputValue = target.value;
       if(inputType === "user_name"){
        setUserName(inputValue);
       }
       
       if(inputType === "user_email"){
         setEmail(inputValue);
       }
       if(inputType === "message"){
         setMessage(inputValue);
       }
    }
    function handleSubmit(e){

        e.preventDefault();
        console.log('clicked')
        const validEmail = validateEmail(email);
        if(!validEmail){
            setShowMessage( <div className="alert alert-danger my-2" role="alert">Please provide a valid email.</div>)
        }else if(validEmail && userName && message){

            emailjs.sendForm('service_oerxgbc', templateId , contactForm, 'D5XDIdUIOK4nLYl-Y')
           .then((result) => {
          console.log(result.text);
          setShowMessage(<div className="alert alert-success  my-2" role="alert">Thank You!!! You message has been sent</div>)
            setUserName("");
            setEmail("");
            setMessage("");

            }, (error) => {
          console.log(error.text);
            });
            
        }
    
       
        
    }
    return (
        <div className="mx-auto py-5  d-flex flex-column justify-content-center align-items-center h-100 form-container" id="contact-page" >
   
          
        <div className="card m-5 col-lg-5" >
            <h1>Get In Touch</h1>
            <form
                className='my-5'
                id = 'contact-form'
                onSubmit={handleSubmit}
            >
                {/* <p>
                <span><input type="text" onChange={handleChange} className="form-control" name="firstName" placeholder="First Name" required value={firstName}/></span>
                <span><input type="text" onChange={handleChange} className="form-control" name="lastName" placeholder="Last Name" required value={lastName}/></span>
                </p> */}
                <p>
                <input type="text" onChange={handleChange} className="form-control" name="user_name" value={userName} placeholder='Name'/>
                </p>
                <p>
                    <input type="email"onChange={handleChange} placeholder="Email" className="form-control" name="user_email" required value={email} />
                </p>
                <p>
                    <textarea type="text" onChange={handleChange} name="message" value={message} className="form-control" rows="3" placeholder="Type your message here" required/>
                </p>
                
                <button className="btn rounded-pill px-5"  style={{backgroundColor: "#f76f8eff", color: "white", fontWeight:"bold"}}>Send</button>
                
            </form>
        </div>
        {showMessage}
        </div>
    )
}
