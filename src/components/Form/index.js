import React from 'react'
import "./Form.css"
import Button from '../Button'
const Form = ({children, onSubmit, title}) => {
  return (
    <form className="form-component" onSubmit={onSubmit}>
        <h1 className="form-title-text">{title}</h1>
        <div className="form-title-underscore"></div>
        {children}
    </form>
  )
}

export const TextInput = ({label, name, placeholder, onBlur, onChange, error}) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input onBlur={onBlur} onChange={onChange} type="text" name={name} placeholder={placeholder}/>
      {error && <small>{error}</small>}
    </div>
  )
}

export const HeadLessTextInput = ({name, placeholder, onBlur, onChange}) => {
  return (
    <div className="form-input">
      <input onBlur={onBlur} onChange={onChange} type="text" name={name} placeholder={placeholder}/>
    </div>
  )
}

export const SelectInput = ({label, name, placeholder, onBlur, onChange, error, items}) => {
  return (
    <div className="form-input">
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
    <div className="form-input">
      <select onBlur={onBlur} onChange={onChange} name={name} placeholder={placeholder}>
        <option></option>
        {items.map(item => <option key={item} value={item}>{item}</option>)}      
      </select>
    </div>
  )
}

export const InputGrid = ({children}) => {
  return (
    <div className="form-input-grid">
      {children}
    </div>
  )
}

export const Separator = () => {
  return <hr className="form-separator"/>
  
}

export const CompoundInput = ({children, name, error}) => {
  return (
    <div className="form-input">
      <label>{name}</label>
      <div className="form-input-grid">
        {children}
      </div>
      {error && <small>{error}</small>}
    </div>
  )
}

export const SubmitButton = ({text}) => {
  return <Button text={text} type="submit" dimension="full"/>
}



export default Form