import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import carsam2 from "../Images/carsam2.jpg"



const Navbaar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" >

       
  <Container>
  
  <img
          alt=""
          src={carsam2}
          width="80"
          height="70"
          className="d-inline-block align-top"
        />
    <Navbar.Brand href="#home">CAR Luxury</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav-items">
      <NavLink exact to="/CarrrLuxury" className="nav-links" >Home</NavLink>
      
      <NavLink exact to="/carForSell" className="nav-links" >Cars For Sell</NavLink>
      <NavLink exact to="/service-repair" className="nav-links" >Service and Repair</NavLink>
      <NavLink exact to="/sellyourcar" className="nav-links" >Sell Your Car</NavLink>
      <NavLink exact to="/log-in" className="nav-links" >Signin/Login</NavLink>
       
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbaar