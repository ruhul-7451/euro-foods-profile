import React from 'react';
import { Container } from 'react-bootstrap';
import Brands from '../Brands/Brands';
import Motive from '../Motive/Motive';

const CompanyDetails = () => {
    return (
        <div>
            <Motive />
            <br />
            <Container className='p-5' style={{ backgroundColor: "#FFF6ED" }}>
                <h1 className='text-center'>Company Overview</h1> <hr />
                <p>
                    Established in 1991 Euro Foods Group has become one of the leading manufacturers, processors and distributors of frozen, ambient and food packaging. This includes a vast range of products such as seafood, meat, poultry, vegetables and many new products like our range of finger food, snacks and deserts.
                    <br />
                    <strong>Mission:</strong> <br />
                    With continued innovation, Euro Foods strives to achieve excellence within the Asian food industry. Being the largest UK supplier to restaurants, supermarkets and caterers, we fulfill a responsibility to develop our technology, products and working methods, to correspond with the fast-paced and progressing market our clients drive.
                    <br />
                    With a 30 year history of steady, successful growth, supporting a base of 3000+ current customers and 2,000+ employees working hard around the globe, Euro Foods has established well known brands, such as Crown Farms, Zoy and Rohim.
                </p>
            </Container>
            <br />
            <Brands />
        </div>
    );
};

export default CompanyDetails;