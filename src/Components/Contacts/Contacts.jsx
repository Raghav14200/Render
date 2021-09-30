import React from 'react'
import './Contacts.css'

function Contacts() {

    return (
        <div className="">
        <div className='contact'>
            <h1>Don't be shy,write to us</h1>
            <form >
                <div className="contact__label">
                <div className="contact__name">
                <label for='name'>Name*</label>
                <input type='text' placeholder="Full name" id='name'/>
                </div>
                <div className="contact__email">
                <label for='email'>Email*</label>
                <input type='email' placeholder="Email Address" id='email'/>
                </div>
                </div>
                <div className="contact__textarea">
                <label for='textarea'>How can we help?</label>
                <textarea  id="textarea" cols="30" rows="10">Tell us about the project</textarea>
                </div>
                
                <label for='services'>Services</label>
                <div className="contact__services">
                <div className="contact__branding">
                <input type='checkbox' id='branding'/>
                <label for='branding'>branding</label>
                </div>
                <div className="contact__digital">
                <input type='checkbox' id='digital'/>
                <label for='digital'>Digital Expression</label>
                </div>
                <div className="contact__web">
                <input type='checkbox' id='web'/>
                <label for='web'>Web Development</label>
                </div>
                </div>
                <button className='contact__button'>Send Message</button>
                
            </form>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235198.78799566012!2d-43.586068159149846!3d-22.914069334113524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20State%20of%20Rio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2sin!4v1632925967386!5m2!1sen!2sin"  height="450"  allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}

export default Contacts
