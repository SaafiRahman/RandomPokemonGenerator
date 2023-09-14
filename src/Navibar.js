import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
  <Nav className="container-fluid">
    <Nav.Item>
      <Navbar.Brand href="#home">RPGEN</Navbar.Brand>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#home">User List</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>Log Out</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ms-auto">
      <Nav.Link>Hi fname lname!</Nav.Link>
    </Nav.Item>
  </Nav>
</Navbar>


        </div>
    );
}

export default Navibar;