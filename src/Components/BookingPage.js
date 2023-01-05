import React, {useState, useEffect } from "react"
import Form from 'react-bootstrap/Form';
import BookingConfirmation from './BookingConfirmation';
import { useFormik } from 'formik';
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { fetchAPI } from "../utils/api-test";
import { range } from "../utils/range";
import classes from './BookingPage.module.css';
import moment from "moment/moment";

const BookingPage = () => {
    const [ initializeTimes, setInitializeTimes] = useState([]);
    const [ reservedTimes , setReservedTimes] = useState([]);
    const [ reservationExists, setReservationExists ] = useState(true);
    const [ selectedReservation, setSelectedReservation ] = useState(null);

    const [show, setShow] = useState(false);
    const [reservation, setReservation ] = useState({});

    const handleClose = () => setShow(false);


    const formik = useFormik({
        initialValues: {
            reservation_date: '',
            reservation_time: '',
            number_of_diners: '',
            first_name: '',
            last_name: '',
            email: '',
        },
        onSubmit: (values, { resetForm }) => {
          setReservation((prevState)=> (
            {...prevState, ...values}
          ));

          const {reservation_date, reservation_time} = values;
          const reservationHash = (`${reservation_date}-${reservation_time}`);

          const reservationExists = reservedTimes.filter((hash)=> hash === reservationHash);

          if (reservationExists.length === 0){

            setSelectedReservation(null);
            setReservationExists(false);

            setShow(true);

            const copyReservedTimes = [...reservedTimes];

            copyReservedTimes.push(reservationHash);

            setReservedTimes(copyReservedTimes);

            resetForm();
            // Reset selected reservation timeslot
            document.getElementById('reservation_time').value = "";
            document.getElementById('occasion').value = "";
            document.getElementById('number_of_diners').value = "0";


          }else{
            setReservationExists(true);
            setSelectedReservation(reservationHash);

          }

        },
      });


    useEffect(()=>{
        const date = new Date();
        const apiData = fetchAPI(date);
        const newData = apiData.map((time)=>{
            const time_ = moment(time, "h:mm A").format("hh:mm A");
            return time_;
        })
        setInitializeTimes(newData)


        const timer = setTimeout(function() {
            setSelectedReservation(null);
            setReservationExists(false);
        }, 3000);


        return () => {
            clearTimeout(timer);
          };

    },[reservationExists, selectedReservation])

    const showError = reservationExists === true && selectedReservation !== null;

    return (
        <Container className={classes.bookingParent}>

                <BookingConfirmation show={show} handleClose={handleClose} reservation={reservation}/>
                <Row className="mb-3 ">

                    <Card >
                        <Form onSubmit={formik.handleSubmit} >

                        <h1 className={classes.center}>Reservation</h1>
                        <Col>
                            <Form.Group className="mb-3" controlId="reservation_date">
                                    <Form.Label>Reservation Date </Form.Label>
                                    <Form.Control  type="date" onChange={formik.handleChange}
                                    value={formik.values.reservation_date}
                                    required
                                />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="reservation_time">
                                <Form.Label>Reservation Time</Form.Label>
                                <Form.Select id="reservation_time" onChange={formik.handleChange} required>
                                    <option key="0" value="">Select Time</option>
                                {
                                     initializeTimes.map((time)=>{
                                        return <option value={time} key={time} >{time}</option>
                                    })
                                }
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="occasion">
                                <Form.Label>Occasion</Form.Label>
                                <Form.Select id="occasion" onChange={formik.handleChange} required>
                                    <option value="">Select Occasion</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Anniversary">Anniversary</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="number_of_diners">
                                <Form.Label>Number of Diners</Form.Label>
                                <Form.Select id="number_of_diners" onChange={formik.handleChange} required>
                                    <option value="0" key="0">No. of Diners</option>
                                    {range(1,10).map((diner)=>{
                                        if (diner === 1){
                                            return <option value={diner} key={diner}>{diner}-Diner</option>
                                        }
                                        return <option value={diner} key={diner}>{diner}-Diners</option>
                                    })}

                                </Form.Select>
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
                                { showError && <Alert variant='danger'>Reservation <strong>{selectedReservation}</strong> already taken !</Alert>}

                                <button type="submit">Submit</button>
                            </Row>
                        </Form>
                    </Card>
                </Row>

        </Container>
    );
};


export default BookingPage;