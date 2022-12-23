import React from 'react'
import { Container } from 'react-bootstrap';
// import { Container,row,col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// here is no achor tag so we will use LinkContainer
import { LinkContainer} from 'react-router-bootstrap';
function Header() {
 
  return (
        <header>
          <Navbar bg="dark"variant='dark' expand="lg" collapseOnSelect>
            <Container>
            
              <LinkContainer to="/"><Navbar.Brand >Proshop</Navbar.Brand></LinkContainer>

             
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <LinkContainer to="/cart"><Nav.Link><i className='fas fa-shopping-cart'>Cart</i></Nav.Link></LinkContainer>
                <LinkContainer to="/login"><Nav.Link ><i className='fas fa-user'>Sign In</i></Nav.Link></LinkContainer>

                  
                   
                </Nav>
                
              </Navbar.Collapse>
              </Container>
          </Navbar>
          </header>
        );
      }
      
      
      export default Header