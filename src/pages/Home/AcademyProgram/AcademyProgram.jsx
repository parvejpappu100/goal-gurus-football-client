import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const AcademyProgram = () => {
    return (
        <div className='bg-[#D6DEDC]'>
            <div className='lg:container mx-auto py-20'>
                <h3 className='flex justify-center my-5 text-4xl'>Find Your Game With The <br /> GoalGurus Football Academy</h3>
                <div className=' flex flex-col items-start'>
                    <div className='flex flex-col lg:flex-row gap-8 lg:items-center my-5 w-full px-4 lg:px-0 '>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-8 justify-between lg:w-1/3'>
                            <p className='text-xl'>01.</p>
                            <h4 className='text-3xl'>Know and Understand player identity</h4>
                        </div>
                        <div className='flex flex-col lg:flex-row lg:items-center justify-between lg:w-2/3 gap-5 lg:gap-0'>
                            <p className=''>Player identity refers to the way individuals perceive and present themselves within the context of gaming and virtual environments.</p>
                            <FaArrowCircleRight className='text-3xl transform -rotate-45'></FaArrowCircleRight>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8 lg:items-center my-5 w-full px-4 lg:px-0'>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-8 justify-between lg:w-1/3'>
                            <p className='text-xl '>02.</p>
                            <h4 className='text-3xl'>Develop 360-degree player plan</h4>
                        </div>
                        <div className='flex flex-col lg:flex-row lg:items-center justify-between lg:w-2/3 gap-5 lg:gap-0'>
                            <p className=''>Player identity refers to the way individuals perceive and present themselves within the context of gaming and virtual environments.</p>
                            <FaArrowCircleRight className='text-3xl transform -rotate-45'></FaArrowCircleRight>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8 lg:items-center my-5 w-full px-4 lg:px-0'>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-8 justify-between lg:w-1/3'>
                            <p className='text-xl '>03.</p>
                            <h4 className='text-3xl'>Identity player role models</h4>
                        </div>
                        <div className='flex flex-col lg:flex-row lg:items-center justify-between lg:w-2/3 gap-5 lg:gap-0'>
                            <p className=''>Player identity refers to the way individuals perceive and present themselves within the context of gaming and virtual environments.</p>
                            <FaArrowCircleRight className='text-3xl transform -rotate-45'></FaArrowCircleRight>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-8 lg:items-center my-5 w-full px-4 lg:px-0'>
                        <div className='flex flex-col lg:flex-row lg:items-center gap-8 justify-between lg:w-1/3'>
                            <p className='text-xl '>04.</p>
                            <h4 className='text-3xl'>Establish daily habits on and off the field</h4>
                        </div>
                        <div className='flex flex-col lg:flex-row lg:items-center justify-between lg:w-2/3 gap-5 lg:gap-0'>
                            <p className=''>Player identity refers to the way individuals perceive and present themselves within the context of gaming and virtual environments.</p>
                            <FaArrowCircleRight className='text-3xl transform -rotate-45'></FaArrowCircleRight>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademyProgram;