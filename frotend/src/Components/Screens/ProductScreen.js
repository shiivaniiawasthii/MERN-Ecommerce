import React from 'react'
import products from '../../products';
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom';
import { Col ,Row,Image,ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import Rating from "./Rating"
function ProductScreen() {
        // to use id
       const {id} = useParams()
        const product = products.find(p=>p._id=== id)

  return (
        <>
        <Link className="btn btn-dark my-3" to="/">Go Back Home</Link>
          <div>{product.name}</div>
          <Row>
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
                                <ListGroupItem>
<Button className='btn-block' type="button" disabled={product.countInStock===0}>Add To Cart</Button>
                                </ListGroupItem>
                        </ListGroup>
                </Col>
          </Row>
        </>
      
  
  )
}

export default ProductScreen