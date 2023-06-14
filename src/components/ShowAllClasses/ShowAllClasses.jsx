import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAdmin from '../../hooks/useAdmin';
import useCoach from '../../hooks/useCoach';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ShowAllClasses = ({ classes }) => {
    const { name, image, available_seats, coach, price, _id } = classes;

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [axiosSecure] = useAxiosSecure();

    const [cart, refetch] = useCart();
    const [isAdmin] = useAdmin();
    const [isCoach] = useCoach();

    const isExits = cart.find(ct => ct.classId == _id);
    
    const handleSelect = (classes) => {
        if (user && user.email) {
            const selectedClass = { name, image, coach, price, classId: _id, email: user.email }
            axiosSecure.post("/carts", selectedClass)
                .then(data => {
                    if (data.data.insertedId) {
                        refetch();
                        toast.success("Class Selected", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
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
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className={`p-5 border ${available_seats == 0 ? "bg-red-500 text-white tooltip " : "" } `} data-tip="Not Available Yet">
            <img className='h-[400px] w-full' src={image} alt="" />
            <h3 className='text-2xl font-medium my-2'>{name}</h3>
            <h6 className='text-xl'>Coach : {coach}</h6>
            <p className='my-1'>Available Seat :  {available_seats}</p>
            <p >Price : <span className='text-yellow-600 font-semibold'>${price}</span></p>
            <button onClick={() => handleSelect(classes)} disabled={available_seats == 0 || isExits || isAdmin || isCoach ? true : false} className=' btn btn-ghost mt-3 btn-sm normal-case border border-black'>
                Select
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />

            </button>
        </div>
    );
};

export default ShowAllClasses;