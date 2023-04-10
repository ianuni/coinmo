import React from 'react'
import "./card.css"
function Card({children}) {
  return (
    <div className="card-card">
        {children}
    </div>
  )
}

export default Card