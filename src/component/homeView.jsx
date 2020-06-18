import React from 'react';
import Header from '../layout/header';
import BestDeals from '../layout/bestDeals';
import Banner from '../layout/banner';
import Review from '../layout/customReview';
import Care from '../layout/babyCare';
import NewbornCare from '../layout/NewbornCare';
import Product from '../layout/product';
import Footer from '../layout/footer';

const HomeView = () => (
    <div className="">
        <Header />
        <BestDeals />
        <NewbornCare />
        <Product />
        <Care />
        <Banner />
        <Review />
        <Footer />
    </div>
);

export default HomeView;