import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';


const MyCart = () => {

    const [cart, refetch] = useCart();

    const handleDelete = classes => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${classes._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div>
            <div className='md:container mx-auto my-5'>
                <Helmet>
                    <title>My Selected Class | Dashboard</title>
                </Helmet>
                <div className='bg-white p-5 w-full'>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='bg-[#F5E1DA] text-xl'> # </th>
                                    <th className='bg-[#F5E1DA] text-xl'>Class Image</th>
                                    <th className='bg-[#F5E1DA] text-xl'>Class Name</th>
                                    <th className='bg-[#F5E1DA] text-xl'>Price</th>
                                    <th className='bg-[#F5E1DA] text-xl'>Action</th>
                                    <th className='bg-[#F5E1DA] text-xl'>Pay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((selectedClass, index) => <tr
                                        key={selectedClass._id}
                                    >
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={selectedClass.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {selectedClass.name}
                                        </td>
                                        <td className='text-yellow-600 font-semibold text-xl'>$ {selectedClass.price}
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(selectedClass)} className="btn bg-red-700 border-none h-10 w-10 btn-xs text-white hover:bg-black">
                                                <FaTrashAlt></FaTrashAlt>
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn bg-[#f3b7a1] border-none h-10 w-10 btn-xs normal-case font-bold">
                                                Pay
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;