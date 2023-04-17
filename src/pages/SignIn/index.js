import React, { useState } from 'react'
import "./SignIn.css"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../context/AuthContext';
import Form, {TextInput, SubmitButton} from '../../components/Form';
import Card, { CardContainer } from '../../components/Card';

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
        await logOut();
        await signIn(form);
        console.log("3")
        navigate("/home");
    }
    const {errors, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, actionSubmit)
    const [submitError, setSubmitError] = useState();
    const {signIn, logOut} = useAuth()
    const navigate = useNavigate();
    
    return (
    
    <CardContainer background="var(--color-fade)">
        <Card width="20" height="20" underscore={true} title="Sign In">
            <Form onSubmit={handleSubmit} errorMessage={submitError}>
                <TextInput label="Email" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} error={errors.email}/>
                <TextInput label="Password" name="password" placeholder="Password" onBlur={handleBlur} onChange={handleChange} error={errors.password}/>
                <SubmitButton text="Sign In"/>
            </Form>
            <div className="sign-in-toggle">
                <span>Don't have an account?</span>
                <Link className="sign-in-toggle-link" to="/signup"> Sign Up</Link>
            </div>
        </Card>
    </CardContainer>
  );
}

export default SignIn;
