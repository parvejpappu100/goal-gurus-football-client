import React, { useState } from 'react';

const ShowAllClasses = ({ classes }) => {
    const { name, image, available_seats, coach, price } = classes;

    // const [disable , setDisable] = useState(false);
    // if(available_seats === 10){
    //     setDisable(true)
    // }


    return (
        <div className='p-5 border'>
            <img className='h-[400px] w-full' src={image} alt="" />
            <h3 className='text-2xl font-medium my-2'>{name}</h3>
            <h6 className='text-xl'>Coach : {coach}</h6>
            <p className='my-1'>Available Seat :  {available_seats}</p>
            <p >Price : <span className='text-yellow-600 font-semibold'>${price}</span></p>
            <button disabled={available_seats == 0 ? true : false} className=' btn btn-ghost mt-3 btn-sm normal-case border border-black'>Select</button>
        </div>
    );
};

export default ShowAllClasses;