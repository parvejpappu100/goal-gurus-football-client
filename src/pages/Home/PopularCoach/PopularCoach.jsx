import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "./PopularCoach.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const PopularCoach = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: coaches = [] } = useQuery(["coaches"], async () => {
        const res = await axiosSecure.get(`/coaches`)
        return res.data;
    });
    
    return (
        <div className=' bg-[#F5E1DA] pb-20'>
            <div className='lg:container mx-auto'>
                <h3 className='text-4xl text-center'>Our Popular Coach</h3>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-20 max-w-6xl mx-auto"
            >
                {
                    coaches.slice(0 , 6).map(coach => <SwiperSlide key={coach._id}>
                        <img className='grayscale hover:grayscale-0 transition duration-500' src={coach.image} alt="" />
                        <h3 className='text-[12px] md:text-xl font-semibold mt-5'>{coach.name}</h3>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default PopularCoach;