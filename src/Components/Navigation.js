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
                <Nav.Link href="">About</Nav.Link>
                <Nav.Link href="">Menu</Nav.Link>
                <Nav.Link href="">Reservations</Nav.Link>
                <Nav.Link href="">Order online</Nav.Link>
                <Nav.Link href="">Login</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
};

export default Navigation;