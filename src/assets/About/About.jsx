import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AboutHero from "../../img/aboutHero.png"
import smiley from "../../img/smiley.png"
import suit from "../../img/suit.png"
import carbon from "../../img/carbon.png"

import "./About.css"
import Footer from '../../Components/Footer/Footer'
import Support from '../../Components/Support/Support'


function About(props) {
  return (
    <div className='about__container'>
      <div id='about-top'>
        <Navbar
          navbuttonText = "Request Talent"
        />
      </div>
      <div className='about__container-hero_section'>
        <div className='about__container-hero_section-text'>
          <h1>Welcome to <span>Elpis Recruitment Ltd</span></h1>
          <p>Elpis Recruitment Ltd is a relatively new recruitment organization that is peopled with seasoned, hardworking, and resilient employees who have been supporting companies/businesses for many years.</p>
        </div>
        <div className='about__container-hero_section-img'>
          <img src={AboutHero} alt="" />
        </div>
      </div>

      <div className='about__container-card_container'>
        <div className='about__container-card_background'>
          <div className='about__container-card'>
            <h3>At Elpis we are:</h3>
            <h1><span>Enhancing</span> the <span>recruitment agency</span> <br />experience for companies and <br />businesses.</h1>
            <p>Elpis Recruitment Ltd. levels the playing field for businesses/companies by providing access to negotiation and provision of efficient staffing solutions. We are passionate about recruiting the best talent in the various industries/sectors we serve therefore, it is our aim to provide a quality committed service to all our clients.</p>
          </div>
        </div>
      </div>

      <div className='about__container-main_talk'>
        <div className='about__container-main_talk-top'>
          <p>
            We understand the importance of finding the right fit for both candidates and organizations.
            It does not involve just matching any available talent with any hiring company but also 
            understanding the unique values, culture, and goals of each entity involved.
          </p>
        </div>
        <div className='about__container-main_talk-text'>
          <h2>Our mission</h2>
          <p>
            Elpis Recruitment takes pride in its personalized approach to agency staff provision.
            We exceed the traditional methods of sourcing talent to gain insight on the needs
            of our clients and candidates.
          </p>
        </div>
        <div className='about__container-main_talk-text'>
          <h2 className='color'>Our approach</h2>
          <p>
            Elpis Recruitment takes pride in its personalized approach to agency staff provision.
            We exceed the traditional methods of sourcing talent to gain insight on the needs
            of our clients and candidates.
          </p>
        </div>
        <div className='about__container-main_talk-text'>
          <h2>Client satisfaction</h2>
          <p>
            We believe in building a solid foundation on trust with our clients to ensure they have
            peace of mind when working with us. By thoroughly assessing and understanding 
            our client goals, staffing needs, and diversity culture, we present them with
            carefully selected candidates who meet the goals and requirements of our clients.
          </p>
        </div>
      </div>


      <div className='about__container-unique_section'>
        <div className='about__container-unique_section-top'>
          <h1>What makes us <span>unique</span></h1>
        </div>
        <div className='about__container-unique_section-bottom'>
          <div className='about__container-unique_section-bottom_img'>
            <img src={suit} alt="" />
          </div>
          <div className='about__container-unique_section-bottom_content'>
            <div className='about__container-unique_section-bottom_content-container'>
              <img src={carbon} alt="" />
              <div className='about__container-unique_section-bottom_content-container_text'>
                <h4>Solution-driven</h4>
                <p>
                  We have an ever ready strategic team to provide solutions to your various
                  staffing problems. These solutions integrate seamlessly with our
                  company's goals and enable us to serve our clients well. We also provide
                  transparent and negotiable pricing for our clients.
                </p>
              </div>
            </div>
            <div className='about__container-unique_section-bottom_content-container'>
              <img src={smiley} alt="" />
              <div className='about__container-unique_section-bottom_content-container_text'>
                <h4>Client & Staff satisfaction</h4>
                <p>
                  At Elpis, we strive to ensure our clients whom we provide staff to and the
                  staff we provide are satisfied. We understand the importance of the 
                  satisfaction of both parties as it goes a long way in promoting a healthy
                  work environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about__container-ready_section">
        <Support 
          id = "about__container-ready_section-id"
        />
      </div>


      <Footer />
    </div>
  )
}

        
export default About