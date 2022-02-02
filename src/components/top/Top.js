import React from 'react';
import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./style.css"

function Top() {
  return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Anshika</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="my-2 my-lg-0">
                            <Nav.Link target="_blank" href="https://drive.google.com/folderview?id=100Qd1po3s7yWivVTSRwxEDf285YN5WBB">About me</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
    </Navbar>
    )
}

export default Top;
