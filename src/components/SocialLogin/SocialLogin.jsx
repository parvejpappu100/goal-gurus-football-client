import React from 'react';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const SocialLogin = () => {

    const { googleSingIn } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                const savedUser = {name : user.displayName , email: user.email , image: user.photoURL , role: "student"}
                axiosSecure.post("/users", savedUser)
                    .then(data => {
                        if (data.data.insertedId) {
                            navigate(from, { replace: true });
                            Swal.fire({
                                position: 'top',
                                icon: 'success',
                                title: 'User Create Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

                navigate(from, { replace: true })
            })
            .catch(error => {
                
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