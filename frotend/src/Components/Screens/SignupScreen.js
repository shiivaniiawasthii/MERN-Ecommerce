
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Form,Button,Row,Col, FormLabel, FormControl,FormGroup } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import{register} from "../Actions/userAction"
import FormContainer from '../FormContainer'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function SignupScreen() {

        const navigate = useNavigate()
        const[loca] = useSearchParams()
        const [location2] = [...loca]
         console.log(location2,"qunty-Cs")
       //  console.log(id,"ids-cartScreen")
  
const redirect =location2?location2:"/"
        const[name,setName] = useState('')
        const[email,setEmail] = useState('')
        const[password,setPassword] = useState('')
     

        const dispatch = useDispatch()
        const userRegister = useSelector(state=>state.userRegister)
        const{loading,  userInfo} = userRegister
 
        useEffect(()=>{
          if(userInfo)navigate(redirect)

        },[navigate,userInfo,redirect])

        const submitHandler=(e)=>{
          e.preventDefault()
          if(email===""||password===""||name==="")alert("Enter all the details")
          // console.log(email,password)
          else  {
            alert("Sign Up successful")
            dispatch(register(name,email,password))
          }
        }
  return (
    <FormContainer>
        <h1>Sign Up</h1>
        
        {loading &&(<h1>Loading</h1>)}
        <Form onSubmit={submitHandler}>
                
        <FormGroup controlId='name'>
                <FormLabel>Name</FormLabel>
                <FormControl
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                >
                </FormControl>
                </FormGroup>

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
                >Sign Up
                </Button>
                </Form>

                 <Row
                 className='py-3'
                 >
                        <Col>
                       Have an account?<Link to='/login'>Log In</Link>
                        </Col>

                 </Row>
                
                </FormContainer>
  )
}

export default SignupScreen