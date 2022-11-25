import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AddVertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner'
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <AdvertiseProduct></AdvertiseProduct>

        </div>
    );
};

export default Home;