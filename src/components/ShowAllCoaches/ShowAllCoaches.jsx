import React from 'react';

const ShowAllCoaches = ({ coach }) => {
    const { image, name, email } = coach;

    return (
        <div className='mx-auto'>
            <img className='grayscale hover:grayscale-0 transition duration-500' src={image} alt="" />
            <h3 className='text-[12px] md:text-xl font-semibold mt-5'>{name}</h3>
            <p>{email}</p>
        </div>
    );
};

export default ShowAllCoaches;