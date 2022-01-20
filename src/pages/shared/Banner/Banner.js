import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const shopNow = <FontAwesomeIcon icon={faShoppingBasket} />
    let navigate = useNavigate();
    const handleContact = () => {
        navigate("/contact");
    }
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
                        <Button variant='outline-danger' className='me-3 shadow text-light' onClick={() => { window.open("https://www.eurofoods.co.uk/", "_blank") }}>Order Now {shopNow} </Button>
                        <Button variant='outline-warning' className='me-3 shadow text-light' onClick={() => { window.open("https://indd.adobe.com/view/d41ec24d-10b6-4c44-aab1-ef604393f96d", "_blank") }}>Learn More!</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/f2gfM3V/EFG-Banner-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='d-flex justify-content-end align-items-center'>
                        <Button variant='danger' className='ms-3 shadow' onClick={() => { window.open("https://www.masalabazaar.com.bd/", "_blank") }}>Masala Bazar</Button>
                        <Button variant='warning' className='ms-3 shadow' onClick={() => { window.open("https://www.kukd.com/", "_blank") }}>Kukd.com</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/4K9zZVm/EFG-Banner-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='d-flex justify-content-end align-items-center'>
                        <Button variant='outline-light' className='me-3 shadow' onClick={handleContact}>Contact Us</Button>
                        <Button variant='outline-light' className='me-3 shadow' onClick={() => { window.open("https://www.eurofoodsgroup.co.uk/supply-us/", "_blank") }}>Supply Us</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;