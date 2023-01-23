import React from 'react'
import { Container, NavDropdown } from 'react-bootstrap';
// import { Container,row,col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// here is no achor tag so we will use LinkContainer
import { LinkContainer} from 'react-router-bootstrap';
import {useDispatch,useSelector} from "react-redux"
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { logout } from './Actions/userAction';
function Header() {
const dispatch=useDispatch()
  const userLogin = useSelector(state=>state.userLogin)
  const{userInfo} = userLogin
  console.log(userInfo,14)

  const logoutHandler=()=>{
dispatch(logout())

  }
 
  return (
        <header>
          <Navbar bg="dark"variant='dark' expand="lg" collapseOnSelect>
            <Container>
            
              <LinkContainer to="/"><Navbar.Brand >Plantshop</Navbar.Brand></LinkContainer>

             
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <LinkContainer to={userInfo?`/cart`:'/'}><Nav.Link><i className='fas fa-shopping-cart'>Cart</i></Nav.Link></LinkContainer>
                
                
              {userInfo ? (
          <NavDropdown
          title={userInfo.name}
          id='username'>
          <LinkContainer to='/profile'>
          <DropdownItem> Profile </DropdownItem>
          </LinkContainer>
          <DropdownItem onClick={logoutHandler}>Logout </DropdownItem>
           
          </NavDropdown>
                ) :(<LinkContainer to="/login"><Nav.Link ><i className='fas fa-user'>Sign In</i></Nav.Link></LinkContainer>)}

                  
                   
                </Nav>
                
              </Navbar.Collapse>
              </Container>
          </Navbar>
          </header>
        );
      }
      
      
      export default Header