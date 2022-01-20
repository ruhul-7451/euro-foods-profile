import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Brands = () => {
    return (
        <Container className='bg-light'>
            <Row xs={1} md={2} lg={2} className='d-flex align-items-center justify-content-between'>
                <Col className='p-5'>
                    <h1 className='text-center fw-light' style={{ fontSize: "55px", fontFamily: "revert" }}>Brands we own.</h1>
                </Col>
                <Col>
                    <Row xs={2} md={3} className='g-4 p-4 d-flex justify-content-between align-items-center'>
                        <Col>
                            <img className='img-fluid' src="https://i.ibb.co/LvNDtPh/EFGlogo.png" alt="" />
                        </Col>
                        <Col>
                            <img className='img-fluid' src="https://i.ibb.co/4YC1QHS/crownfarmslogo.png" alt="" />
                        </Col>
                        <Col>
                            <img className='img-fluid' src="https://i.ibb.co/9c20fbB/mbbd.png" alt="" />
                        </Col>
                        <Col>
                            <img className='img-fluid' src="https://i.ibb.co/x6bBCvy/kukd-logo.png" alt="" />
                        </Col>
                        <Col>
                            <img className='img-fluid' src="https://i.ibb.co/Cs1QGTs/crown-Logo.png" alt="" />
                        </Col>
                        <Col>
                            <img className='img-fluid' src="https://i.ibb.co/p14n5SH/al-rohim.png" alt="" />
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Brands;