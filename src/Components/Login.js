import { Container, Row, Card, Col, Form } from "react-bootstrap";
import { useFormik } from 'formik';
import classes from './Login.module.css';

const LoginPage = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));

        },
      });

    return (
        <Container className={classes.LoginContainer}>
                <Row className="mb-3">
                    <Card >
                        <Form onSubmit={formik.handleSubmit} >
                        <h1 className={classes.center}>Login</h1>
                        <Col>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>E-Mail address</Form.Label>
                                <Form.Control type="email" placeholder="Enter E-Mail"  onChange={formik.handleChange}
                                value={formik.values.email}
                                required
                            />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"  onChange={formik.handleChange}
                                value={formik.values.password}
                                required
                            />

                            </Form.Group>


                        </Col>
                            <Row>
                                <button type="submit">Login</button>
                            </Row>
                        </Form>
                    </Card>
                </Row>

        </Container>
    );
};

export default LoginPage;