import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom"
const Navigation = () => {
    return (
        <Navbar bg="dark" variant = "dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img width = {100} src = "https://i.pinimg.com/originals/08/68/dc/0868dcacc7c50ca2c7d35b27be81e5a9.png"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link to = "/" class = "text-neutral-100 no-underline mr-3 hover:text-red-700">Home</Link>
                <Link to = "/movies" class = "text-neutral-100 no-underline mr-3 hover:text-red-700">Movies</Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-danger">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navigation