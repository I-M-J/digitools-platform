import React, { use } from 'react';
import PricingCard from './PricingCard/PricingCard';

const Pricing = ({ pricingDataPromise }) => {
    const pricingData = use(pricingDataPromise);

    return (
        <section className='py-30'>
            <div className='max-w-300 w-11/12 xl:3/4 mx-auto space-y-10'>
                <div className='space-y-4 text-center'>
                    <h2 className='text-5xl font-extrabold text-black10'>Simple, Transparent Pricing</h2>

                    <p className='text-base font-normal text-gray62 leading-5'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-7.5'>
                    {
                        pricingData.map((item) => <PricingCard key={item.id} item={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Pricing;