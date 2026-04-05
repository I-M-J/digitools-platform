import React from 'react';
import bannerImg from "../../assets/banner.png"
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className='py-21.25'>
            <div className="bg-base-100 max-w-300 w-11/12 xl:w-3/4 mx-auto">
                <div className="flex items-center flex-col lg:flex-row-reverse p-0 justify-between gap-8 lg:gap-0">
                    <div className='w-5/12'>
                        <img
                            src={bannerImg}
                            alt="Hero banner"
                            className="max-w-125 w-full rounded-lg"
                        />
                    </div>

                    <div className='lg:max-w-160 w-11/12 lg:w-8/15 space-y-4 flex flex-col lg:items-start items-center'>
                        <div className='flex items-center gap-2 bg-[#E1E7FF] w-fit rounded-full px-4 py-2'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.2" width="16" height="16" rx="8" fill="url(#paint0_linear_2_340)" />
                                <rect opacity="0.4" x="2" y="2" width="12" height="12" rx="6" fill="url(#paint1_linear_2_340)" />
                                <rect x="5" y="5" width="6" height="6" rx="3" fill="url(#paint2_linear_2_340)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2_340" x1="-5.10067" y1="8.91954" x2="16.009" y2="8.60591" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4F39F6" />
                                        <stop offset="1" stop-color="#9514FA" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_340" x1="-1.8255" y1="8.68966" x2="14.0068" y2="8.45443" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4F39F6" />
                                        <stop offset="1" stop-color="#9514FA" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2_340" x1="3.08725" y1="8.34483" x2="11.0034" y2="8.22722" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4F39F6" />
                                        <stop offset="1" stop-color="#9514FA" />
                                    </linearGradient>
                                </defs>

                                <animateTransform
                                    attributeName="transform"
                                    type="scale"
                                    values="1 1 8 8;1.6 1.6 8 8;1 1 8 8"
                                    dur="3s"
                                    calcMode="spline"
                                    keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="1;0.4;1"
                                    dur="3s"
                                    calcMode="spline"
                                    keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                                    repeatCount="indefinite"
                                />
                            </svg>

                            <h3 className='font-medium text-base bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: Ai-Powered Tools Available</h3>
                        </div>
                        <h1 className="text-7xl font-extrabold text-black10 leading-21">Supercharge Your<br />Digital Workflow</h1>

                        <p className="text-justify lg:text-left text-lg leading-10 text-gray62">Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                        </p>

                        <div className='flex items-center gap-4'>
                            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white h-fit py-3.75 px-4 font-bold rounded-full'>Explore Products</button>

                            <button className="btn border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-0.25 h-fit rounded-full">
                                <div className='btn bg-white h-full w-full py-3.25 px-3.5 rounded-full'>
                                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent flex items-center gap-2'><Play className='text-[#4F39F6]' size={24} /><span className='font-bold'>Get Started</span></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;