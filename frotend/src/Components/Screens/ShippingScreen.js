import React,{useState} from 'react'
import {Form,Button, FormGroup, FormLabel, FormControl} from "react-bootstrap"
import { useDispatch,useSelector,UseSelector } from 'react-redux'
import {saveShippingAddress} from "../Actions/cartAction"
import {useNavigate} from "react-router-dom"
import CheckoutSteps from '../CheckoutSteps'

function ShippingScreen() {

        
        const dispatch=useDispatch()
        const navigate=useNavigate()
        
        const cart=useSelector(state=>state.cart)
        const {shippingAddress} = cart

        const [address,setAddress] = useState(shippingAddress.address)
        const [city,setCity] = useState(shippingAddress.city)
        const [postalcode,setPostalcode] = useState(shippingAddress.postalcode)
        const [country,setCountry] = useState(shippingAddress.country)
      

        const submitHandler=(e)=>{
                e.preventDefault()
                dispatch(saveShippingAddress({address,city,postalcode,country}))
                navigate("/payment")
                
        }
  return (
    <div>
        <h1>Shipping</h1>
        <CheckoutSteps step1 step2 />
        <Form onSubmit={submitHandler}>
         <FormGroup controlId='address'>
         <FormLabel>Address</FormLabel>
         <FormControl
         type="text"
         placeholder="Enter address"
         value={address}
         onChange={(e)=>setAddress(e.target.value)}
         >
         </FormControl>
         </FormGroup>

         <FormGroup controlId='city'>
         <FormLabel>City</FormLabel>
         <FormControl
         type="text"
         placeholder="Enter City"
         value={city}
         onChange={(e)=>setCity(e.target.value)}
         >
         </FormControl>
         </FormGroup>

         <FormGroup controlId='postalcode'>
         <FormLabel>Postal Code</FormLabel>
         <FormControl
         type="text"
         placeholder="Enter postal Code"
         value={postalcode}
         onChange={(e)=>setPostalcode(e.target.value)}
         >
         </FormControl>
         </FormGroup>

         <FormGroup controlId='country'>
         <FormLabel>Country</FormLabel>
         <FormControl
         type="text"
         placeholder="Enter Country"
         value={country}
         onChange={(e)=>setCountry(e.target.value)}
         >
         </FormControl>
         </FormGroup>

         <Button
         type="submit"
         variant="primary"
         >Continue</Button>
        </Form>
    </div>
  )
}

export default ShippingScreen