import React from 'react';

const stats = [
    {
        number: "50K+",
        description: "Active Users"
    },
    {
        number: "200+",
        description: "Premium Tooks"
    },
    {
        number: "4.9",
        description: "Rating"
    },
]

const Stats = () => {
    return (
        <section className='w-full py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-w-300 mx-auto flex flex-col gap-8 md:flex-row justify-between md:divide-x divide-base-100'>
                {
                    stats.map((stat, index) => (
                        <div key={index} className='flex-1 flex items-center justify-center'>
                            <div className='text-center'>
                                <h3 className='text-6xl font-extrabold text-base-100 mb-3'>{stat.number}</h3>
                                <p className='text-2xl font-light text-base-100'>{stat.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Stats;