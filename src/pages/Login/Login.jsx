import React from 'react';
import Lottie from "lottie-react";
import animation from "../../assets/122987-admin-page-koperasi.json"


const Login = () => {
    return (
        <div className='bg-[#E4E0DB] p-5  lg:p-20'>
            <div className='bg-[#E4E0DB] shadow-2xl py-16 lg:p-20 pt-0 rounded-lg'>
                <div className=' h-[500px] flex justify-center items-center'>
                    <Lottie animationData={animation} loop={true}></Lottie>
                </div>
                <div className="divider text-xl font-semibold">Sing Up</div>
                
            </div>
        </div>
    );
};

export default Login;