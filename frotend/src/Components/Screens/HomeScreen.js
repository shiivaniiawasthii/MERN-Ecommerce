import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {useEffect} from "react";
import Product from "./Product"
import { useSelector,useDispatch } from 'react-redux';
import { listProducts } from '../Actions/productActions';



function HomeScreen() {
  

  const dispatch = useDispatch()
  const productList=useSelector(state=>state.productList)
  const{loading,error,products} = productList
 

    useEffect(()=>{
      dispatch(listProducts())
      },[dispatch])



  return (
    <>
    <h1>Latest Products</h1>
    {loading?<h1>loading</h1>: error?<h3>{error}</h3>:
    (
       <Row>
    {products.map((el)=>(
            <Col key={el._id} sm={12} md={6}lg={4} xl={3}>
           <Product product={el}/>
            </Col>
    ))}
</Row>

    )

   
    }
    
    </>
  )
}

export default HomeScreen