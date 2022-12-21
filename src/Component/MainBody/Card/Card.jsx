import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <>
      <div className="cardContainer">
         <div className="filter">filter</div>
         <div className="topics">{props.data}</div>
         <div className="coloumn">okay</div>
         <div className="mainData">
            Data
         </div>
         
      </div>
    </>
  )
}

export default Card
