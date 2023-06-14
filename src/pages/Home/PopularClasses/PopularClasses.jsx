import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';

const PopularClasses = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: popularClasses = [] } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get(`/classes`)
        return res.data;
    });

    return (
        <div className='max-w-6xl mx-auto py-20 px-2'>
            <h3 className='text-center text-4xl  mb-10'>Popular Classes</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    popularClasses.sort((a, b) => b.enrolled_students - a.enrolled_students).slice(0, 6).map(popular => <div key={popular._id}>
                        <motion.div className='relative'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img className='h-[400px] w-full' src={popular.image} alt="" />
                            <div className='text-white inset-0 absolute pl-5 pt-10 w-full bg-black bg-opacity-20 h-full text-2xl'>
                                <h3>{popular.name}</h3>
                                <span className='text-base'>Enrolled Student : {popular.enrolled_students}</span>
                            </div>
                        </motion.div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;