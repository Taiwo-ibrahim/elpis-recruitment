import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card-container" id={props.cardId}>
      <img src={props.img} alt="" />
      <h1>{props.header}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default Card