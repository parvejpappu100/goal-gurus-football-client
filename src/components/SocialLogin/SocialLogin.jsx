import React from 'react';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const SocialLogin = () => {

    const { googleSingIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                const savedUser = {name : user.displayName , email: user.email}
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
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