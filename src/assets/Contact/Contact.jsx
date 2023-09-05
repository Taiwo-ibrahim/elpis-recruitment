import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer"
import Support from "../../Components/Support/Support"
import contactHero from "../../img/contactHero.png"
import mail from "../../img/mail.png"
import phone from "../../img/phone.png"
import mobile from "../../img/mobile.png"
import "./Contact.css"

function Contact(props) {
  return (
    <div className='contact__container'>
      <div id='contact-top'>
        <Navbar 
          contactId = "contactId"
        />
      </div>

      <div className='contact__container-hero'>
        <h1>CONTACT US TO FIND OUT HOW WE CAN HELP</h1>
        <p>
          Our polite and receptive contact support staff is always readily available to assist you with whatever questions,
          information or general enquiries. Kindly get in touch with us today.       
        </p>
      </div>
      <div className='contact__container-hero_img'>
        <img src={contactHero} alt="" />
        <p>
          Please feel free to contact us, we are available to provide
          help with whatever you need.
        </p>
      </div>

      <div className='contact__container-contact_form'>
        <div className='contact__container-contact_form-left'>
          <div className='contact__container-contact_form-left_top'>
            <img src={mail} alt="" />
            <div className='contact-content'>
              <h3>Email</h3>
              <p>support@elpisrecruitment.co.uk</p>
            </div>
          </div>
          <div className='contact__container-contact_form-left_top'>
            <img src={phone} alt="" />
            <div className='contact-content'>
              <h3>Phone</h3>
              <p>+44 7897 640670</p>
            </div>
          </div>
          <div className='contact__container-contact_form-left_top'>
            <img src={mobile} alt="" />
            <div className='contact-content'>
              <h3>Mobile</h3>
              <p>+44 7778 670641</p>
            </div>
          </div>
        </div>
        <form className='contact__container-contact_form-right'>
          <input type="text" placeholder='Your Name/organization name'></input>
          <input type="email" placeholder='Email'></input>
          <input type="number" placeholder='Phone number'></input>
          <textarea type="text" placeholder='Your enquiry'></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <Support /> 
      <Footer />
    </div>
  )
}

export default Contact