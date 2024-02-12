// Navigationbar.js

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Import your custom CSS file

function Navigationbar() {
  return (
    <Navbar expand="lg" className="custom-navbar bg-blue-500 text-white">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-xl font-bold">
        <img
          src="https://image.shutterstock.com/image-vector/star-seven-creative-branding-icon-260nw-2147596031.jpg"  // Replace with your actual logo image path
          alt="IVA TECHNOS Logo"
          className="d-inline-block align-center"
          width="60"
          height="60"
        />
        {' Stark 7'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="nav-link">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="nav-link">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/cars" className="nav-link">
              Career
            </Nav.Link>
            <Nav.Link as={Link} to="/createpost" className="nav-link">
              Createpost
            </Nav.Link>
            <Nav.Link as={Link} to="/posts" className="nav-link">
              Posts
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/account" className="nav-link">
              Account
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
