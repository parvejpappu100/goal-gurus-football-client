import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';


const CheckOutForm = ({ price }) => {

    const stripe = useStripe();
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();

    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing , setProcessing] = useState(false);
    const [transactionId , setTransactionId] = useState("");

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [price , axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        console.log(card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log("error", error);
            setCardError(error.message)
        }
        else {
            console.log("payment method", paymentMethod);
            setCardError("");
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        )

        if(confirmError){
            console.log(confirmError.message)
            setCardError(confirmError.message)
        }
        console.log(paymentIntent)

        setProcessing(false);
        if(paymentIntent.status === "succeeded"){
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId);
        }


    }

    return (
        <div className='md:container mx-auto'>
            <Helmet>
                <title>CheckOut | Dashboard</title>
            </Helmet>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className='btn bg-white my-5 shadow-md text-xl hover:bg-[#F5E1DA] normal-case' type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </form>
                {cardError && <p className='text-red-500 font-semibold '>{cardError}</p>}
                {transactionId && <p className='text-green-500 font-semibold'>Transaction complete with transactionId : {transactionId}</p>}
            </div>
        </div>
    );
};

export default CheckOutForm;