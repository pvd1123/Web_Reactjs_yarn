import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import {FaShoppingCart} from "react-icons/fa"

function Navbar(){
    return(
        <NavbarBs sticky="top" className="bg-white mb-3 shadow-sm">
            <Container className="me-auto">
                <Nav>
                    <Nav.Link to ="/" as ={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to ="/collection" as ={NavLink}>
                        Collection
                    </Nav.Link>
                    <Nav.Link to ="/limitted" as ={NavLink}>
                        Limitted
                    </Nav.Link>
                    <Nav.Link to ="/popular" as ={NavLink}>
                        Popular
                    </Nav.Link>
                </Nav>
                <Button variant="outline-primary">
                    Sign In
                </Button>{' '}

                {/* <Button variant="outlined" startIcon={<FaShoppingCart />}>
                    
                </Button> */}
                

            </Container>
        </NavbarBs>
    )
}


export default Navbar