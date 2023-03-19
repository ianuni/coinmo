import React from 'react'
import "./SignIn.css"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../context/AuthContext';
import Form, {TextInput, SubmitButton} from '../../components/Form';

const initialForm = {
    email: "",
    password: ""
};

const validateForm = (form) => {
    let errors = {};
    return errors;
};

const SignIn = () => {
    async function actionSubmit(form){
        await signIn(form.email, form.password);

        navigate("/home");
    }
    const {errors, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, actionSubmit)
    const {signIn} = useAuth()
    const navigate = useNavigate();
    
    return (
    
    <div className="container">
        <div className="card-sign-in" >
            <Form onSubmit={handleSubmit} title="Sign In">
                <TextInput label="Email" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} error={errors.email}/>
                <TextInput label="Password" name="password" placeholder="Password" onBlur={handleBlur} onChange={handleChange} error={errors.password}/>
                <SubmitButton text="Sign In"/>
            </Form>
            <div className="toggle">
                <span>Don't have an account?</span>
                <Link className="toggle-link" to="/signup"> Sign Up</Link>
            </div>
        </div>
    </div>
  );
}

export default SignIn;
