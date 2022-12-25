import React from 'react'
// import products from '../../products';
import {useEffect} from "react"
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom';
import { Col ,Row,Image,ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import Rating from "./Rating"
// import axios from "axios"
import { listProductDetails } from '../Actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
function ProductScreen() {
        // to use id
       const {id} = useParams()

//        ======================without redux================
//        const[product,setProduct] = useState([])
//        useEffect(()=>{
//         const fetchSingleProducts=async()=>{
//             const res= await axios.get(`http://localhost:5000/api/products/${id}`)
//                setProduct(res.data)
//         }
//         fetchSingleProducts()
//        },[id])

// ===================with redux========================
const dispatch=useDispatch()
const productDetails = useSelector(state=>state.productDetails)
const{loading,error,product} = productDetails
console.log(product,"proDetails")
useEffect(()=>{
dispatch(listProductDetails(id))

},[dispatch,id])



         //        just for frotend fetching
        // const product = products.find(p=>p._id=== id)

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
                              <ListGroupItem>
<Button className='btn-block' type="button" disabled={product.countInStock===0}>Add To Cart</Button>
                              </ListGroupItem>
                      </ListGroup>
              </Col>
        </Row>)
        }
        
          
        </>
  )
      }

export default ProductScreen