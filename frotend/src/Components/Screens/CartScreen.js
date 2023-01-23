import React, { useEffect } from 'react'
import{ Link, Navigate, useNavigate, useSearchParams} from "react-router-dom"
import{Row,Col,ListGroup,Image,Form,Button,Card, ListGroupItem ,FormControl} from "react-bootstrap"
import { useParams} from "react-router-dom";
import {addToCart,removeToCart} from "../Actions/cartAction.js";
import { useSelector,useDispatch } from 'react-redux';

function CartScreen() {
const navigate = useNavigate()
  const {id} = useParams()
  const[loca] = useSearchParams()
 const [location2] = [...loca]
//   console.log(location2[1],"qunty-Cs")
//  console.log(id,"ids-cartScreen")
  
const qty = location2?Number(location2[1]):1

const dispatch= useDispatch()
const cart = useSelector((state)=>state.cart)
const{cartItems} = cart
console.log(cartItems)
useEffect(()=>{
  if(id)dispatch(addToCart(id,qty))
},[dispatch,id,qty])

const removeFromCart=(id)=>{
dispatch(removeToCart(id))
}
const checkoutHandler=()=>{
  // navigate("/login?redirect=shipping")
  navigate("/shipping")
}


  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length===0?<h4><Link to="/">Your cart is empty,Go Back!</Link></h4>:(
          <ListGroup variant="flush">
            {cartItems.map(item=>(
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded/>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link> 
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col>
                  <FormControl 
                                as="select" 
                                value={item.qty} 
                                onChange={(e)=>dispatch(addToCart(item.product,+e.target.value))}>
                                {
                                [...Array(item.countInStock).keys()].map((el)=>(
                                                <option key={el+1} value={el}>
                                                        {el+1}
                                                </option>
                                        ))
                                }
                                </FormControl>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light" onClick={()=>
                    removeFromCart(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>

              </ListGroupItem>
           ) )}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
      <ListGroup variant="flush">
          <ListGroupItem>
            <h2>
              Subtotal({cartItems.reduce((acc,item)=> acc+item.qty+1,0)})items
              </h2>
              $
              {cartItems
                .reduce((acc,item)=>acc+item.qty*item.price,0)
                .toFixed(2)
                }
                 </ListGroupItem>
                 <ListGroupItem>
<Button type="button"
className='btn-block'
disabled={
  cartItems.length===0
}
onClick={checkoutHandler}
>
  Proceed To Checkout

</Button>
                 </ListGroupItem>
                </ListGroup>
                </Card>

      </Col>
    </Row>
  )
}

export default CartScreen