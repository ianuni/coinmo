import React from 'react'
import Card from '../../components/Card'
import Form, { 
    CompoundInput, 
    HeadLessTextInput, 
    InputGrid, 
    Separator, 
    SubmitButton, 
    TextInput, 
    SelectInput 
} from '../../components/Form';
import { useForm } from '../../hooks/useForm';
const initialForm = {}
const validateForm = () => {

}

function CreateInvoice() {
    const {errors, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, actionSubmit)
    async function actionSubmit(form){
        
    }

  return (
    <Card>
        <Form onSubmit={handleSubmit} title="Create Invoice">
                <InputGrid>
                    <TextInput label="Name" name="name" placeholder="Name" onBlur={handleBlur} onChange={handleChange} error={errors.name}/>
                    <TextInput label="Nif" name="nif" placeholder="Nif" onBlur={handleBlur} onChange={handleChange} error={errors.nif}/>
                    <TextInput label="Phone Number" name="phoneNumber" placeholder="Phone Number" onBlur={handleBlur} onChange={handleChange} error={errors.phoneNumber}/>
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
    </Card>
  )
}

export default CreateInvoice