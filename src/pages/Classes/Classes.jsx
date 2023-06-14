import React, { useEffect, useState } from 'react';
import Banner from '../../shared/Banner/Banner';
import ShowAllClasses from '../../components/ShowAllClasses/ShowAllClasses';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';

const Classes = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: allClasses = [] } = useQuery(["allClasses"], async () => {
        const res = await axiosSecure.get(`/classes`)
        return res.data;
    });

    const [showAll, setShowAll] = useState(false);
    const handleShowAll = (event) => {
        setShowAll(true);
    };

    const approvedClasses = allClasses.filter(allClass => allClass?.status !== "Pending" && allClass?.status !== "denied");

    return (
        <div>
            <Helmet>
                <title>Classes | GoalGurus Football Academy</title>
            </Helmet>
            <Banner
                img={"https://i.ibb.co/GnXMkGv/banner.webp"}
                title={"Our Classes"}
                details={"Home > Classes"}
            ></Banner>
            <div className='lg:container mx-auto my-20'>
                <h3 className='text-4xl px-5 lg:px-0'>Our All Classes</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20'>
                    {
                        approvedClasses.slice(0, showAll ? allClasses.length : 8).map(classes => <ShowAllClasses
                            key={classes._id}
                            classes={classes}
                        ></ShowAllClasses>)
                    }
                </div>
                <div className='text-center my-8'>
                    {
                        !showAll && (
                            <button onClick={handleShowAll} className=' hover:bg-[#173931] hover:text-white duration-500 border border-black py-2 px-7 uppercase rounded-3xl'>View All</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;