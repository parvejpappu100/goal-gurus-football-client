import React from 'react';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {

    const { googleSingIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleSingIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate("/")
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="divider text-xl font-semibold">Or continue with</div>
            <div className='flex gap-5 justify-center text-4xl my-5'>
                <button onClick={handleGoogleLogin}><FaGoogle></FaGoogle></button>
                <button><FaFacebook></FaFacebook></button>
                <button><FaGithub></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;