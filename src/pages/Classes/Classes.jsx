import React, { useEffect, useState } from 'react';
import Banner from '../../shared/Banner/Banner';
import ShowAllClasses from '../../components/ShowAllClasses/ShowAllClasses';

const Classes = () => {

    const [allClasses, setClasses] = useState([]);

    useEffect(() => {
        fetch("classes.json")
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>
            <Banner
                img={"https://i.ibb.co/GnXMkGv/banner.webp"}
                title={"Our Classes"}
                details={"Home > Classes"}
            ></Banner>
            <div className='lg:container mx-auto my-20'>
                <h3 className='text-4xl px-5 lg:px-0'>Our All Classes</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20'>
                    {
                        allClasses.map(classes => <ShowAllClasses
                        key={classes._id}
                        classes={classes}
                        ></ShowAllClasses>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;