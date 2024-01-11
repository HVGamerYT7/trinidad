import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './barra-nav.css'

const Barra_nav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='justify-content-center'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=''/>
        <Navbar.Collapse id="basic-navbar-nav" className='' >
          <Nav className="text-center mx-auto">
            <Nav.Link href="#home" className='link'>Inicio</Nav.Link>
            <Nav.Link href="#nosotros" className='link'>Nosotros</Nav.Link>
            <Nav.Link href="#turismo" className='link'>Turismo</Nav.Link>
            <Nav.Link href="#contacto" className='link'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Barra_nav