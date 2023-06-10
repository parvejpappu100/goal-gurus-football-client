import React from 'react';

const CoachSay = () => {
    return (
        <div className='bg-[#173931]'>
            <div className='lg:container mx-auto py-16 px-4 text-white'>
                <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
                    <div className='w-full '>
                        <img className=' lg:transform lg:-rotate-12' src="https://i.ibb.co/wCdv3fj/coach.jpg" alt="" />
                    </div>
                    <div className=''>
                        <h3 className=' text-3xl font-medium'>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue."</h3>
                        <p className='border-t-2 my-10 border-red-700'></p>
                        <h5 className=' font-medium'>Andrew Yako</h5>
                        <p>Coach of GoalGurus Football Academy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoachSay;