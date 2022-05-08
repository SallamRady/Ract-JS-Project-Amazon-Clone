import React from 'react';
import MainHeader from "../../components/header/mainHeader";
import SubHeader from "../../components/header/SupHeader";
import Slider from "../../components/slider/Slider";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import BackToTop from "../../components/backToTop/BackToTop";

const Home = () => {
    return (
        <div className='home-page'>
            {/*<MainHeader/>*/}
            <SubHeader/>
            <Slider/>
            <Products/>
            <Footer/>
            <BackToTop/>
        </div>
    );
};

export default Home;
