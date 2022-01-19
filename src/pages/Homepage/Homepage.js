import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Banner from '../shared/Banner/Banner';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
            <Container className='bg-light'>
                <Row xs={1} md={2} lg={2}>
                    <Col className='p-5'>
                        <h1 className='text-center fw-light' style={{ fontSize: "55px", fontFamily: "revert" }}>Wholesale. Quality. Reliability.</h1>
                    </Col>
                    <Col>
                        <p className='fs-5 fw-light text-center p-5'> Frozen food processing and delivering around the globe ensuring high quality so you can dine or takeaway. <br /> <Button className='mt-3' variant='outline-dark'>Learn More</Button> </p>

                    </Col>
                </Row>
            </Container>
            <br />
        </div>
    );
};

export default Homepage;