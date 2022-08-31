import React from "react";
// import { ArrowRight } from "react-bootstrap-icons";
import { Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Container } from "react-bootstrap";



class NavBarMenu extends React.Component {
    render() {
    return (
            <Container fluid id="second-nav" className="ml-0 mb-4">
                 <Navbar bg="light" variant="light" sticky="top" expand="md">
                    <Navbar.Brand className="">
                        <img src="../img/gear.svg" alt=""/>
                        NEIP dashboard
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="mx-5">
                            <Nav.Link href="product">Apply</Nav.Link>
                            <Nav.Link href="http://neip.gov.gh/">Blog</Nav.Link>
                            <NavDropdown title="Pricing">
                                <NavDropdown.Item href="#1">$20</NavDropdown.Item>
                                <NavDropdown.Item href="#2">$49</NavDropdown.Item>
                                <NavDropdown.Item href="#3">$99</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#4">Custome Price</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
       
        );
    }
}

export default NavBarMenu;




               