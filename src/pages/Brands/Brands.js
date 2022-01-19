import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Brands = () => {
    return (
        <Container className='bg-light'>
            <Row xs={1} md={2} lg={2}>
                <Col className='p-5'>
                    <h1 className='text-center fw-light' style={{ fontSize: "55px", fontFamily: "revert" }}>Brands we own.</h1>
                </Col>
                <Col className='d-flex align-items-center justify-content-between'>
                    <Row xs={2} md={3} className='g-4 p-4'>
                        <Col className='shadow'>
                            <img className='img-fluid' src="https://i.ibb.co/TT6XT33/Euro-UKLogo.jpg" alt="" />
                        </Col>
                        <Col className='shadow'>
                            <img className='img-fluid' src="https://i.ibb.co/c1mFFR2/crown-Farm-Logo.jpg" alt="" />
                        </Col>
                        <Col className='shadow'>
                            <img className='img-fluid' src="https://i.ibb.co/wwsq4YH/masal-Bazaar.png" alt="" />
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Brands;