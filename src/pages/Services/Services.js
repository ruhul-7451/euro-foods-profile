import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/database.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container style={{ backgroundColor: "#EDF2FF" }}>
            <Row xs={1} md={2} lg={2} className='p-3 d-flex align-items-center'>
                <Col className='text-center'>
                    <img className='img-fluid w-50' src="https://i.ibb.co/pQLHn1b/supply-Chain.png" alt="" />
                </Col>
                <Col className='text-center'>
                    <h1 className='fs-1'>What We Do.</h1> <hr />
                    <p className='p-3 mb-0'>
                        We were founded in 1991 and have grown to become the UK's largest supplier to the Asian food market, with a passion for high quality seafood, meat, poultry, vegetables and desserts. <br />We manage supplies and stock foods from various places and then process them for delivering around the globe and reach them to the right destination as one is expected to have a great dine to enjoy the food.
                    </p>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4 p-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;