import React from 'react'
import "./Card3.css"

function Card3(props) {
  return (
    <div className='card3__container' id={props.card3color}>
      <img src={props.card3img} alt="logo" />
      <h3>{props.card3text}</h3>
    </div>
  )
}

export default Card3