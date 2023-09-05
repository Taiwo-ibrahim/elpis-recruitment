import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Talent.css"
import talentHero from "../../img/talentHero.png"
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
import Support from '../../Components/Support/Support'
import Footer from '../../Components/Footer/Footer'

function Talent() {
  return (
    <div className='talent__container'>
      <div id='talent-top'>
        <Navbar 
          contactId = "contactId"
        /> 
      </div>
      <div className='talent__container-hero'>
        <h1>ARE YOU LOOKING FORWARD TO JOINING US?</h1>
        <h3>We are seeking empathetic and reliable team members</h3>
        <p>
          Our staff are carefully selected from the best pool of talent network. We have built reliable systems
          in place to ensure that these workers in the various industries we cater to are readily available.
        </p>
        <img src={talentHero} alt=' ' />
      </div>

      <div className='talent__container-link_section'>
        <p>
          Are you an experienced talent seeking jobs in the 
          United Kingdom? Reach out to us by clicking the link below.<br/>
          <span>
            https://docs.google.com/forms/d/e/1FAIpQLSevPmV
            NiUCJVJwRK6hYq iywteiilKgX2riuPBF6r72jsftWoA/viewform?vc
            =0&c=0&w=1&flr=0
            
          </span>
        </p>
        <p>
          The link redirects you to a Google forms page where you fill out your
          personal information and the industry you wish to serve amongst the
          ones we cater to and we’d contact you when there are available
          shifts to cover.
        </p>
        <h4>
          We will then send you a job description which gives insight on the minimum years of experience, qualities,
          and skill set required to becoming a part of our growing team at Elpis Recruitment. 
        </h4>
      </div>

    <div className='talent__container-industries_section'>
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

    <div className='talent__container-support'>
      <Support 
        id="blue"
      /> 
    </div>
    <Footer />
  </div>
  )
}

export default Talent