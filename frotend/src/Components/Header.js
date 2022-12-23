import React from 'react'
import { Container } from 'react-bootstrap';
// import { Container,row,col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
        <header>
          <Navbar bg="dark"variant='dark' expand="lg" collapseOnSelect>
            <Container>
              <Navbar.Brand href="/">Proshop</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/cart"><i className='fas fa-shopping-cart'>Cart</i></Nav.Link>
                  <Nav.Link href="/login"><i className='fas fa-user'>Sign In</i></Nav.Link>
                   
                </Nav>
                
              </Navbar.Collapse>
              </Container>
          </Navbar>
          </header>
        );
      }
      
      
      export default Header
        
 

