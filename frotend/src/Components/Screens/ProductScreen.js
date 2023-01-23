import React from 'react'
import {useEffect,useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import { Link } from 'react-router-dom';
import { Col ,Row,Image,ListGroup, ListGroupItem, Button, FormControl} from 'react-bootstrap';
import Rating from "./Rating"
import { listProductDetails } from '../Actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


function ProductScreen() {
        const userLogin = useSelector(state=>state.userLogin)
        const{userInfo} = userLogin


      const {id} = useParams()
      const navigate= useNavigate()

      const[qty,setQty] = useState(1)
    
        const dispatch=useDispatch()
        const productDetails = useSelector(state=>state.productDetails)
        const{loading,error,product} = productDetails
        console.log(product,"proDetails")


        useEffect(()=>{
        dispatch(listProductDetails(id))
        },[dispatch,id])

        const addToCartHandler=()=>{
                
           if(userInfo)navigate(`/cart/${id}?qty=${qty}`)
           else alert('First LOGIN and come back here')
        }

  return (
        <>
        <Link className="btn btn-dark my-3" to="/">Go Back Home</Link>
        {loading?<h1>Loading..</h1>:error?<h1>error</h1>:
        (<Row>
              <Col md={6}>
                      <Image src={product.image} alt={product.name} fluid/>
              </Col>
              <Col md={3}>
                      <ListGroup variant="flush">
                              <ListGroup.Item>
                                      <Rating
                                      value={product.rating}
                                      text={`${product.numReviews} reviews`}
                                      />
                                      </ListGroup.Item>
                                      <ListGroup.Item>
                                      Price: ${product.price}
                                      </ListGroup.Item>
                                      <ListGroup.Item>
                                     Description: ${product.description}
                                      </ListGroup.Item>

                      </ListGroup>
              </Col>
              <Col md={3}>
                      <ListGroup variant="flush">
                              <ListGroupItem>
               <Row>
                      <Col>Price:</Col>
                      <Col><strong>${product.price}</strong></Col>
               </Row>
                              </ListGroupItem>
                              <ListGroupItem>
               <Row>
                      <Col>Status:</Col>
                      <Col>
                      {product.countInStock>0?"In Stock":"Out Of Stock"}
                      </Col>
               </Row>
                              </ListGroupItem>
                {product.countInStock>0 && (
                        <ListGroup.Item>
                          <Row>
                                <Col>Quantity</Col>
                                <Col>
                                <FormControl 
                                as="select" 
                                value={qty} 
                                onChange={(e)=>setQty(+e.target.value )}>
                                {
                                [...Array(product.countInStock).keys()].map((el)=>(
                                                <option key={el+1} value={el+1}>
                                                        {el+1}
                                                </option>
                                        ))
                                }
                                </FormControl>
                                </Col>
                                
                                </Row>      
                        </ListGroup.Item>
                )}

                              <ListGroupItem>
                        <Button 
                        onClick={addToCartHandler}
                        className='btn-block' 
                        type="button" 
                        disabled={product.countInStock===0}>
                        Add To Cart</Button>
                              </ListGroupItem>
                      </ListGroup>
              </Col>
        </Row>)
        }
        
          
        </>
  )
      }

export default ProductScreen