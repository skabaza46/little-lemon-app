import { Container, Navbar, Nav} from "react-bootstrap";
import classes from './Navigation.module.css';

const Navigation = () => {

    return (
        <Navbar bg="light" variant="lg" className="justify-content-center">
            <Container>
            <Navbar.Brand href="/">
                <img src={process.env.PUBLIC_URL +"/littlelemon-logo.png"} width={250}/>
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/menu">Menu</Nav.Link>
                <Nav.Link href="/booking">Reservations</Nav.Link>
                <Nav.Link href="/order-online">Order online</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
};

export default Navigation;