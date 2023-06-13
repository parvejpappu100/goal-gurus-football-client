import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    });

    const handleMakeAdmin = (user) => {
        const updatedRole = { role: "admin" };
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updatedRole)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Success!',
                                `${user.name} is Admin Now `,
                                'success'
                            )
                        }
                    })
            }
        })

    };

    const handleMakeCoach = user => {
        const updatedRole = { role: "coach" };
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updatedRole)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Success!',
                                `${user.name} is Coach Now`,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='lg:container mx-auto my-5'>
            <Helmet>
                <title>All Users | Dashboard</title>
            </Helmet>
            <div className='bg-white p-5 w-full'>
                <div className=' text-2xl font-bold uppercase title my-3'>
                    <h4>Total Users : {users.length}</h4>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#F5E1DA] text-xl'> # </th>
                                <th className='bg-[#F5E1DA] text-xl'> Image</th>
                                <th className='bg-[#F5E1DA] text-xl'>Name</th>
                                <th className='bg-[#F5E1DA] text-xl'>Email</th>
                                <th className='bg-[#F5E1DA] text-xl'>Role</th>
                                <th className='bg-[#F5E1DA] text-xl'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <td>
                                        <h3 className='text-2xl font-bold'>{index + 1}</h3>
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h4>{user.name}</h4>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        <div className='flex gap-5'>
                                            {
                                                user.role === "admin" ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className="btn normal-case btn-xs text-[12px]">
                                                    Make Admin
                                                </button>
                                            }
                                            {
                                                user.role === "coach" ? "Coach" : <button onClick={() => handleMakeCoach(user)} className="btn normal-case btn-xs text-[12px]">
                                                    Make Coach
                                                </button>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn bg-red-700 text-white hover:text-black border-none h-10 w-10 btn-xs">
                                            <FaTrashAlt></FaTrashAlt>
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

export default AllUsers;