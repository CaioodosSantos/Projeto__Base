import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div>
      <div id='navber'>
      <Navbar id="navfa" bg="light" variant="primary" className="mb-3" fixed="top">
        <Container>
          <Navbar.Brand href="/home">
          <img
          alt=""
          src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg" 
          width="30"
          height="30"
          className="d-inline-block align-top"
            />{' '}
            Base Telecom
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/instalacaos">Instalações</Link>
            <Link className="nav-link" to="/visitas">Visita técnica </Link>           
            <Link className="nav-link" to="/retiradas">Retirada</Link> 
            <Link className="nav-link" to="/vistorias">Vistoria</Link>
            <Link className="nav-link" to="/adequacaos">Adequação</Link>
            <Link className="nav-link" to="/mudancas">Mudanças(endereço&ponto)</Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    </div>
  )
}

export default Menu