import { Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {

    return (
        <footer className="page-footer font-small blue pt-4">
            <Container>
                <Row>
                    <div className="col-md-6 mt-md-0 mt-3">
                        <img src={process.env.PUBLIC_URL +"/littlelemon-logo.png"} width={250}/>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Contact Info</h5>
                        <p>
                            1662 Pringle Drive<br/>
                            Chicago, IL 60631<br/>
                            United States<br/>

                            <br/>
                            <strong>Phone:</strong> +1 312-375-7584<br/><br/>
                            <strong>Email:</strong> info@littelemon.com
                        </p>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled ">
                            <li><a href="https://twitter.com/?lang=en">Twitter</a></li>
                            <li><a href="https://www.facebook.com/">Facebook</a></li>
                            <li><a href="https://www.instagram.com/">Instagram</a></li>
                        </ul>
                    </div>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <Nav.Link as={Link} to="/">Little Lemon </Nav.Link>
            </div>
        </footer>
    )
};

export default Footer;
