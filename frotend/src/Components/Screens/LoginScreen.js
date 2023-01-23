
import {useEffect, useState} from 'react'
import { Link, redirect } from 'react-router-dom'
import { Form,Button,Row,Col, FormLabel, FormControl,FormGroup } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import{login} from "../Actions/userAction"
import FormContainer from '../FormContainer'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function LoginScreen() {

        const navigate = useNavigate()
        const[loca] = useSearchParams()
        const [location2] = [...loca]
         console.log(location2,"qunty-Cs")
       //  console.log(id,"ids-cartScreen")
  
const redirect =location2?location2:"/"

        const[email,setEmail] = useState('')
        const[password,setPassword] = useState('')
        const dispatch = useDispatch()
        const userLogin = useSelector(state=>state.userLogin)
        const{loading, error, userInfo} = userLogin
 
        useEffect(()=>{
          if(userInfo)navigate(redirect)

        },[navigate,userInfo,redirect])

        const submitHandler=(e)=>{
          console.log(email,password)
          console.log(typeof(password))
                    e.preventDefault()
                    dispatch(login(email,password))
        }
  return (
    <FormContainer>
        <h1>Sign In</h1>
        {error&&(<h1>'Error'</h1>)}
        {loading &&(<h1>Loading</h1>)}
        <Form onSubmit={submitHandler}>
                <FormGroup controlId='email'>
                <FormLabel>Email Address</FormLabel>
                <FormControl
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                >
                </FormControl>
                </FormGroup>

                <FormGroup controlId='password'>
                <FormLabel>Password</FormLabel>
                <FormControl
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                >
                </FormControl>
                </FormGroup>

                <Button
                type='submit'
                variant='primary'
                >Sign In
                </Button>
                </Form>

                 <Row
                 className='py-3'
                 >
                        <Col>
                        New Customer?<Link to={redirect?`/register?redirect=${redirect}` :`/register`}>Register</Link>
                        </Col>

                 </Row>
                
                </FormContainer>
  )
}

export default LoginScreen