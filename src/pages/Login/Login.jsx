import React from 'react';
import Lottie from "lottie-react";
import animation from "../../assets/122987-admin-page-koperasi.json"
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';


const Login = () => {
    return (
        <div className='bg-[#E4E0DB] p-5  lg:p-20'>
            <div className='bg-[#E4E0DB] shadow-2xl py-16 lg:p-20 pt-0 rounded-lg'>
                <div className=' h-[500px] flex justify-center items-center'>
                    <Lottie animationData={animation} loop={true}></Lottie>
                </div>
                <div className="divider text-xl font-semibold">Sing Up</div>
                <div className='bg-white pt-10 mt-10 rounded-t-2xl'>
                    <div className='md:w-3/4 mx-auto hero'>
                        <form className='hero-content w-full flex flex-col'>
                            <div className='card-body flex flex-col md:flex-row gap-5 w-full'>
                                <div className="form-control w-full">
                                    <input type="text" placeholder="Enter your email" className="input border-black input-bordered w-full" />
                                </div>
                                <div className="form-control w-full">
                                    <input type="text" placeholder="Enter your password" className="input border-black input-bordered w-full" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt text-xl font-semibold link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <input type="submit" value="Sing In" className='btn bg-[#043730] hover:bg-[#043730] text-white normal-case w-3/4 lg:w-2/4' />
                        </form>
                    </div>
                </div>
                <div className='bg-white rounded-b-2xl '>
                    <div className='md:w-3/4 mx-auto pb-10'>
                        <div className='text-center'>
                            <button className='w-3/4 lg:w-2/4 btn bg-[#EE5B47] hover:bg-[#EE5B47] text-white normal-case'>Create New Account</button>
                        </div>
                        <div className='w-3/4 lg:w-2/4 mx-auto my-5'>
                            <div className="divider text-xl font-semibold">Or continue with</div>
                            <div className='flex gap-5 justify-center text-4xl my-5'>
                                <FaGoogle></FaGoogle>
                                <FaFacebook></FaFacebook>
                                <FaGithub></FaGithub>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;