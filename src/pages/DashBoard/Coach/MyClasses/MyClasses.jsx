import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../hooks/useAuth';
import { FaEdit} from 'react-icons/fa';

const MyClasses = () => {

    const { user } = useAuth();

    const [myClasses, setMyClasses] = useState([]);
    console.log(myClasses)

    const url = `http://localhost:5000/myClasses?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, [])

    return (
        <div className='md:container mx-auto'>
            <Helmet>
                <title>My Classes | Dashboard</title>
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
                                <th className='bg-[#F5E1DA] text-xl'>Status</th>
                                <th className='bg-[#F5E1DA] text-xl'>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myClasses.map((myClass, index) => <tr
                                    key={myClass._id}
                                >
                                    <td className='text-xl font-bold'>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xl font-semibold'>
                                        {myClass.name}
                                    </td>
                                    <td className='text-yellow-600 font-semibold text-xl'>$ {myClass.price}
                                    </td>
                                    <td className='flex gap-3'>
                                        <button className="btn bg-[#f3b7a1] border-none h-10  btn-xs normal-case font-bold text-[12px]">
                                            Pending
                                        </button>
                                        <button disabled className="btn bg-[#f3b7a1] border-none h-10  btn-xs normal-case font-bold text-[12px]">
                                            Denied
                                        </button>
                                        <button disabled className="btn bg-[#f3b7a1] border-none h-10  btn-xs normal-case font-bold text-[12px]">
                                            Approved
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn bg-[#f3b7a1] border-none h-10 w-10 btn-xs text-base normal-case font-bold">
                                            <FaEdit></FaEdit>
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

export default MyClasses;