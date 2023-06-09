import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css"

const Slider = () => {
    return (
        <div className='bg-image -mt-20 '>
            <img src="https://i.ibb.co/GHkwX6x/finalP.png" alt="" />
            <div className='inset-0 absolute lg:flex justify-center items-center pb-20 hidden'>
                <div className='text-5xl text-white uppercase flex flex-col space-y-5 font-family'>
                    <span className='text-center'>Welcome <br /></span>
                    <span className='mr-36'>To Best <br /></span>
                    <span className='text-end'>Football <br /></span>
                    <span className='text-center'>Academy <br /></span>
                    <div className='flex justify-center items-center'>
                        <button className='uppercase text-base btn rounded-3xl w-[200px] font-thin border-none hover:text-white hover:bg-[#173931]'>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;