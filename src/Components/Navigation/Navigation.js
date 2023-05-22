import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar  key={expand} expand={expand} className="mb-3 sticky-top navbar">
          <Container fluid>
            <Navbar.Brand href="#">Marcin Łogwinowicz - CV</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link><Link to="/About">About</Link></Nav.Link>
                <Nav.Link><Link to="/Education">Education</Link></Nav.Link>
                <Nav.Link><Link to="/Experience">Experience</Link></Nav.Link>
                <Nav.Link><Link to="/Skills">Skills</Link></Nav.Link>
                <Nav.Link><Link to="/Projects">Projects</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation;
