import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import products from '../../products'
import {useState,useEffect} from "react";
import Product from "./Product"
import axios from "axios"

function HomeScreen() {
  const[products,setProducts] =useState([])

  useEffect(()=>{
    console.log("hello")
    const fetchProducts = async()=>{
      const {data} = await axios.get("http://localhost:5000/api/products")
      setProducts(data)
    }
    fetchProducts()
  },[])
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((el)=>(
                <Col key={el._id} sm={12} md={6}lg={4} xl={3}>
               <Product product={el}/>
                </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen