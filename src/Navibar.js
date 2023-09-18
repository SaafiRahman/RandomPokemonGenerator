import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import App from './App';
import Login from './Login';

function Navibar() {
const [loggedin, setLoggedin] = useState(false);
    return (
      <Router>
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
  <Nav className="container-fluid">
    <Nav.Item className='px-2'>
      <Navbar.Brand>RPGEN</Navbar.Brand>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to={"/"}>PokeGenerator</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to={"/history"}>PokeHistory</Nav.Link>
    </Nav.Item>
    <Nav.Item className="ms-auto">
    <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              { !loggedin ? <NavDropdown.Item as={Link} to={"/login"}>Sign in</NavDropdown.Item> : <NavDropdown.Item href="#action/3.1.2">Log out</NavDropdown.Item>}
              <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            </NavDropdown>
      </Nav.Item>
    </Nav>
  </Navbar>
        </div>
        <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/history" />
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
        </Router>
    );
}

export default Navibar;