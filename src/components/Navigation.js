import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from '../imgs/icon.png'
import {Link} from "react-router-dom"
const Navigation = () => {
    return (
        <Navbar bg="dark" variant = "dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <div class="flex">
              <img class = "ml-4" width = {25} src ={image}></img>
              </div>
             
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                

                <Link to = "/" class = "text-neutral-100 no-underline mr-3 hover:text-red-700">Home</Link>
                <Link to = "/random" class = "text-neutral-100 no-underline mr-3 hover:text-red-700">Pick Random Movie</Link>
        

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navigation