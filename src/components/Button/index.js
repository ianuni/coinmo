import React from 'react'
import "./button.css"
function Button({onClick, text, dimension, type}) {
  return (
    <button className={"button-button " + dimension} onClick={onClick} type={type}>{text}</button>  
  )
}

export default Button