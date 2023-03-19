import { useState } from 'react'

export const useForm= (initialForm, validateForm, actionSubmit) => {
  const[form, setForm] = useState(initialForm);
  const[errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
  }

  const handleBlur = (e) => {
    setErrors(validateForm(form));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = validateForm(form);
    if (Object.keys(validation).length === 0) {
      actionSubmit(form)
    }
    setErrors(validation);
  }

  return{
    form, 
    errors, 
    handleChange, 
    handleBlur,
    handleSubmit}
}
