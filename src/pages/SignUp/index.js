import React from 'react'
import "./SignUp.css"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../context/AuthContext';
import Form, { 
    CompoundInput, 
    HeadLessTextInput, 
    InputGrid, 
    Separator, 
    SubmitButton, 
    TextInput, 
    SelectInput 
} from '../../components/Form';
import { auth } from '../../firebase';
import Card, { CardContainer } from '../../components/Card';

const initialForm = {
    name: "",
    nif: "",
    phoneNumber: "",
    category: "",
    email: "",
    password: "",
    confirmationPassword: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    country: ""
};

const validateForm = (form) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^.{6,}$/;
    let regexNif = /^[0-9]{8,8}[A-Za-z]$/;
    //let regexPhoneNumber = 0;
    
    if(form.name.trim().length === 0){
        errors.name = "Name is required";
    }

    if(form.nif.trim().length === 0){
        errors.nif = "NIF is required";
    } else if (!regexNif.test(form.nif.trim())) {
        errors.nif = "Invalid NIF"
    }

    if(form.phoneNumber.trim().length === 0){
        errors.phoneNumber = "Phone Number is required";
    }

    if(!form.category){
        errors.category = "Category is required";
    }

    if(form.email.trim().length === 0){
        errors.email = "Email is required";
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "Invalid Email"
    }

    if(form.password.length === 0){
        errors.password = "Password is required";
    } else if (!regexPassword.test(form.password.trim())) {
        errors.password = "Password is too short"
    }

    if(form.confirmationPassword.length === 0){
        errors.confirmationPassword = "Confirmation is required";
    } else if (form.password !== form.confirmationPassword) {
        errors.confirmationPassword = "Passwords do not match"
    }

    if(form.address.trim().length === 0){
        errors.address = "Missing address field";
    }

    if(form.postalCode.trim().length === 0){
        errors.address = "Missing address field";
    }

    if(form.city.trim().length === 0){
        errors.address = "Missing address field";
    }

    if(form.country.trim().length === 0){
        errors.address = "Missing address field";
    }
    return errors;
};

const categories = [
    "Person",
    "Transport",
    "Education",
    "Bars and Restaurants",
    "Supermarket",
    "Clothes and Accesories"
]

const SignUp = () => {
    
    const {errors, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, actionSubmit)
    const {signUp} = useAuth()
    const navigate = useNavigate();
    async function actionSubmit(form){
        await signUp(form);
        console.log(auth.currentUser);
        navigate("/home/profile");
    }
    return (
    <CardContainer background="var(--color-fade)">
    
        <Card width="40" height="45" underscore={true} title="Sign Up">
            <Form onSubmit={handleSubmit}>
                <InputGrid>
                    <TextInput label="Name" name="name" placeholder="Name" onBlur={handleBlur} onChange={handleChange} error={errors.name}/>
                    <TextInput label="Nif" name="nif" placeholder="Nif" onBlur={handleBlur} onChange={handleChange} error={errors.nif}/>
                    <TextInput label="Phone Number" name="phoneNumber" placeholder="Phone Number" onBlur={handleBlur} onChange={handleChange} error={errors.phoneNumber}/>
                    <SelectInput label="Category" name="category" placeholder="Category" onBlur={handleBlur} onChange={handleChange} items={categories} error={errors.category}/>
                </InputGrid>
                <Separator/>
                <InputGrid>
                    <TextInput label="Email" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange} error={errors.email}/>
                    <TextInput label="Password" name="password" placeholder="Password" onBlur={handleBlur} onChange={handleChange} error={errors.password}/>
                    <TextInput label="Confirmation" name="confirmationPassword" placeholder="Confirmation" onBlur={handleBlur} onChange={handleChange} error={errors.confirmationPassword}/>
                </InputGrid>
                <Separator/>
                <CompoundInput name="Billing Address" error={errors.address}>
                    <HeadLessTextInput name="address" placeholder="Address" onBlur={handleBlur} onChange={handleChange}/>
                    <HeadLessTextInput name="apartment" placeholder="Suite, Apartment..." onBlur={handleBlur} onChange={handleChange}/>
                    <HeadLessTextInput name="postalCode" placeholder="Postal Code" onBlur={handleBlur} onChange={handleChange}/>
                    <HeadLessTextInput name="city" placeholder="City" onBlur={handleBlur} onChange={handleChange}/>
                    <HeadLessTextInput name="country" placeholder="Country" onBlur={handleBlur} onChange={handleChange}/>
                </CompoundInput>
                <SubmitButton text="Sign Up"/>
            </Form>
            
            <div className="sign-up-toggle">
                <span>Already have an account?</span>
                <Link className="sign-up-toggle-link" to="/signin"> Sign In</Link>
            </div>
    </Card>
    </CardContainer>
  );
}

export default SignUp;
