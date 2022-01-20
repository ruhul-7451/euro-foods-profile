import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { svcImage, svcName, svcDetails } = service;
    return (
        <div>
            <Col>
                <Card className='shadow border-0 text-center'>
                    <Card.Img className='mx-auto' variant="top" src={svcImage} />
                    <Card.Body>
                        <Card.Title>{svcName}</Card.Title>
                        <Card.Text>
                            {svcDetails}
                        </Card.Text>
                        <Button variant="outline-secondary">Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;