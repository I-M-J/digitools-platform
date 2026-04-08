import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const badgeStyler = (badgeColor) => {
    switch (badgeColor) {
        case "orange":
            return "bg-[#FEF3C6] text-[#BB4D00]";
        case "purple":
            return "bg-[#E1E7FF] text-[#4F39F6]";
        case "green":
            return "bg-[#DBFCE7] text-[#0A883E]";
        default:
            return "bg-gray-200 text-black10";
    }
}

const ToolsCard = ({ tool, cart, setCart }) => {
    let isAddedToCart = cart.some(item => item.id === tool.id);
    // array.some() returns boolean if at least one element satisfies the condition

    const handleAddToCart = () => {
        if (!isAddedToCart) {
            setCart([...cart, tool]);

            isAddedToCart = true;

            toast.success(`${tool.title} added to cart!`);
        } else {
            toast.error(`${tool.title} already in cart!`);
        }
    }

    return (
        <div className='p-6 flex flex-col gap-4 relative border-2 border-[#F2F2F2] rounded-2xl'>
            <div className={`absolute top-2.5 right-2.5 rounded-full px-3 py-1.5 font-medium text-sm ${badgeStyler(tool.badgeColor)}`}>{tool.badge}</div>

            <div className='w-15 h-15 flex justify-center items-center border border-[#F2F2F2] rounded-full'>
                <img className='max-w-8' src={`/assets/products/${tool.image}`} alt="" />
            </div>

            <h2 className='font-bold text-2xl text-black10'>{tool.title}</h2>

            <p className='text-gray62'>{tool.description}</p>

            <h3 className='font-bold text-2xl text-black10'>${tool.price}<span className='font-normal text-base text-gray62'>/{tool.pricingType}</span></h3>

            <ul className='flex-1'>
                {
                    tool.features.map((feature, index) => (
                        <li key={index} className='font-medium leading-5 text-gray62 flex items-center gap-2'><Check size={20} color="#30B868" />{feature}</li>
                    ))
                }
            </ul>

            <button onClick={handleAddToCart} className={`btn ${!isAddedToCart ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-green-400"} text-white h-fit py-3.75 w-full font-bold rounded-full`}>{isAddedToCart ? "Added to Cart" : "Buy Now"}</button>
        </div>
    );
};

export default ToolsCard;