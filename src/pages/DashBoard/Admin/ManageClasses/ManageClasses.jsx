import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get("/classes")
        return res.data;
    });

    const newClasses = classes.filter(allClass => allClass?.status == "Pending" || allClass?.status == "denied" || allClass?.status == "approved");

    const handleApprovedClass = (newClasses) => {
        const updatedStatus = { status: "approved" };
        fetch(`http://localhost:5000/classes/${newClasses._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Class Approved !',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    const handleDeniedClass = (newClasses) => {
        const updatedStatus = { status: "denied" };
        fetch(`http://localhost:5000/classes/${newClasses._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'warning',
                        title: 'Class Denied !',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    return (
        <div className='md:container mx-auto'>
            <Helmet>
                <title>Manage Classes | Dashboard</title>
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
                                <th className='bg-[#F5E1DA] text-xl'>Coach Name</th>
                                <th className='bg-[#F5E1DA] text-xl'>Coach Email</th>
                                <th className='bg-[#F5E1DA] text-xl'>Coach Price</th>
                                <th className='bg-[#F5E1DA] text-xl'>Available Seat</th>
                                <th className='bg-[#F5E1DA] text-xl'>Status</th>
                                <th className='bg-[#F5E1DA] text-xl'>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newClasses.map((newClass, index) => <tr
                                    key={newClass._id}
                                >
                                    <td className='text-xl font-bold'>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={newClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xl font-semibold'>
                                        {newClass.name}
                                    </td>
                                    <td className=''>{newClass.coach}
                                    </td>
                                    <td className=''>{newClass?.email}
                                    </td>
                                    <td className='text-yellow-500 font-bold'>${newClass.price}
                                    </td>
                                    <td>{newClass.available_seats}
                                    </td>
                                    <td className='flex gap-3 mt-4'>
                                        <button disabled={newClass.status == "approved" || newClass.status == "denied" ? true : false} onClick={() => handleApprovedClass(newClass)} className="btn bg-[#f3b7a1] border-none   btn-xs normal-case font-bold text-[12px]">
                                            Approved
                                        </button>
                                        <button disabled={newClass.status == "approved" || newClass.status == "denied" ? true : false} onClick={() => handleDeniedClass(newClass)} className="btn bg-[#f3b7a1] border-none   btn-xs normal-case font-bold text-[12px]">
                                            Denied
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn bg-[#f3b7a1] border-none   btn-xs  normal-case font-bold text-[12px]">
                                            Feedback
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;