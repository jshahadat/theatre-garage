import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AddVertiseProduct/AdvertiseProduct';
import Amazing from '../Amazing/Amazing';
import Banner from '../Banner/Banner'
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <AdvertiseProduct></AdvertiseProduct>
            <Amazing></Amazing>

        </div>
    );
};

export default Home;