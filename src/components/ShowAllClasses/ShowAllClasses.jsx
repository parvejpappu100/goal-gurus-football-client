import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const ShowAllClasses = ({ classes }) => {
    const { name, image, available_seats, coach, price  , _id} = classes;

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [ , refetch] = useCart();

    const handleSelect = (classes) => {
        if (user && user.email) {
            const selectedClass = {name, image, coach, price  ,classId: _id , email: user.email}
            fetch("http://localhost:5000/carts" , {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Selected Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Opps !',
                text: "You have to login first!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to login!'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate("/login" , {state: {from: location}})
                }
            })
        }
    }

    return (
        <div className='p-5 border'>
            <img className='h-[400px] w-full' src={image} alt="" />
            <h3 className='text-2xl font-medium my-2'>{name}</h3>
            <h6 className='text-xl'>Coach : {coach}</h6>
            <p className='my-1'>Available Seat :  {available_seats}</p>
            <p >Price : <span className='text-yellow-600 font-semibold'>${price}</span></p>
            <button onClick={() => handleSelect(classes)} disabled={available_seats == 0 ? true : false} className=' btn btn-ghost mt-3 btn-sm normal-case border border-black'>Select</button>
        </div>
    );
};

export default ShowAllClasses;