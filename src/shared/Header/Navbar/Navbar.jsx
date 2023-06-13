import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';
import useCoach from '../../../hooks/useCoach';



const Navbar = () => {

    const { user, logOut } = useAuth();
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isCoach] = useCoach();

    const handleLogout = () => {
        logOut()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logout successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch()
    }

    const navOptions = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to='/coaches'>Coaches</Link>
        </li>
        <li>
            <Link to="/allClass">Classes</Link>
        </li>
        <li>
            <Link to="/dashBoard">Dashboard</Link>
        </li>
        <li>
            {
                !isAdmin || !isCoach && <Link to="/dashboard/myCart">
                    <div className='indicator'>
                        <span className="indicator-item badge indicator-bottom border-none bg-black text-white">+{cart?.length || 0}</span>
                        <FaShoppingCart className='text-xl text-white  bg-green-700 rounded-full h-8 w-8 p-1'>
                        </FaShoppingCart>
                    </div>
                </Link>
            }
        </li>
        <li>
            {
                user ?
                    <div className="flex items-center gap-3">
                        <div className="tooltip  tooltip-bottom" data-tip={user.displayName}>
                            {
                                user.photoURL ? <img className="rounded-full h-10 w-10" src={user.photoURL}></img> : <FaUserCircle className="h-10 w-10"></FaUserCircle>
                            }
                        </div>
                        <Link onClick={handleLogout} className="font-semibold text-base">Log out</Link>
                    </div> :
                    <div className="flex items-center gap-3">
                        <Link to="/login" className=" font-semibold text-base">Login</Link>
                    </div>
            }
        </li>
    </>

    return (
        <div className="bg-black bg-opacity-30 lg:text-white navbar font-medium  fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-white  normal-case"><small>
                    GoalGurus<br />FOOTBALL<br />ACADEMY
                </small></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase items-center">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;