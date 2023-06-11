import React from 'react';

const Banner = ({img  , title , details}) => {
    return (
        <div className="hero min-h-[500px] lg:min-h-[700px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="md:w-2/3  hero-content text-center text-neutral-content bg-black bg-opacity-50 ">
                <div className="p-5 md:p-10 lg:p-20">
                    <h1 className="mb-5 text-5xl font-bold uppercase font-family">{title}</h1>
                    <p className="mb-5 title uppercase text-white">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;