import React from 'react'
import "./Home.css"
import heroImg from "../../img/heroImg.png"
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import image1 from "../../img/fluent-mdl2_temporary-user.png"
import image2 from "../../img/Management.png"
import image3 from "../../img/Man.png"
import image4 from "../../img/Scissors.png"
import talentImg from "../../img/talentImg.png"
import Card2 from '../../Components/Card2/Card2'
import Support from '../../Components/Support/Support'
import Footer from '../../Components/Footer/Footer'

function Home(props) {




  return (
    <div className='home__container'>
      <Navbar 
        navbuttonText = "Get started"
      />
      <div className='home__container-hero_section'>
        <h1 className='hero-text'>Connecting  <span> efficient </span>  talent with <span>opportunities</span></h1>
        <p className="hero-paragraph">
          Give your company the advantage of securing the best staff from the most reliable pool of talent 
          network. The key to a successful business or organization is hiring exceptional people.                                                          
        </p>
        <img src={heroImg} alt=""  />
      </div>

      <div className='home__container-recruitment'>
        <div className='home__container-recruitment_top'>
          <h1>Recruitment services we provide</h1>
        </div>
        <div className='home__container-recruitment_cards'>
          <Card 
            img = {image3} 
            cardId = "first"
            header = "Permanent recruitment"
            text = "At ELPIS , we have adequate knowledge of the labor market and access to the best candidates. Our first goal is to provide agency staff you can permanently hire."
          />
          <Card 
            img ={image1}
            cardId= "second"
            header = "Temporary recruitment"
            text = "Elpis Recruitment has the capacity to provide you contract or temporary staff on a short-term basis between 6 months - 1 year. As contract staffing is a preferred choice for both employers and employees, there can be contract renewal."
          />
          <Card 
            img = {image2}
            cardId = "third"
            header = "Experienced professionals"
            text = "At Elpis, we only screen and hire candidates that possess the skill set and experience required to carry out the roles and requirements being hired for."
          />
          <Card 
            img = {image4}
            cardId = "fourth"
            header = "Tailored staff"
            text = "We provide agency staff carefully sourced and tailored towards the various industries we serve and towards various companies hiring requirements as well."
          />
        </div>
      </div>

      <div className='home__container-talent_section'>
        <div className='home__container-talent_section-img'>
          <img src={talentImg} alt=""/>
        </div>
        <div className='home__container-talent_section-text'>
          <h1><span>Talent </span>you can<span> trust</span></h1>
          <p>
            Elpis Recruitment Ltd, was established to provide talent that companies in
            the UK can trust. The talent are carefully sourced and are readily available
            to be provided for companies that require them. <br /> 
            We build close relationships by creating friendly and trusting relationships
            with our clients and staff to ensure we can deliver your exact requirements
            and needs.
          </p>
        </div>
      </div>

      <div className='home__container-recruit_section'>
        <div className='home__container-recruit_section-text'>
          <h1>How <span>Elpis Recruitment</span> works</h1>
        </div>
        <div className='home__container-recruit_section-card' id='get'>
          <div className='card2-container' >
            <Card2
              buttonText = "   Connect"
              buttonNumber = "01."
              card2id = "card1"
              title = "Contact us for your recruitment needs"
              text = "Get started by reaching out to us with your staffing needs and we provide prompt solutions to these needs."
            />
            <Card2
              buttonText = "Negotiation"
              card2id = "card2"
              buttonNumber = "02."
              title = "Negotiate with Elpis "
              text = "We are outstanding in the recruitment agency industry, we are ready to listen to clients’ needs and we also provide satisfactory solutions to these staffing needs."
            />
            <Card2
              buttonText = "Get a quote"
              card2id = "card3"
              buttonNumber = "03."
              title = "Get an estimation of agreed total"
              text = "Once negotiation is completed, you receive an estimation of the agreed total. We then send an invoice to your email."
            />
            <Card2
              buttonText = "Staff provision"
              card2id = "card4"
              buttonNumber = "04."
              title = "Ready-to-work staff are provided"
              text = "We supply quality staff that are reliable, ready to work, and tailored towards your staffing needs."
            />
          </div>
        </div>
      </div>

        <div className='home__container-support_section'>
          <Support />
        </div>

        <div className="home__container-footer_section">
          <Footer />
        </div>

    </div>
  )
}

export default Home