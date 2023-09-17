import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import serviceHero from "../../img/serviceHero.png"
import Card3 from '../../Components/Card3/Card3'
import health from "../../img/healthcare.png"
import home from "../../img/house.png"
import market from "../../img/marketing.png"
import sales from "../../img/sales.png"
import cleaning from "../../img/cleaning.png"
import callCenter from "../../img/call.png";
import cook from "../../img/cook.png"
import event from "../../img/events.png"
import industry from "../../img/industry.png"
import healthcareimg from "../../img/doctor.png"
import professional from "../../img/professional.png"
import satisfied from "../../img/satisfied.png"
import "./Services.css"
import Support from '../../Components/Support/Support'
import Footer from '../../Components/Footer/Footer'
import { HashLink } from 'react-router-hash-link'

function Services(props) {
  return (
    <div className='service__container'>
      <div id='service-top'>
        <Navbar 
          navbuttonText = "Request talent"
        />
      </div>
      <div className='service__container-hero_text'>
        <h1>GREAT VISION IS EXECUTED BY EXCEPTIONAL STAFF</h1>
        <p>
          A business or company’s vision, mission, and goals are the foundation of success. However, the key
          to achieving this success lies in your staff and that is where Elpis comes in.                    
        </p>
      </div>
      <div className='service__container-hero_img'>
        <img src={serviceHero} alt='' />
      </div>


      <div className='service__container-card'>
        <HashLink className='service__container-card_1' to="/Contact#top">
          <h2 id="text" className='service-text'>Searching for staff?</h2>
          <button id='button'>Request talent</button>
        </HashLink>
        <HashLink className='service__container-card_2' to="/Talent#talent-top">
          <h2 id="text">Looking to cover shifts?</h2>
          <button id='button'>Learn more</button>
        </HashLink>
        <HashLink className='service__container-card_3' to="/About#about-top">
          <h2 id="text">Our mission</h2>
          <button id='button'>Learn more</button>
        </HashLink>
      </div>

      <div className='service__container-industries'>
        <h1>INDUSTRIES WE SERVE</h1>
        <div className='service__container-card3'>
          <Card3 
            card3img = {health}
            card3text = "Health & Social care"
            card3color = "card31"
          />
          <Card3 
            card3img = {home}
            card3text = "Accommodation/Housing"
            card3color = "card32"
          />
          <Card3 
            card3img = {sales}
            card3text = "sales"
            card3color = "card32"
          />
          <Card3 
            card3img = {market}
            card3text = "Marketing"
            card3color = "card33"
          />
          <Card3 
            card3img = {cleaning}
            card3text = "Cleaning"
            card3color = "card34"
          />
          <Card3 
            card3img = {callCenter}
            card3text = "Call Centres"
            card3color = "card35"
          />
          <Card3 
            card3img = {cook}
            card3text = "Catering"
            card3color = "card36"
          />
          <Card3 
            card3img = {event}
            card3text = "Events planning"
            card3color = "card37"
          />
          <Card3 
            card3img = {industry}
            card3text = "Industrial"
            card3color = "card38"
          />
        </div>
      </div>

      <div className='service__container-healthcare'>
        <div className='service__container-healthcare_top'>
          <h1>LEARN WHAT MAKES OUR STAFF UNIQUE</h1>
        </div>
        <div className='service__container-healthcare_bottom'>
          <div className='service__container-healthcare_bottom-left'>
            <img src={healthcareimg} alt="" />
          </div>
          <div className='service__container-healthcare_bottom-right'>
            <div className='service__container-healthcare_bottom-right_top'>
              <p>
                Elpis Recruitment Ltd caters mainly to the health & social care industry in the
                United Kingdom. Our care workers are carefully sourced and committed to
                providing the best and quality care for people living with vulnerability.
              </p>
            </div>
            <div className='service__container-healthcare_bottom-right_bottom'>
              <div className='service__container-healthcare_bottom-right_bottom-professional_container'>
                <img src={professional} alt="" />
                <div className='service__Container-healthcare_bottom-right_bottom-professional'>
                  <h3>PROFESSIONALS</h3>
                  <p>
                    The healthcare and social workers we provide to our clients have years of
                    care experience and work tirelessly to ensure the individuals they
                    support are properly taken care of.
                  </p>
                </div>
              </div>
              <div className='service__container-healthcare_bottom-right_bottom-satisfied_container'>
                <img src={satisfied} alt="" />
                <div className='service__container-healthcare_bottom-right_bottom-satisfied'>
                  <h3>DEPENDABLE & RELIABLE</h3>
                  <p>
                    When contacted, we provide you with workers you can depend and rely on.
                    The dedicated workers ensure they arrive in time for shifts and provide
                    the best care and support for whom they are assigned to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='services__container-support'>
        <Support 
          id = "blue"
        />
      </div>
      <Footer /> 
    </div>
  )
}

export default Services