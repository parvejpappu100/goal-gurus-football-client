import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css"

const Slider = () => {
    return (
        <div className=''>
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src="https://i.ibb.co/GHkwX6x/finalP.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/GHkwX6x/finalP.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/GHkwX6x/finalP.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/GHkwX6x/finalP.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/GHkwX6x/finalP.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/GHkwX6x/finalP.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;