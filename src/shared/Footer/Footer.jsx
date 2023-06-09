import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='mt-20 px-3 bg-base-200'>
            <h3 className='lg:container mx-auto pt-16 pb-8 text-xl '>Follow GoalGurus Football Academy</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 pb-10 lg:container mx-auto'>
                <div className='bg-white p-5'>
                    <FaFacebook className='text-3xl'></FaFacebook>
                    <h5 className='text-xl my-1'>Facebook</h5>
                    <p>@goalGurus</p>
                </div>
                <div className='bg-white p-5'>
                    <FaInstagramSquare className='text-3xl'></FaInstagramSquare>
                    <h5 className='text-xl my-1'>Instagram</h5>
                    <p>@goalGurus</p>
                </div>
                <div className='bg-white p-5'>
                    <FaTwitterSquare className='text-3xl'></FaTwitterSquare>
                    <h5 className='text-xl my-1'>Twitter</h5>
                    <p>@goalGurus</p>
                </div>
                <div className='bg-white p-5'>
                    <FaYoutube className='text-3xl'></FaYoutube>
                    <h5 className='text-xl my-1'>Youtube</h5>
                    <p>@goalGurus</p>
                </div>
                <div className='bg-white p-5'>
                    <FaTelegram className='text-3xl'></FaTelegram>
                    <h5 className='text-xl my-1'>Telegram</h5>
                    <p>@goalGurus</p>
                </div>
                <div className='bg-white p-5'>
                    <FaTiktok className='text-3xl'></FaTiktok>
                    <h5 className='text-xl my-1'>Tiktok</h5>
                    <p>@goalGurus</p>
                </div>
            </div>
            <footer className="footer py-10 px-5 lg:px-0  text-base-content lg:container mx-auto">
                <div>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clip-rule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>GoalGurus Football Academy<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Help</span>
                    <a className="link link-hover">Company</a>
                    <a className="link link-hover">Career</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Help Center</a>
                </div>
                <div>
                    <span className="footer-title">GoalGurus</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Classes</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center pb-5 pt-20 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;