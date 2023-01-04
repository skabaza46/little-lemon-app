import { Container, Row, Card, Col, Form } from "react-bootstrap";
import { useFormik } from 'formik';
import classes from './OnlineOrder.module.css';

const OnlineOrder = () => {

    const formik = useFormik({
        initialValues: {
            reservation_date_time: '',
            number_of_diners: '',
            first_name: '',
            last_name: '',
            email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));

        },
      });

    return (
        <Container className={classes.onlineOrderContainer}>
                <Row className="mb-3">
                    <Card >
                        <Form onSubmit={formik.handleSubmit} >
                        <h1 className={classes.center}>Online Order</h1>
                        <Col>
                            <Form.Group className="mb-3" controlId="first_name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name"  onChange={formik.handleChange}
                                value={formik.values.first_name}
                                required
                            />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="last_name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="last_name" placeholder="Last Name"  onChange={formik.handleChange}
                                value={formik.values.last_name}
                                required
                            />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"  onChange={formik.handleChange}
                                value={formik.values.email}
                                required
                            />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                        </Col>
                            <Row>
                                <button type="submit">Submit</button>
                            </Row>
                        </Form>
                    </Card>
                </Row>

        </Container>
    );
};

export default OnlineOrder;