import React from 'react';
import { Helmet } from 'react-helmet-async';

const ManageClasses = () => {
    return (
        <div className='md:container mx-auto'>
            <Helmet>
                <title>Manage Classes | Dashboard</title>
            </Helmet>
            <h1>This is manage classes page</h1>
        </div>
    );
};

export default ManageClasses;