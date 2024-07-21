import Header from './Header';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function ContactUs(){
   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const navigate = useNavigate();


    const customer = {
        name,
        email,
        subject,
        message}


        const handleSub = event => {
            event.preventDefault();
            fetch("https://projectdb-885a.onrender.com/Customers", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(customer)
              })
              .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            console.log(customer);
            navigate(`/`)
            alert("Your message has been received, we will reach out to you as soon as possible!, Thank you for Contacting Escrowease!")
        };
    
   return(
    <>
    <Header />

     <div className="ContactUs">
            <div id="contact" >Contact Us</div>
  <div id="contactForm">
    <h1 className="keep">Keep in touch</h1>
    <form onSubmit={handleSub}>
                <div className="payment-methods">
                    
                </div>
                <div className='info'>
                <div>
                    <label>
                        
                        <input 
                        className='name'
                            placeholder='Name'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                       
                        <input 
                         className='name'
                        placeholder='Email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                       
                        <input 
                         className='name'
                        placeholder='Subject'
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        
                        <input 
                         className='message'
                        placeholder='Message'
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </label>
                </div>
                </div>
                <button type="submit">Submit</button>
            </form>
  </div>
        </div>
        <NavLink className="goback2" to={`/`}>
                        Go Back
                    </NavLink>
    </>
   )
}