import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useCart from '../../../../hooks/useCart';
import { useNavigate } from 'react-router-dom';


const CheckOutForm = ({ price, name, classId, data }) => {
    const { available_seat, enrolled_seat, _id } = data;
    const available_seatInt = parseInt(available_seat);
    const enrolled_seatInt = parseInt(enrolled_seat);

    const stripe = useStripe();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const [, refetch] = useCart();

    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
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

        if (confirmError) {
            setCardError(confirmError.message)
        }

        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId);
            navigate("/dashboard/paymentHistory")
            const payment = {
                email: user?.email,
                transactionId,
                price,
                name,
                date: new Date(),
                classId
            }

            axiosSecure.post("/payments", payment)
                .then(res => {
                    if (res.data.insertResult.insertedId && res.data.deletedResult.deletedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Payment successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }

    return (
        <div className='md:container mx-auto'>
            <Helmet>
                <title>CheckOut | Dashboard</title>
            </Helmet>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="card-details" className="block text-gray-700 mb-2">
                            Card Details
                        </label>
                        <div id="card-details" className="p-3 border border-gray-300 rounded">
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
                        </div>
                    </div>
                    <button
                        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={!stripe || !clientSecret || processing}
                    >
                        {processing ? 'Processing...' : 'Pay'}
                    </button>
                </form>
                {cardError && <p className="text-red-500 font-semibold mt-4">{cardError}</p>}
                {transactionId && (
                    <p className="text-green-500 font-semibold mt-4">
                        Transaction complete with transactionId: {transactionId}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CheckOutForm;