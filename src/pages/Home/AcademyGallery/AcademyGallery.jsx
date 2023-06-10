import React from 'react';

const AcademyGallery = () => {
    return (
        <div className='bg-[#F5E1DA] py-20'>
            <h3 className='text-center text-4xl my-5'>The Gallery Academy</h3>
            <div className='lg:container mx-auto flex justify-center mt-20'>
                <img className='w-1/4 transform -rotate-12' src="https://i.ibb.co/gz911TH/gallery1.jpg" alt="" />
                <img className='w-1/4 transform -rotate-12' src="https://i.ibb.co/zZXN6wW/gallery2.jpg" alt="" />
                <img className='w-1/4 transform -rotate-12' src="https://i.ibb.co/Xj2YpSW/gallery3.jpg" alt="" />
            </div>
            <div className='lg:container mx-auto text-center mt-32'>
                <button className=' hover:bg-[#173931] hover:text-white duration-500 border border-black py-2 px-7 uppercase rounded-3xl'>View Matches</button>
                <p className='border border-red-400 mt-20'></p>
            </div>
        </div>
    );
};

export default AcademyGallery;