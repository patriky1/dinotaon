import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import logo from "../imagens/logo.png";
import { Link } from 'react-router-dom';
import "../App.css"

function NavbarContainer () {
 
    return (
    <>
        <Navbar bg="dark" data-bs-theme="dark" fixed="top" style={{paddingBottom: "1px"}} >
        <Container fluid>
          <a href='#home' className='logo'> <img src={logo} height="40px" width="40px"  alt='...'></img></a>
          
          <Link className='nav-link' style={{color:'white', marginInlineStart:'0.5rem'}} to="/">Dino tá ON</Link>
          <Nav className="me-auto">
            <Link className='nav-link' to="/segundo">A CIDADE</Link>
            <Link className='nav-link' to="/events">EVENTOS</Link>
            <Link className='nav-link' to="/news">NOTICIAS</Link>
            
          </Nav>
        </Container >
      </Navbar>
      </>
    );
  
} 
export default NavbarContainer;
