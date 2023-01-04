import { Container, Row, Col , Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import classes from './Highlights.module.css';

const Heighlights = (props) => {
    const imageHeight = 250;

    const orderADeliveryElement = <FontAwesomeIcon icon={faShippingFast} />
    const navigate = useNavigate();

    const onlineOrder = () => {

        navigate('/menu')
    }

    return (
        <Container className={classes.parent}>
            <Row className={classes.weeksSpecials}>
                <Col>
                    <h3>This Weeks Specials!</h3>
                </Col>
                <Col>
                    <button className={classes.floatRight} onClick={onlineOrder}>Online Menu</button>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col className={classes.parentSpecialsItem}>
                        <Card className={classes.specialsItem}>
                            <Card.Img variant="top" src="/specials/greek-salad-special.jpeg" height={imageHeight}/>
                            <Card.Body>
                                <Card.Title><span>Greek Salad</span> <span className={classes.specialsPrices}>$12.99</span></Card.Title>
                                <Card.Text>
                                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style
                                    feta cheese, garnished with crunchy garlic and rosemary croutons.
                                </Card.Text>
                                <a className={classes.orderADelivery}>Order a delivery {orderADeliveryElement}</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className={classes.parentSpecialsItem}>
                        <Card  className={classes.specialsItem}>
                            <Card.Img variant="top" src="/specials/bruchetta-special.jpeg" height={imageHeight}/>
                            <Card.Body>
                                <Card.Title><span>Bruchetta</span> <span className={classes.specialsPrices}>$5.99</span></Card.Title>
                                <Card.Text>
                                    Our Bruschetta is made from grilled bread that has been smeared with
                                    garlic and seasoned with salt and olive oil.
                                </Card.Text>
                                <a className={classes.orderADelivery}>Order a delivery {orderADeliveryElement}</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className={classes.parentSpecialsItem}>
                        <Card  className={classes.specialsItem}>
                            <Card.Img variant="top" src="/specials/lemon-dessert-special.jpeg" height={imageHeight}/>
                            <Card.Body>
                                <Card.Title><span>Lemon Dessert</span> <span className={classes.specialsPrices}>$5.00</span></Card.Title>
                                <Card.Text>
                                    This comes stright from grandma's recipe book, every last ingredient has been
                                    sourced and is as authentic as can be imagined.
                                </Card.Text>
                                <a className={classes.orderADelivery}>Order a delivery {orderADeliveryElement}</a>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};

export default Heighlights;