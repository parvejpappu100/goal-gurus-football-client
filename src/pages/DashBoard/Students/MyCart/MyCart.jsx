import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';


const MyCart = () => {

    const [cart , refetch] = useCart();

    return (
        <div>
            <div className='md:container mx-auto my-5'>
                <Helmet>
                    <title>Bistro Boss | My Cart</title>
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
                                            <button className="btn bg-red-700 border-none h-10 w-10 btn-xs text-white hover:bg-black">
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