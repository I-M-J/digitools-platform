import React from 'react';

const Transform = () => {
    return (
        <section className='py-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-w-300 w-11/12 xl:w-3/4 mx-auto flex flex-col gap-4 items-center text-center'>
                <h2 className='font-extrabold text-4xl text-white'>Ready to Transform Your Workflow?</h2>

                <p className='leading-6 text-white/90'>Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>

                <div className='flex gap-4 mt-6'>
                    <button className='btn h-fit py-3.75 px-4 rounded-full bg-white border-none font-semibold shadow-none'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>

                    <button className='btn h-fit px-8.75 py-3.75 rounded-full font-semibold border border-white bg-transparent text-white shadow-none'>View Pricing</button>
                </div>

                <p className='leading-5 text-white/80'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </section>
    );
};

export default Transform;