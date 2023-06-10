import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css"
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className=''>
            <img src="https://i.ibb.co/GHkwX6x/finalP.png" alt="" />
            <div className='inset-0 absolute md:flex justify-center items-center lg:pb-20 hidden'>
                <div className=' text-2xl lg:text-5xl text-white uppercase flex flex-col space-y-2 lg:space-y-5 font-family'>
                    <span className='text-center'>Welcome <br /></span>
                    <span className='lg:mr-36'>To Best <br /></span>
                    <span className='text-end'>Football <br /></span>
                    <span className='lg:text-center'>Academy <br /></span>
                    <div className='flex justify-center items-center'>
                        <Link to="/singUp">
                            <button className=' uppercase text-base btn rounded-3xl w-[200px] font-thin border-none hover:text-white hover:bg-[#173931] duration-500'>
                                Register
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;