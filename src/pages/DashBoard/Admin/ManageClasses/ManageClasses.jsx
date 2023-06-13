import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Modal from 'react-modal';


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get("/classes");
        return res.data;
    });

    const newClasses = classes.filter(allClass => allClass?.status == "Pending" || allClass?.status == "denied" || allClass?.status == "approved");

    const handleApprovedClass = (newClass) => {
        const updatedStatus = { status: "approved" };
        axiosSecure.put(`classes/${newClass._id}`,updatedStatus)
            .then(data => {
                if (data.data.modifiedCount > 0) {
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

    const handleDeniedClass = (newClass) => {
        const updatedStatus = { status: "denied" };
        fetch(`http://localhost:5000/classes/${newClass._id}`, {
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [feedbackClassId, setFeedbackClassId] = useState([]);

    const handleOpenModal = (newClass) => {
        setFeedbackClassId(newClass)
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };
    const modalStyles = {
        content: {
            height: '400px',
            width: '600px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
        },
    };

    const handleSendFeedback = (newClass) => {
        const setFeedback = { feedback: feedback };
        axiosSecure.put(`classes/feedback/${newClass._id}`, setFeedback)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Feedback Sent !',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
        handleCloseModal();
    };

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
                                <th className='bg-[#F5E1DA] text-xl'>Price</th>
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
                                            {newClass.status == "approved" ? "Approved" : "Approve"}
                                        </button>
                                        <button disabled={newClass.status == "approved" || newClass.status == "denied" ? true : false} onClick={() => handleDeniedClass(newClass)} className="btn bg-[#f3b7a1] border-none   btn-xs normal-case font-bold text-[12px]">
                                            {newClass.status == "denied" ? "Denied" : "Deny"}
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleOpenModal(newClass)} className="btn bg-[#f3b7a1] border-none   btn-xs  normal-case font-bold text-[12px]">
                                            Feedback
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={handleCloseModal}
                        contentLabel="Feedback Modal"
                        style={modalStyles}
                    >
                        <h2 className='text-xl text-center'>Feedback</h2>
                        <textarea
                            value={feedback}
                            onChange={handleFeedbackChange}
                            className='border w-full my-10 h-1/2 p-4 text-xl'
                        />
                        <div className='flex justify-end'>
                            <button className='btn normal-case bg-[#f3b7a1] ' onClick={() => handleSendFeedback(feedbackClassId)}>Send Feedback</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;