import { ShoppingCart } from 'lucide-react';
import React from 'react';

const navLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];


const NavBar = ({ cartLength }) => {
    return (
        <nav className='py-6 border-b border-[#F2F2F2]'>
            <div className="flex flex-col gap-4 md:flex-row items-center justify-between bg-base-100 max-w-300 w-11/12 xl:w-3/4 mx-auto">
                <div className="flex items-center gap-4">
                    <div className="dropdown xl:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost px-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {
                                navLinks.map((link, index) => <li key={index}><a className='text-base font-semibold leading-[120%] text-black10'>{link}</a></li>)
                            }

                        </ul>
                    </div>

                    <div className='h-fit'>
                        <a className="text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">DigiTools</a>
                    </div>
                </div>

                <div className="hidden xl:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks.map((link, index) => <li key={index}><a className='text-base font-semibold leading-[120%] text-black10'>{link}</a></li>)
                        }
                    </ul>
                </div>

                <div className="">
                    <div className='flex items-center gap-4'>
                        <div className='relative'>
                            <ShoppingCart size={24} />
                            <span className='absolute -top-3 right-0 bg-rose-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs' hidden={!cartLength}>{cartLength}</span>
                        </div>

                        <button className='text-base font-semibold leading-[120%] text-black10'>Login</button>

                        <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold h-fit py-3.25 px-4">Get Started</button>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default NavBar;