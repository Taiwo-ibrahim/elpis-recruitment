import React, {useState} from 'react'
import {HashLink} from "react-router-hash-link"
import "./Navbar.css"
import Logo from "../../img/logo.png"
import hamburger from "../../img/hamburger.png"
import cancel from "../../img/cancel.png"
import {NavLink, useLocation, useNavigate} from "react-router-dom"

function Navbar(props) {
  const location = useLocation()
  const [isToggled, setIsToggled] = useState(false)

  function toggleLink() {
    setIsToggled(!isToggled)
  }



  return (
    <div className='navbar__container'>
      <div className='navbar__container-logo'> 
      <NavLink to="/"><img src={Logo} alt="logo-img" /></NavLink>
        
      </div>
      <div className='navbar__container-content'>
        <div className='navbar__container-content_links'>
          <NavLink className="nav-link" id={location.pathname === "/"? "active" : " "} to="/" >Home</NavLink>
          <NavLink className="nav-link" id={location.pathname === "/About"? "active" : " "} to="/About" >About</NavLink>
          <NavLink className="nav-link" id={location.pathname === "/Services"? "active" : " "} to="/Services" >Services</NavLink>
          <NavLink className="nav-link" id={location.pathname === "/Contact"? "active" : " "} to="/Contact" >Contact</NavLink>
        </div>
        <div className='navbar__container-content-button' id={props.contactId}>
          <button className='navbar_button-container' ><HashLink className="navbar-button" smooth to={props.navbuttonText === "Get started"? "/#get": "/Contact"}>{props.navbuttonText}</HashLink></button>
        </div>
      </div>
      <div className="navbar__container-hamburger_container">
        <div className='hamburger-image-container' onClick={toggleLink}>
          <img src= {hamburger} alt="" />
        </div>
      </div>
        {isToggled && 
          <div className="navbar__container-hamburger_links">
            <div className='navbar__container-cancel'>
              <img src={cancel} alt="" onClick={toggleLink}/>
            </div>
            <ul className='navbar__container-hamburger_links-container'>
              <li><NavLink id='black' className="nav-link" to="/">Home</NavLink></li>
              <li><NavLink id='black' className="nav-link" to="/about">About</NavLink></li>
              <li><NavLink id='black' className="nav-link" to="/services">Services</NavLink></li>
              <li><NavLink id='black' className="nav-link" to="/contact">Contact</NavLink></li>
            </ul>
            <div className='navbar__container-content-button' id={props.contactId}>
              <button className='navbar_button-container' ><HashLink className="navbar-button" smooth to={props.navbuttonText === "Get started"? "/#get": "/Contact"}>{props.navbuttonText}</HashLink></button>
            </div>
          </div>
        }
    </div>
  )
}


export default Navbar