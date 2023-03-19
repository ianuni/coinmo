import React from 'react'
import "./Form.css"
const Form = ({children, onSubmit, title}) => {
  return (
    <form className="form-component" onSubmit={onSubmit}>
        <h1 className="title-text">{title}</h1>
        <div className="title-underscore"></div>
        {children}
    </form>
  )
}

export const TextInput = ({label, name, placeholder, onBlur, onChange, error}) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input onBlur={onBlur} onChange={onChange} type="text" name={name} placeholder={placeholder}/>
      {error && <small>{error}</small>}
    </div>
  )
}

export const HeadLessTextInput = ({name, placeholder, onBlur, onChange}) => {
  return (
    <div className="input">
      <input onBlur={onBlur} onChange={onChange} type="text" name={name} placeholder={placeholder}/>
    </div>
  )
}

export const SelectInput = ({label, name, placeholder, onBlur, onChange, error, items}) => {
  return (
    <div className="input">
      <label>{label}</label>
      <select onBlur={onBlur} onChange={onChange} name={name} placeholder={placeholder}>
        <option></option>
        {items.map(item => <option key={item} value={item}>{item}</option>)}      
      </select>
      {error && <small>{error}</small>}
    </div>
  )
}

export const HeadLessSelectInput = ({name, placeholder, onBlur, onChange, items}) => {
  return (
    <div className="input">
      <select onBlur={onBlur} onChange={onChange} name={name} placeholder={placeholder}>
        <option></option>
        {items.map(item => <option key={item} value={item}>{item}</option>)}      
      </select>
    </div>
  )
}

export const InputGrid = ({children}) => {
  return (
    <div className="input-grid">
      {children}
    </div>
  )
}

export const Separator = () => {
  return <hr className="separator"/>
  
}

export const CompoundInput = ({children, name, error}) => {
  return (
    <div className="input">
      <label>{name}</label>
      <div className="input-grid">
        {children}
      </div>
      {error && <small>{error}</small>}
    </div>
  )
}

export const SubmitButton = ({text}) => {
  return <button className="submit-button" type="submit">{text}</button>
}



export default Form