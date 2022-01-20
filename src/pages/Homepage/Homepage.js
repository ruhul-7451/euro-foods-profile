import React from 'react';
import Brands from '../Brands/Brands';
import ContactUs from '../ContactUs/ContactUs';
import Motive from '../Motive/Motive';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Banner from '../shared/Banner/Banner';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
            <Motive></Motive>
            <br />
            <Services></Services>
            <br />
            <Brands></Brands>
            <br />
            <Products></Products>
            <br />
            <ContactUs></ContactUs>
        </div>
    );
};

export default Homepage;