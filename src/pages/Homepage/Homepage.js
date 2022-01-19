import React from 'react';
import Brands from '../Brands/Brands';
import Motive from '../Motive/Motive';
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
        </div>
    );
};

export default Homepage;