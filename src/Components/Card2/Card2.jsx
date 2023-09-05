import React from 'react'
import "./Card2.css"

function Card2(props) {
  return (
    <div className='card2__container' id={props.card2id}>
      <button >{props.buttonNumber}<span>{props.buttonText}</span></button>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default Card2