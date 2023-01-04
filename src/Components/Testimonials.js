import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'
import RegularStar from "./RegularStar";
import classes from './Testimonials.module.css';

const Testimonials = (props) => {

    return (
        <Container>
            <Row className={classes.testimonialsTitle}>

            <h3>Customer reviews</h3>
            <p>What out customers are saying</p>
            </Row>

            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="testimonials/ashley-campbell.jpeg" height={250} style={{borderRadius: "50%"}}/>
                        <Card.Body>
                            <blockquote>
                                "Fusce at laoreet arcu. Nam a mauris sit amet dui maximus tristique ut sit amet est. Sed vitae rutrum libero."
                                <footer>
                                    — <cite className="author">Ashley Compbell</cite>, <cite className="company">My Company</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                        <Card.Footer>
                        <p>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="testimonials/jesse-wallbridge.jpeg"  height={250} style={{borderRadius: "50%"}}/>
                        <Card.Body>
                            <blockquote>
                                    "Maecenas ac ligula tincidunt, blandit est eget, iaculis nunc. Praesent vel tempor tortor. Quisque feugiat feugiat massa."
                                    <footer>
                                        — <cite className="author">Jesse Wallbridge</cite>, <cite className="company">My Company</cite>
                                    </footer>
                            </blockquote>
                        </Card.Body>
                        <Card.Footer>
                        <p>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <RegularStar />
                        </p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="testimonials/andy-chris-testimonial.jpeg" height={250} style={{borderRadius: "50%"}}/>
                        <Card.Body>

                            <blockquote>
                                "Phasellus ut suscipit purus. Donec finibus, metus id semper gravida, erat diam consectetur risus, quis varius eros risus at mi.."
                                <footer>
                                    — <cite className="author">Andy Chris</cite>, <cite className="company">My Company</cite>
                                </footer>
                            </blockquote>

                        </Card.Body>
                        <Card.Footer>
                        <p>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <RegularStar />
                            <RegularStar />
                        </p>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Testimonials;