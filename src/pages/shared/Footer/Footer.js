import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const facebookLogo = <FontAwesomeIcon icon={faFacebookSquare} />
const LinkedInLogo = <FontAwesomeIcon icon={faLinkedinIn} />
const twitterlogo = <FontAwesomeIcon icon={faTwitterSquare} />
const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />
const envelop = <FontAwesomeIcon icon={faEnvelope} />
const telephone = <FontAwesomeIcon icon={faPhoneAlt} />

const Footer = () => {
    return (
        <Container className='bg-light'>
            <Row xs={1} md={2} lg={3} className='p-3'>
                <Col className='text-center'>
                    <img className='img-fluid w-50' src="https://i.ibb.co/K2XtQnZ/Euro-Logo-F5.png" alt="" />
                    <p>
                        <a className='fs-4 me-2 text-decoration-none' href="https://www.linkedin.com"> {LinkedInLogo} </a>
                        <a className='fs-4 me-2 text-decoration-none' href="https://www.facebook.com"> {facebookLogo} </a>
                        <a className='fs-4 me-2 text-decoration-none' href="https://www.twitter.com"> {twitterlogo} </a>
                    </p>
                </Col>
                <Col>
                    <h6 className="mb-2 fs-5">About Us</h6>
                    <p className="fw-light">Supply Us</p>
                    <p className="fw-light">Contact Us</p>
                    <p className="fw-light">Careers</p>
                    <p className="fw-light">Terms and Conditions</p>
                </Col>
                <Col>
                    <h6 className="mb-2 fs-5">Euro Foods Group</h6>
                    <p className="fw-light">{mapMarker} Navana Oval Tower (7th Floor), Plot #5, Sonargaon Janapath, Dhaka 1230, Dhaka</p>
                    <p className="fw-light">{envelop} info@eurofoods-bd.com</p>
                    <p className="fw-light">{telephone} Helpline: 01710112233 (Sat-Thur: 09:00am to 5:00pm)</p>
                    <p>&copy; 2022 - All rights reserved by - <span className='text-danger'>Euro Foods</span> <span className='text-success'>Group</span></p>
                </Col>
            </Row>

        </Container >
    );
};

export default Footer;