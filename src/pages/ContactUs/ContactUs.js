import { faFacebookSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
const facebookLogo = <FontAwesomeIcon icon={faFacebookSquare} />
const LinkedInLogo = <FontAwesomeIcon icon={faLinkedinIn} />

const ContactUs = () => {
    const [state, setState] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        reset();
        setState(true)
        console.log(data)
    };
    return (
        <Container>
            <Row xs={1} lg={2}>
                <Col className='p-5 rounded' style={{ backgroundColor: "#EDF6FF" }}>
                    <h2 className='fs-3 fw-normal text-center'>Wholesale. Quality. Reliability.</h2> <hr />
                    <Form className='mx-auto w-75' onSubmit={handleSubmit(onSubmit)}>
                        <Row xs={1} lg={2}>
                            <Form.Group as={Col} className='mb-3' >
                                <Form.Control type="text" placeholder='First Name' {...register("firstName", { required: true })} />
                            </Form.Group>

                            <Form.Group as={Col} className='mb-3' >
                                <Form.Control type="text" placeholder='Last Name' {...register("lastName", { required: true })} />
                            </Form.Group>
                        </Row>
                        <Row xs={1} lg={2}>
                            <Form.Group as={Col} className='mb-3' >
                                <Form.Control type="email" placeholder='Email' {...register("email", { required: true })} />
                            </Form.Group>

                            <Form.Group as={Col} className='mb-3' >
                                <Form.Control placeholder='Phone' {...register("phone", { required: true })} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Control placeholder="Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder='Type your message here' {...register("message", { required: true })} />
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">
                            Send Message
                        </Button>
                        {state ? <Alert className='my-3' variant={'success'}>
                            Your message sent successfully!
                        </Alert> : <p></p>}
                    </Form>
                </Col>
                <Col className='fw-light p-5' style={{ backgroundColor: "#EDF6FF" }}>
                    <h6 className='fs-3 fw-light text-secondary'>
                        <a className='text-decoration-none' href="mailto:contact@eurofoods-bd.com">contact@eurofoods-bd.com</a>
                    </h6>
                    <hr />
                    <section>
                        <h6 className='fs-4'>Head Office | Main</h6>
                        <p>EFG Food and Technology Park Llantarnam Park Way, Cwmbran<br />NP44 3GA | +8801710112233</p>
                    </section>
                    <section>
                        <h6 className='fs-4'>Bangladesh | Head Office</h6>
                        <p>Navana Oval Tower (7th Floor), Plot #5, Sonargaon Janapath <br />Dhaka 1230 | +8801710112233</p>
                    </section>
                    <section>
                        <h6 className='fs-4'>London | Branch</h6>
                        <p>Unit 10, IOG Centre, 59-71 River Road, Barking <br />IG11 0DR | +8801710112233</p>
                    </section>
                    <section>
                        <p>
                            <a className='fs-3 text-dark me-2 text-decoration-none' href="https://www.linkedin.com"> {LinkedInLogo} </a>
                            <a className='fs-3 text-dark me-2 text-decoration-none' href="https://www.facebook.com"> {facebookLogo} </a>
                        </p>
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;