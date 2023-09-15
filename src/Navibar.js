import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar(props) {
const [loggedin, setLoggedin] = useState(false);
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
  <Nav className="container-fluid">
    <Nav.Item className='px-2'>
      <Navbar.Brand href="#home">RPGEN</Navbar.Brand>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="#home">PokeHistory</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ms-auto">
    <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              { !loggedin ? <NavDropdown.Item href="#action/3.1.1">Sign in</NavDropdown.Item> : <NavDropdown.Item href="#action/3.1.2">Log out</NavDropdown.Item>}
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            </NavDropdown>
    </Nav.Item>
  </Nav>
</Navbar>


        </div>
    );
}

export default Navibar;