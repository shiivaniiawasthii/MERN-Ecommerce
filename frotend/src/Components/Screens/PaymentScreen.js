

import React,{useState} from 'react'
import {Form,Button, FormGroup, FormLabel, FormControl,Col} from "react-bootstrap"
import { useDispatch,useSelector} from 'react-redux'
import {savePaymentMethod} from "../Actions/cartAction"
import {useNavigate} from "react-router-dom"
import CheckoutSteps from '../CheckoutSteps'

function PaymentScreen() {

        
        const dispatch=useDispatch()
        const navigate=useNavigate()
        
        const cart=useSelector(state=>state.cart)
        const {shippingAddress} = cart

        if(!shippingAddress){
                navigate("/shipping")
        }

        const [PaymentMethod,setPaymentMethod] = useState("PhonePay")
      

        const submitHandler=(e)=>{
                e.preventDefault()
                dispatch(savePaymentMethod({PaymentMethod}))
                navigate("/placeorder")
                
        }
  return (
    <div>
        <h1>Payment Method</h1>
        <CheckoutSteps step1 step2 step3/>
        <Form onSubmit={submitHandler}>
         <Form.Group>
                <FormLabel as="legend">Select Method</FormLabel>
        
         <Col>
         <Form.Check type="radio"
                     label="PhonePay or Credit Card"
                     id="PhonePay"
                     name="PaymentMethod"
                     value="PhonePay"
                     checked
                     onChange={(e)=>(setPaymentMethod(e.target.value))}
         ></Form.Check>

<Form.Check type="radio"
                     label="Stripe"
                     id="Stripe"
                     name="PaymentMethod"
                     value="Stripe"
                     checked
                     onChange={(e)=>(setPaymentMethod(e.target.value))}
         ></Form.Check>
         </Col>
         </Form.Group>
         <Button
         type="submit"
         variant="primary"
         >Continue</Button>
        </Form>
    </div>
  )
}

export default PaymentScreen