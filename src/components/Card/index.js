import React from 'react'
import "./card.css" ;

const Card = ({children, width, height, title, underscore}) => {

  return (

    <div className="card-card" style={{maxWidth: width + "rem", maxHeight:height+ "rem"}}>
        <h1 className="card-title-text">{title}</h1>
        {underscore && <div className="card-title-underscore"></div>}
        {children}
    </div>
  )
}

export const CardContainer = ({children, background}) => {
  return(
  <div className="card-container" style={{background: background}}>
    {children}
  </div>
  )
}

export default Card