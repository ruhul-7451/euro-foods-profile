import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container>
            <Row xs={1} lg={2}>
                <Col className='p-5 rounded' style={{ backgroundColor: "#EDF6FF" }}>
                    <h2 className='fs-3 fw-normal text-center'>Wholesale. Quality. Reliability</h2> <hr className='bg-secondary' />
                    <p className='text-center'>Get in touch with us today!</p>
                    <Form className='mx-auto w-75'>
                        <Row xs={1} lg={2}>
                            <Form.Group as={Col} className='mb-3' >
                                <Form.Control type="text" placeholder='First Name' />
                            </Form.Group>

                            <Form.Group as={Col} className='mb-3' >
                                <Form.Control type="text" placeholder='Last Name' />
                            </Form.Group>
                        </Row>
                        <Row xs={1} lg={2}>
                            <Form.Group as={Col} className='mb-3' >
                                <Form.Control type="email" placeholder='Email' />
                            </Form.Group>

                            <Form.Group as={Col} className='mb-3' >
                                <Form.Control placeholder='Phone' />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Control placeholder="Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder='Type your message here' />
                        </Form.Group>

                        <Button variant="outline-primary" type="submit">
                            Send Message
                        </Button>
                    </Form>
                </Col>
                <Col className='fw-light p-5' style={{ backgroundColor: "#EDF6FF" }}>
                    <h6 className='fs-5 fw-light text-secondary'>
                        <a className='text-decoration-none' href="mailto:contact@eurofoods-bd.com">contact@eurofoods-bd.com</a>
                    </h6>
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
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;