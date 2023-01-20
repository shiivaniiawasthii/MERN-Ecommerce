import React from 'react'
import {Button,Row,Col,ListGroup,Image,ListGroupItem} from "react-bootstrap"
import { useDispatch,useSelector } from 'react-redux';
import FormContainer from "../CheckoutSteps"
import CheckoutSteps from '../CheckoutSteps';

function PlaceOrderScreen() {
        const cart = useSelector((state)=>state.cart)
  return (
    <>
    <CheckoutSteps step1 step2 step3 step4/>
    <Row>
        <Col md={8}>
                <ListGroup variant="flush">
                <ListGroupItem>
                        <h2>Shipping</h2>
                        <p>
                                <strong>Address:</strong>
                                {cart.shippingAddress.address},
                                {cart.shippingAddress.city}{' '}
                                {cart.shippingAddress.country}
                        </p>
                </ListGroupItem>
                </ListGroup>
        </Col>
    </Row>
    </>
  )
}

export default PlaceOrderScreen