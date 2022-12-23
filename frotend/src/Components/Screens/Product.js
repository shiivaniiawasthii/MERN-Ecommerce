import React from 'react'
import { Card} from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom';


function Product({product}) {
  return (
   <Card className='my-3 p-3 rounded'>
     <Link to={`/product/${product._id}`}>
        <Card.Img  src={product.image} variant="top"/>
         
     </Link>

     <Card.Body as="div">
     <Link to={`/product/${product._id}`}>
        <Card.Title as="h5">
          <strong>{product.name}</strong>
          </Card.Title> 
        </Link>
     </Card.Body>
     <Card.Text as="h3">
      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
    
     </Card.Text>
     <Card.Text as="h4">${product.price}</Card.Text>
   </Card>
  )
}

export default Product