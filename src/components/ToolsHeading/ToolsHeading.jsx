import React from 'react';

const ToolsHeading = ({ activeTab, setActiveTab, cartLength }) => {
    return (
        <section className='pt-30 pb-10'>
            <div className='text-center max-w-3/4 lg:w-1/2 mx-auto flex flex-col gap-4 items-center'>
                <h2 className='font-extrabold text-5xl text-black10'>Premium Digital Tools</h2>

                <p className='leading-5 text-gray62'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

                <div className='flex items-center border border-[#F6F6F6] p-1 rounded-full w-fit'>
                    <button onClick={() => setActiveTab("products")} className={`btn ${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold" : "text-black10 font-medium bg-white border-none"} h-fit py-3.5 px-6 rounded-full`}>Products</button>

                    <button onClick={() => setActiveTab("cart")} className={`btn ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold" : "text-black10 font-medium bg-white border-none"} h-fit py-3.5 px-6 rounded-full`}>Cart ({cartLength})</button>
                </div>
            </div>
        </section>
    );
};

export default ToolsHeading;