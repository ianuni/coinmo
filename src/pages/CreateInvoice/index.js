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
    <Card width="40">
        <Form onSubmit={handleSubmit} title="Create Invoice">
                
                <SubmitButton text="Create Invoice"/>
            </Form>
    </Card>
  )
}

export default CreateInvoice