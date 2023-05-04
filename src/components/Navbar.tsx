import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import Button from 'react-bootstrap/Button';

function Navbar(){
    return(
        <NavbarBs className="bg-white mb-3 shadow-sm">
            <Container className="me-auto">
                <Nav>
                    <Nav.Link to ="/" as ={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to ="/" as ={NavLink}>
                        Collection
                    </Nav.Link>
                    <Nav.Link to ="/" as ={NavLink}>
                        Limitted
                    </Nav.Link>
                    <Nav.Link to ="/" as ={NavLink}>
                        Popular
                    </Nav.Link>
                </Nav>
                <Button>

                </Button>
            </Container>
        </NavbarBs>
    )
}


export default Navbar