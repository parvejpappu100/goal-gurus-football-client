import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { FaArrowAltCircleDown, FaBars, FaBook, FaCalendarAlt, FaCartArrowDown, FaHome, FaSquareFull, FaUsers, FaWallet } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const DashBoard = () => {

    const [cart] = useCart();

    // * TODO: load data from the server to have dynamic isAdmin based on data:
    const isAdmin = false;
    const isCoach = false;

    return (
        <div>
            <Helmet>
                <title>Dashboard | GoalGurus Football Academy</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content relative">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className=" top-2 left-2 text-3xl fixed drawer-button lg:hidden"><FaBars></FaBars></label>

                </div>
                <div className="drawer-side bg-[#F5E1DA]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content uppercase font-semibold text-base">
                        <div className='text-center font-bold uppercase font-family py-16'>
                            <p className='text-3xl '>GoalGurus</p>
                            <p className='  text-xl md:tracking-wider '>Football Academy</p>
                        </div>
                        {
                            isAdmin && <>
                                <li>
                                    <Link><FaSquareFull></FaSquareFull>Manage Classes</Link>
                                </li>
                                <li>
                                    <Link><FaUsers></FaUsers>Manage Users</Link>
                                </li>
                            </> || isCoach && <>
                                <li>
                                    <Link><FaArrowAltCircleDown></FaArrowAltCircleDown>Add Class</Link>
                                </li>
                                <li>
                                    <Link><FaWallet></FaWallet>My Class</Link>
                                </li>
                            </> || <>
                                <li>
                                    <Link to="/dashBoard/myCart"><FaCartArrowDown></FaCartArrowDown> My Selected Classes <span className=" badge badge-secondary">+{cart.length || 0}</span></Link>
                                </li>
                                <li>
                                    <Link><FaCalendarAlt></FaCalendarAlt>My Enrolled Classes</Link>
                                </li>
                                <li>
                                    <Link><FaWallet></FaWallet> Payment History</Link>
                                </li>
                            </>
                        }
                        <div className="divider bg-white h-1"></div>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link>Classes</Link>
                        </li>
                        <li>
                            <Link>Coaches</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;