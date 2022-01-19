import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';

const shopNow = <FontAwesomeIcon icon={faShoppingBasket} />
const Banner = () => {
    return (
        <Container>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/dfKsHxb/EFG-Banner-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='d-flex justify-content-end align-items-center'>
                        <Button variant='outline-danger' className='me-3 shadow text-light'>Order Now {shopNow} </Button>
                        <Button variant='outline-warning' className='me-3 shadow text-light'>Learn More!</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/f2gfM3V/EFG-Banner-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='d-flex justify-content-end align-items-center'>
                        <Button variant='danger' className='ms-3 shadow'>Masala Bazar</Button>
                        <Button variant='warning' className='ms-3 shadow'>Kukd.com</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/4K9zZVm/EFG-Banner-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='d-flex justify-content-end align-items-center'>
                        <Button variant='outline-light' className='me-3 shadow'>Contact Us</Button>
                        <Button variant='outline-light' className='me-3 shadow'>Supply Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;