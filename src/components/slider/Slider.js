import React from 'react';
import banner1 from '../../resources/images/slider/Banner1.jpg'
import banner2 from '../../resources/images/slider/Banner2.jpg'
import banner3 from '../../resources/images/slider/Banner3.jpg'
import banner4 from '../../resources/images/slider/Banner4.jpg'
import banner5 from '../../resources/images/slider/Banner5.jpg'
import banner6 from '../../resources/images/slider/Banner6.jpg'
const Slider = () => {
    return (
        <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"/>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"/>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"/>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="3"
                    aria-label="Slide 3"/>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="4"
                    aria-label="Slide 3"/>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="5"
                    aria-label="Slide 3"/>
            </div>
            <div className="carousel-inner">
                <div
                    className="carousel-item active"
                    data-bs-interval="2000">
                    <img
                        style={{maxHeight:'490px'}}
                        src={banner1}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div
                    className="carousel-item"
                    data-bs-interval="2000">
                    <img
                        style={{maxHeight:'490px'}}
                        src={banner2}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div
                    className="carousel-item"
                    data-bs-interval="2000">
                    <img
                        style={{maxHeight:'490px'}}
                        src={banner3}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div
                    className="carousel-item"
                    data-bs-interval="2000">
                    <img
                        style={{maxHeight:'490px'}}
                        src={banner4}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div
                    className="carousel-item"
                    data-bs-interval="2000">
                    <img
                        style={{maxHeight:'490px'}}
                        src={banner5}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div
                    className="carousel-item"
                    data-bs-interval="2000">
                    <img
                        style={{maxHeight:'490px'}}
                        src={banner6}
                        className="d-block w-100"
                        alt="..."/>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"/>
                <span
                    className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;
