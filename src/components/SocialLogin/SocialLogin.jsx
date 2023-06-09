import React from 'react';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';


const SocialLogin = () => {
    return (
        <div>
            <div className="divider text-xl font-semibold">Or continue with</div>
            <div className='flex gap-5 justify-center text-4xl my-5'>
                <button><FaGoogle></FaGoogle></button>
                <button><FaFacebook></FaFacebook></button>
                <button><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;