import React from 'react';
import { Helmet } from 'react-helmet-async';
import usePayments from '../../../../hooks/usePayments';

const PaymentsHistory = () => {

    const [payments ] = usePayments();

    return (
        <div className='md:container mx-auto'>
            <Helmet>
                <title>Payment History | Dashboard</title>
            </Helmet>
            <div className='bg-white p-5 w-full'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='bg-[#F5E1DA] text-xl'> # </th>
                                <th className='bg-[#F5E1DA] text-xl'>Class Name</th>
                                <th className='bg-[#F5E1DA] text-xl'>Email</th>
                                <th className='bg-[#F5E1DA] text-xl'>Price</th>
                                <th className='bg-[#F5E1DA] text-xl'>Date</th>
                                <th className='bg-[#F5E1DA] text-xl'>TransactionId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((paymentsHistory, index) => <tr
                                    key={paymentsHistory._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {paymentsHistory.name}
                                    </td>
                                    <td className=' font-semibold'>
                                        {paymentsHistory.email}
                                    </td>
                                    <td className='text-yellow-600 font-semibold'>
                                        ${paymentsHistory.price}
                                    </td>
                                    <td>
                                        {paymentsHistory.date}
                                    </td>
                                    <td>
                                        {paymentsHistory.transactionId}
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

export default PaymentsHistory;