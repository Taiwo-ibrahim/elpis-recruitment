import React from 'react'
import "./Footer.css"
import linkedin from "../../img/linkedin.png"
import facebook from "../../img/facebook.png"
import whatsapp from "../../img/whatsapp.png"
import instagram from "../../img/instagram.png"
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__container-top_section'>
        <div className='footer__container-top_section-column1'>
          <h3>Elpis Recruitment Ltd</h3>
          <small>
            8, Victory road,<br />
            Gloucester,<br />
            United Kingdom.
          </small>
          <p>Phone: +44 7778 670641, +44 7897 640670 </p>
          <p>Email: support@elpisrecruitment.co.uk</p>
        </div>
        <div className='footer__container-top_section-column2'>
          <h4>Company</h4>
          <small><HashLink className="more-link" to="/About#about-top">About us</HashLink></small>
          <small><HashLink className="more-link" to="/Services#service-top">Services</HashLink></small>
        </div>
        <div className='footer__container-top_section-column3'>
          <h4>Services</h4>
          <small>Health & social care</small>
          <small>Housing</small>
          <small>Transportation & Logistics</small>
          <small id="bold"><HashLink className="more-link" to="/Services#service-top">More</HashLink></small>
        </div>
        <div className='footer__container-top_section-column4'>
          <h4>Others</h4>
          <small><HashLink className="more-link" to="/antislavery#antislavery-top">Anti-slavery policy</HashLink></small>
          <small><HashLink className="more-link" to="/privacy#privacy-top">Privacy policy</HashLink></small>
          <small>Terms of use</small>
        </div>
      </div>
      <div className='footer__container-bottom_section'>
        <div className='footer__container-bottom_section-text'>
          <small>&copy; Copyright Elpis Recruitment Ltd. All Rights Reserved</small>
        </div>
        <div className='footer__container-bottom_section-img'>
          <a href='https://wa.me/qr/HNU2IESNPB3DP1'><img src={whatsapp} alt="" /></a> 
          <a href='https://instagram.com/elpisrecruitment?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=='><img src={instagram} alt="" /></a> 
          <a href='https://www.linkedin.com/company/elpis-recruitment-ltd/'><img src={linkedin} alt="" /></a> 
          <a href='https://www.facebook.com/profile.php?id=61550651236082&mibextid=b06tZ0'><img src={facebook} alt="" /></a>
        </div>

      </div>
    </div>
  )
}

export default Footer