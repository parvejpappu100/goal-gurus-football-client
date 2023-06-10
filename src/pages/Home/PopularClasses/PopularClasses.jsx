import React, { useEffect, useState } from 'react';

const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        fetch("classes.json")
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])

    return (
        <div className='max-w-6xl mx-auto py-20 px-2'>
            <h3 className='text-center text-4xl  mb-10'>Popular Classes</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    popularClasses.sort((a , b) => b.enrolled_students - a.enrolled_students).slice(0, 6).map(popular => <div key={popular._id}>
                        <div className='relative'>
                            <img className='h-[400px] w-full' src={popular.image} alt="" />
                            <h3 className='text-white inset-0 absolute pl-5 pt-10 w-full bg-black bg-opacity-20 h-full text-2xl'>{popular.name}</h3>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;