import React from 'react'
import { Card} from 'react-bootstrap'

function Product({product}) {
  return (
   <Card className='my-3 p-3 rounded'>
     <a href={`/product/${product._id}`}>
        <Card.Img  src={product.image} variant="top"/>
         
     </a>

     <Card.Body as="div">
     <a href={`/product/${product._id}`}>
        <Card.Title as="h5">
          <strong>{product.name}</strong>
          </Card.Title> 
        </a>
     </Card.Body>
     <Card.Text as="h3">
      <div className='my-2'>
        {product.rating} from {product.numReviews} reviews
      </div>
     </Card.Text>
     <Card.Text as="h4">${product.price}</Card.Text>
   </Card>
  )
}

export default Product