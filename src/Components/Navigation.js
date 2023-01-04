import { Container, Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './Navigation.module.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand>
                <Link to="/">
                    <img src={process.env.PUBLIC_URL +"/littlelemon-logo.png"} width={250}/>
                </Link>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="about">About</Nav.Link>
                    <Nav.Link as={Link} to="menu">Menu</Nav.Link>
                    <Nav.Link as={Link} to="booking">Reservations</Nav.Link>
                    <Nav.Link as={Link} to="order-online">Order online</Nav.Link>
                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Navigation;

