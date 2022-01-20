import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Products = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container className='p-5' style={{ backgroundColor: "#FFF6ED" }}>
            <Row xs={1} md={2} className='d-flex align-items-center justify-content-center'>
                <Col className='text-center'>
                    <Slider {...settings}>
                        <img className='img-fluid w-75' src="https://i.ibb.co/x3Dp5Qd/Finger-Food-M1.jpg" alt="finger food" />
                        <img className='img-fluid w-75' src="https://i.ibb.co/nmb4rYD/Frozen-Sea-Food-M2.jpg" alt="frozen sea food" />
                        <img className='img-fluid w-75' src="https://i.ibb.co/xs41BK4/Fresh-Water-Fishes-M3.jpg" alt="fresh water fishes" />
                        <img className='img-fluid w-75' src="https://i.ibb.co/F3FVpt9/Frozen-Veges-M4.jpg" alt="frozen vegetables" />
                        <img className='img-fluid w-75' src="https://i.ibb.co/x3Dp5Qd/Finger-Food-M1.jpg" alt="finger food" />
                        <img className='img-fluid w-75' src="https://i.ibb.co/nmb4rYD/Frozen-Sea-Food-M2.jpg" alt="frozen sea food" />
                        <img className='img-fluid w-75' src="https://i.ibb.co/xs41BK4/Fresh-Water-Fishes-M3.jpg" alt="fresh water fishes" />
                        <img className='img-fluid w-75' src="https://i.ibb.co/F3FVpt9/Frozen-Veges-M4.jpg" alt="frozen vegetables" />
                    </Slider>
                </Col>
                <Col className='text-center'>
                    <h1 className='fs-1 mt-4'>Our Products</h1> <hr />
                    <h2 className='text-center fw-light'>Order online from our sites</h2>
                </Col>
            </Row>

            <Row xs={1} md={2} lg={3} className='text-center bg-warning d-flex align-items-center justify-content-between g-4 p-4 mt-5 rounded'>
                <Col>
                    <a href="https://www.kukd.com/"><img className='img-fluid' src="https://i.ibb.co/x6bBCvy/kukd-logo.png" alt="" /></a>
                </Col>
                <Col>
                    <a href="https://www.masalabazaar.com.bd/"><img className='img-fluid' src="https://i.ibb.co/9c20fbB/mbbd.png" alt="" /></a>
                </Col>
                <Col>
                    <a href="https://www.eurofoodsgroup.co.uk/"><img className='img-fluid' src="https://i.ibb.co/LvNDtPh/EFGlogo.png" alt="" /></a>
                </Col>
            </Row>
        </Container>

    );
};

export default Products;