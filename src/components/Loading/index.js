import React from 'react'
import "./Loading.css"
import {ReactComponent as Logo} from "../../assets/coinmo.svg"

function Loading({text}) {
  return (
    
    <div className="loading-container">
      <div className="box">
          <Logo id="foot1" className="foot"/>
          <Logo id="foot2" className="foot"/>
          <Logo id="foot3" className="foot"/>

      </div>
      <span className="loading-text">{text}</span>
    </div>
  )
}

export default Loading;