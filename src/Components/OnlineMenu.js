import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Row } from 'react-bootstrap';
import classes from './OnlineMenu.module.css';
import { Link } from 'react-router-dom';

const OnlineMenu = () => {

    const imageHeight = 250;
    const cartName = "Add";

    const addToACartIcon = <FontAwesomeIcon icon={faCartPlus} />


    return (
        <Container className={classes.onlineMenuContainer}>
            <h1 className={classes.center}>Online Menu</h1>
            <Row>
                <Col className={classes.parentMenuItem}>
                    <Card className={classes.menuItem}>
                        <Card.Img variant="top" src="/specials/greek-salad-special.jpeg" height={imageHeight}/>
                        <Card.Body>
                            <Card.Title><span>Greek Salad</span> <span className={classes.specialsPrices}>$12.99</span></Card.Title>
                            <Card.Text>
                                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style
                                feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </Card.Text>
                            <Link to="/order-online">
                                <a className={classes.addToCartElement}>{cartName} {addToACartIcon}</a>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={classes.parentMenuItem}>
                    <Card  className={classes.menuItem}>
                        <Card.Img variant="top" src="/specials/bruchetta-special.jpeg" height={imageHeight}/>
                        <Card.Body>
                            <Card.Title><span>Bruchetta</span> <span className={classes.specialsPrices}>$5.99</span></Card.Title>
                            <Card.Text>
                                Our Bruschetta is made from grilled bread that has been smeared with
                                garlic and seasoned with salt and olive oil.
                            </Card.Text>
                            <Link to="/order-online">
                                <a className={classes.addToCartElement}>{cartName} {addToACartIcon}</a>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className={classes.parentMenuItem}>
                    <Card  className={classes.menuItem}>
                        <Card.Img variant="top" src="/specials/lemon-dessert-special.jpeg" height={imageHeight}/>
                        <Card.Body>
                            <Card.Title><span>Lemon Dessert</span> <span className={classes.specialsPrices}>$5.00</span></Card.Title>
                            <Card.Text>
                                This comes stright from grandma's recipe book, every last ingredient has been
                                sourced and is as authentic as can be imagined.
                            </Card.Text>
                            <Link to="/order-online">
                                <a className={classes.addToCartElement}>{cartName} {addToACartIcon}</a>
                            </Link>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>

    );
};

export default OnlineMenu;
