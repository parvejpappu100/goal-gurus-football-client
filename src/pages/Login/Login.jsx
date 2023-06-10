import React, { useState } from 'react';
import Lottie from "lottie-react";
import animation from "../../assets/122987-admin-page-koperasi.json"
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';


const Login = () => {

    const { singIn } = useAuth();
    const [logInError , setLogInError] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data , event) => {
        event.preventDefault();
        const email = data.email;
        const password = data.password;
        singIn(email , password)
        .then(result => {
            const user = result.user;
            setLogInError("")
            navigate("/");
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'User Login Successfully',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(error => {
            setLogInError(error.message)
        })
    }

    return (
        <div className='bg-[#E4E0DB] p-5  lg:p-20'>
            <div className='bg-[#E4E0DB] shadow-2xl py-16 lg:p-20 pt-0 rounded-lg'>
                <div className=' h-[500px] flex justify-center items-center'>
                    <Lottie animationData={animation} loop={true}></Lottie>
                </div>
                <div className="divider text-xl font-semibold">Sing In</div>
                <div className='bg-white pt-10 mt-10 rounded-t-2xl'>
                    <div className='md:w-3/4 mx-auto hero'>
                        <form onSubmit={handleSubmit(onSubmit)} className='hero-content w-full flex flex-col'>
                            <div className='card-body flex flex-col md:flex-row gap-5 w-full'>
                                <div className="form-control w-full">
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="Enter your email" className="input border-black input-bordered w-full" />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}
                                </div>
                                <div className="form-control w-full">
                                    <input type="password" {...register("password", { required: true })} name='password' placeholder="Enter your password" className="input border-black input-bordered w-full" />
                                    {errors.password && <span className='text-red-600'>Password is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt text-xl font-semibold link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <p className="text-red-400 text-center mb-2 font-semibold">{logInError}</p>
                            <input type="submit" value="Sing In" className='btn bg-[#043730] hover:bg-[#043730] text-white normal-case w-3/4 lg:w-2/4' />
                        </form>
                    </div>
                </div>
                <div className='bg-white rounded-b-2xl '>
                    <div className='md:w-3/4 mx-auto pb-10'>
                        <div className='text-center'>
                            <Link to="/singUp">
                                <button className='w-3/4 lg:w-2/4 btn bg-[#EE5B47] hover:bg-[#EE5B47] text-white normal-case'>Create New Account</button>
                            </Link>
                        </div>
                        <div className='w-3/4 lg:w-2/4 mx-auto my-5'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;