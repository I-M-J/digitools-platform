import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-black10 pt-30 pb-7.5">
            <div className='max-w-300 w-11/12 xl:w-3/4 mx-auto flex flex-col gap-8 lg:flex-row lg:justify-around mb-20'>
                <aside className='text-white/80 text-center md:text-left space-y-4'>
                    <h2 className='text-4xl font-bold text-white'>DigiTools</h2>
                    <p>
                        Premium digital tools for creators,<br />professionals, and businesses. Work smarter<br />with our suite of powerful tools.
                    </p>
                </aside>

                <nav className='text-white/80 text-center md:text-left space-y-4'>
                    <h6 className="font-medium text-xl leading-7 text-white">Product</h6>
                    <p className="link link-hover">Features</p>
                    <p className="link link-hover">Pricing</p>
                    <p className="link link-hover">Templates</p>
                    <p className="link link-hover">Integrations</p>
                </nav>

                <nav className='text-white/80 text-center md:text-left space-y-4'>
                    <h6 className="font-medium text-xl leading-7 text-white">Company</h6>
                    <p className="link link-hover">About</p>
                    <p className="link link-hover">Blog</p>
                    <p className="link link-hover">Careers</p>
                    <p className="link link-hover">Press</p>
                </nav>

                <nav className='text-white/80 text-center md:text-left space-y-4'>
                    <h6 className="font-medium text-xl leading-7 text-white">Resources</h6>
                    <p className="link link-hover">Documentation</p>
                    <p className="link link-hover">Help Center</p>
                    <p className="link link-hover">Community</p>
                    <p className="link link-hover">Contact</p>
                </nav>

                <nav className='text-white/80 text-center md:text-left space-y-4'>
                    <h6 className="font-medium text-xl leading-7 text-white">Social Links</h6>

                    <div className="grid grid-flow-col gap-4 justify-around md:justify-start max-w-1/2 mx-auto md:mx-0">
                        <a className='bg-white p-2.5 rounded-full'>
                            <RiInstagramFill color='#000' />
                        </a>
                        <a className='bg-white rounded-full p-2.5'>
                            <FaFacebookSquare color='#000' />
                        </a>
                        <a className='bg-white rounded-full p-2.5'>
                            <FaXTwitter color='#000' />
                        </a>
                    </div>
                </nav>
            </div>

            <hr className='max-w-300 w-11/12 xl:w-3/4 mx-auto border-t border-[#E5E7EB]/20' />

            <div className='max-w-300 w-11/12 xl:w-3/4 mx-auto flex items-center justify-between flex-col md:flex-row mt-7.5 space-y-4'>
                <p className='text-[#FAFAFA]/50'>© 2024 DigiTools. All rights reserved.</p>

                <div className='flex gap-4 text-[#FAFAFA]/50'>
                    <a>Privacy Policy</a>
                    <a>Terms of Service</a>
                    <a>Cookie Policy</a>
                </div>
            </div>
        </footer >
    );
};

export default Footer;