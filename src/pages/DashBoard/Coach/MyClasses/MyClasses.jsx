import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
    return (
        <div className='md:container mx-auto'>
            <Helmet>
                <title>My Classes | Dashboard</title>
            </Helmet>
            <h1>This is my classes page</h1>
        </div>
    );
};

export default MyClasses;