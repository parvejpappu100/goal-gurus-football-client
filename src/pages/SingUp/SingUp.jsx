import React, { useState } from 'react';
import Lottie from "lottie-react";
import animation from "../../assets/122987-admin-page-koperasi.json"
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SingUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passError, setPassError] = useState("");

    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            setPassError("")
            console.log(data.email, data.password, data.name, data.confirmPassword)
        }
        else {
            setPassError("Password dose not match . Please provide same password");
            return;
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='bg-[#E4E0DB] p-5  lg:p-20'>
            <div className='flex flex-col-reverse  lg:flex-row items-center bg-[#E4E0DB] shadow-2xl py-16 lg:p-20 pt-0 rounded-lg'>
                <div className='w-full h-[500px] flex justify-center items-center'>
                    <Lottie animationData={animation} loop={true}></Lottie>
                </div>
                <div className='w-full'>
                    <div className='bg-white pt-10 mt-10 rounded-t-2xl'>
                        <div className='md:w-3/4 mx-auto hero'>
                            <form onSubmit={handleSubmit(onSubmit)} className='hero-content w-full flex flex-col'>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl font-medium">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Your name" name='name' className="input input-bordered " />
                                    {errors.name && <span className='text-red-600'>Name is required</span>}
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl font-medium">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} placeholder="Your email" name='email' className="input input-bordered " />
                                    {errors.email && <span className='text-red-600'>Email is required</span>}
                                </div>
                                <div className="form-control w-full relative">
                                    <label className="label">
                                        <span className="label-text text-xl font-medium">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"} {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="Your Password" name='password' className="input input-bordered " />
                                    <button
                                        type="button" // Change the type to "button"
                                        className="absolute top-[75%] right-3 transform -translate-y-1/2 focus:outline-none text-xl"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                    </button>
                                    {errors.password?.type == "required" && <span className='text-red-600'>Password is required.</span>}
                                    {errors.password?.type == "minLength" && <span className='text-red-600'>Password should be at least 6 characters.</span>}
                                    {errors.password?.type == "maxLength" && <span className='text-red-600'>Password should be maximum 20 characters</span>}
                                    {errors.password?.type == "pattern" && <span className='text-red-600'>Password should be at least one uppercase, one lowercase , one digit and one special character</span>}
                                </div>
                                <div className="form-control w-full relative">
                                    <label className="label">
                                        <span className="label-text text-xl font-medium">Confirm Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"} {...register("confirmPassword", { required: true })} placeholder="Your Password" name='confirmPassword' className="input input-bordered " />
                                    {errors.confirmPassword && <span className='text-red-600'>Confirm password is required</span>}
                                    <span className='text-red-600'>{passError}</span>
                                </div>
                                <input type="submit" value="Sing Up" className='btn bg-[#043730] hover:bg-[#043730] text-white normal-case w-3/4 lg:w-2/4' />
                            </form>
                        </div>
                    </div>
                    <div className='bg-white rounded-b-2xl '>
                        <div className='md:w-3/4 mx-auto pb-10'>
                            <div className='text-center'>
                                <Link to="/login">
                                    <button className='w-3/4 lg:w-2/4 btn bg-[#EE5B47] hover:bg-[#EE5B47] text-white normal-case'>Already Have Account</button>
                                </Link>
                            </div>
                            <div className='w-3/4 lg:w-2/4 mx-auto my-5'>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;