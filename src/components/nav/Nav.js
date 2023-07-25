import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.css";

const Top = () => {
  return (
    <Navbar className="nav-div">
      <Container>
        <Navbar.Brand as={Link} to="/portfolio">
          Anshika
        </Navbar.Brand>
        <Nav className="my-2 my-lg-0">
          <Nav.Link as={Link} to="/about-me">
            About me
          </Nav.Link>

          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/skills">
            Skills
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Top;
