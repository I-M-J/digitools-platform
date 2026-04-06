import React from 'react';
import GetStartedCard from './GetStartedCard/GetStartedCard';

const getStartedData = [
    {
        id: "01",
        title: "Create Account",
        description: "Sign up for free in seconds. No credit card required to get started.",
        image: "user.png"
    },
    {
        id: "02",
        title: "Choose Products",
        description: "Browse our catalog and select the tools that fit your needs.",
        image: "package.png"
    },
    {
        id: "03",
        title: "Start Creating",
        description: "Download and start using your premium tools immediately.",
        image: "rocket.png"
    }
];

const GetStarted = () => {
    return (
        <section className='py-30 bg-[#F9FAFC]'>
            <div className="max-w-300 w-11/12 xl:w-3/4 mx-auto">
                <div className="space-y-4 text-center mb-10">
                    <h2 className="text-5xl font-extrabold text-black10">Get Started In 3 Steps</h2>
                    <p className="text-base font-normal text-gray62 leading-5">Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5">
                    {
                        getStartedData.map((item) => (
                            <GetStartedCard key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default GetStarted;