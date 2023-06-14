import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckOutForm from './CheckOutForm';
import "./Payment.css"
import { useLocation, useParams } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';

// * TODO: provide publishable key:
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const location = useLocation();
    const data = location.state;
    const priceString = data.price;
    const price = parseFloat(priceString); 
    const name = data.name;
    const classId = data.classId;

    return (
        <div className='md:container mx-auto my-20'>
            <Helmet>
                <title>Payment | Dashboard</title>
            </Helmet>
            <h4 className='text-3xl text-center font-family'>Pay Now</h4>
            <div className='max-w-3xl mx-auto my-20'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm price={price} name={name} classId={classId} data={data}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;