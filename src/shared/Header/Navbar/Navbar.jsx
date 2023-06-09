import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const navOptions = <>
        <li>
            <a>Home</a>
        </li>
        <li>
            <a>Coaches</a>
        </li>
        <li>
            <Link to="/allClass">Classes</Link>
        </li>
        <li>
            <a>Dashboard</a>
        </li>
        <li>
            <a>Login</a>
        </li>
    </>

    return (
        <div className='lg:container mx-auto'>
            <div className="bg-[#173931] text-white navbar font-medium">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost  normal-case"><small>
                        GoalGurus<br />FOOTBALL<br />ACADEMY
                    </small></a>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 uppercase">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;