import React, { useEffect, useState } from 'react';
import Banner from '../../shared/Banner/Banner';
import ShowAllCoaches from '../../components/ShowAllCoaches/ShowAllCoaches';

const Coaches = () => {

    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        fetch("coaches.json")
            .then(res => res.json())
            .then(data => setCoaches(data))
    }, [])

    const [showAll, setShowAll] = useState(false);
    const handleShowAll = (event) => {
        setShowAll(true);
    };

    return (
        <div>
            <Banner
                img={"https://i.ibb.co/GnXMkGv/banner.webp"}
                title={"Our Coaches"}
                details={"Home > Coaches"}
            ></Banner>
            <div className='bg-[#F5E1DA] pb-20 my-16'>
                <h3 className='text-4xl text-center py-10'>Trained by a Reliable Coach</h3>
                <div className='max-w-6xl mx-auto px-3 lg:px-0  grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-5'>
                    {
                        coaches.slice(0, showAll ? coaches.length : 10).map(coach => <ShowAllCoaches
                            key={coach._id}
                            coach={coach}
                        ></ShowAllCoaches>)
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

export default Coaches;