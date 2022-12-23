import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../../products'
import Product from "./Product"

function HomeScreen() {
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((el)=>(
                <Col sm={12} md={6}lg={4} xl={3}>
               <Product product={el}/>
                </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen