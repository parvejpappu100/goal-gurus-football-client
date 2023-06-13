import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddClass = () => {
    return (
        <div className='md:container mx-auto'>
            <Helmet>
                <title>Add Class | Dashboard</title>
            </Helmet>
            <h1>This is add class page</h1>
        </div>
    );
};

export default AddClass;