import React from 'react'
import {Button,Row,Col,ListGroup,Image,
        Card,
        ListGroupItem
}from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux"
import CheckoutSteps from '../CheckoutSteps';
import { Link, useNavigate } from 'react-router-dom';
function PlaceOrder() {
        const navigate=useNavigate()
        const cart=useSelector(state=>state.cart)
        // calculate prices
       const addDecimals=(num)=>{
         return (Math.round(num*100)/100).toFixed(2)
       }

        cart.itemsPrice = addDecimals(cart.cartItems.reduce(
                (acc,item)=>acc+item.price*item.qty,
                0
            ))
            cart.shippingPrice = addDecimals(cart.itemsPrice>100?0:100)
            cart.taxPrice = addDecimals(Number((0.15*cart.itemsPrice).toFixed(2)))
            cart.totalPrice=(Number(cart.itemsPrice)+Number(cart.shippingPrice)+Number(cart.taxPrice)).toFixed(2)
        const placeOrderHandler=()=>{
           alert("Your order is confirmed")
           navigate("/")
        }
  return (
    <>
         <CheckoutSteps step1 step2 step3 step4/>
         <Row>
                <Col md={8}>
                        <ListGroup.Item>
                                <h2>Shipping</h2>
                                <p>
                                        <strong>Address:</strong>
                                        {'  '}{cart.shippingAddress.address}
                                        {' '}{cart.shippingAddress.city}
                                        {' '}{cart.shippingAddress.postalcode}
                                        {' '}{cart.shippingAddress.country}
                                </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                        <strong>Method:</strong>
                                        {'  '}{cart.paymentMethod.PaymentMethod}
                                       
                                </p>
                        </ListGroup.Item>

                        
                        
                        <ListGroup.Item>
                                <h2>Order Items</h2>
                                {/* message-------------------------- */}
                                {cart.cartItems.length===0?<h2>Your Cart Is Empty!</h2>
                                :
                                (<ListGroup variant="flush">
                                        {cart.cartItems.map((item,index) => (
       
                                               <ListGroupItem key={index}>
                                               <Row>
                                               <Col md={1}>
                                                       <Image src={item.image}
                                                       alt={item.name}
                                                       fluid rounded/>
                                               </Col>
                                               <Col>
                                               <Link to={`/product/${item.product}`}>
                                                       {item.name}
                                               </Link>
                                               </Col>
                                               <Col md={4}>
                                               {item.qty} * ${item.price} = ${item.qty} * {item.price}
                                               </Col>
                                               </Row>
                                               </ListGroupItem>
                                                 ))}
                                </ListGroup>
                              )}
                               </ListGroup.Item>
                               </Col>

                               <Col md={4}>
                                <Card>
                                        <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                        <h2>
                                                                Order Summary
                                                        </h2>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                        <Row>
                                                                <Col>Items</Col>
                                                                <Col>${cart.itemsPrice}</Col>
                                                        </Row>
                                                </ListGroup.Item>

                                                <ListGroup.Item>
                                                        <Row>
                                                                <Col>Shipping</Col>
                                                                <Col>${cart.shippingPrice}</Col>
                                                        </Row>
                                                </ListGroup.Item>

                                                <ListGroup.Item>
                                                        <Row>
                                                                <Col>Tax</Col>
                                                                <Col>${cart.taxPrice}</Col>
                                                        </Row>
                                                </ListGroup.Item>

                                                <ListGroup.Item>
                                                        <Row>
                                                                <Col>Total Price</Col>
                                                                <Col>${cart.totalPrice}</Col>
                                                        </Row>
                                                </ListGroup.Item>

                                                <ListGroup.Item>
                                                        <Button type="button"
                                                        className="btn-block"
                                                        disabled={cart.cartItems ===0}
                                                        onClick={placeOrderHandler}
                                                        >Place Order</Button>
                                                </ListGroup.Item>
                                        </ListGroup>
                                </Card>
                               </Col>
         </Row>

    </>
  )
}

export default PlaceOrder