import React from 'react'
import "../Pages/Contact.css"
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <>
    <div className='contact_page'>
        <div className='contact_header'>
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <div className='contact_section'>
            <form>
                <div className='name'>
                <div className='first_name'>
                <label htmlFor='first_name'> First name</label><br/>
                <input type='text' placeholder='Enter your first name' id='first_name' required/>
                </div>
                <div className='last_name'>
                <label htmlFor='last_name'> Last name</label><br/>
                <input type='text' placeholder='Enter your last name' id='last_name' required/>
                </div>
                </div>
                
                <div className='email'>
                <label htmlFor='email'> Email</label><br/>
                <input type='email' placeholder='yourname@email.com' id='email' required/>
                </div>

                <div className='message'>
                <label htmlFor='message'> Message</label><br/>
                <textarea placeholder="Send me a message and I'll reply you as soon as possible..." required id='message'></textarea>
                </div>
                
                <div className='checkbox'>
                <input type='checkbox' id='checkbox'/>
                <label htmlFor='checkbox'> You agree to providing your data to Abdulazeez who may contact you.</label>
                </div>

                <div className='submit'>
                    <button id='btn__submit'>Send message</button>
                </div>
            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact