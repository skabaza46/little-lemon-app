import React, { Fragment, useState } from "react"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TimePicker from 'react-bootstrap-time-picker';
import BookingConfirmation from './BookingConfirmation';
import { useFormik } from 'formik';
import { Card, Col, Container, Row } from "react-bootstrap";

import classes from './BookingPage.module.css'
;
const BookingPage = () => {

    const [show, setShow] = useState(false);
    const [reservation, setReservation ] = useState({});


    const handleClose = () => setShow(false);



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

          setReservation((prevState)=> (
            {...prevState, ...values}
          ));
          setShow(true);
        },

        // onChange: (values) => {
        //     alert(values)
        //     const date = new Date(values)
        //     console.log(date)
        // }
      });


    //   const handleTimeChange = (values) =>{
    //     console.log(values);

    //     setReservation((prevState)=> (
    //         {...prevState, ...{}}
    //       ));
    //   }

    return (
        <Container>
                <BookingConfirmation show={show} handleClose={handleClose} reservation={reservation}/>
                <Row className="mb-3 ">
                    <Card >
                        <Form onSubmit={formik.handleSubmit} >
                        <h1 className={classes.center}>Reservation</h1>
                        <Col>

                            <Form.Group className="mb-3" controlId="reservation_date_time">
                                    <Form.Label>Reservation Date </Form.Label>
                                    <Form.Control  type="datetime-local" onChange={formik.handleChange}
                                    value={formik.values.reservation_date_time}
                                    required
                                />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="number_of_diners">
                                <Form.Label>Number of Diners</Form.Label>
                                <Form.Control type="number" placeholder="Number of Diners"  onChange={formik.handleChange}
                                value={formik.values.number_of_diners}
                                max={20}
                                min={1}
                                required
                            />
                            </Form.Group>
                        </Col>

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


export default BookingPage;