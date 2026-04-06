import { Check } from 'lucide-react';
import React from 'react';

const PricingCard = ({ item }) => {
    return (
        <div className={`border-2 ${item.isPopular ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white! relative" : "border-[#F2F2F2]"} rounded-2xl p-6 flex flex-col gap-6`}>
            {
                item.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 font-medium text-sm bg-[#FEF3C6] text-[#BB4D00]">{item.badgeText}</div>
                    // left-1/2 pushes the div after the midpoint of the parent
                    // -translate-x-1/2 pulls the div back by half of its own width
                    // -translate-y-1/2 pulls the div up by half of its own height
                )
            }

            <div className='space-y-2'>
                <h3 className={`font-bold text-2xl ${item.isPopular ? "text-white" : "text-black10"}`}>{item.title}</h3>

                <p className={`text-base font-normal leading-5 ${item.isPopular ? "text-white/80" : "text-gray62"}`}>{item.subtitle}</p>
            </div>

            <p className={`font-bold text-4xl ${item.isPopular ? "text-white" : "text-black10"}`}>${item.price}<span className={`font-normal text-xl ${item.isPopular ? "text-white" : "text-gray62"}`}>{item.period}</span></p>

            <ul className='flex-1'>
                {
                    item.features.map((feature, index) => (
                        <li key={index} className={`font-medium leading-5 flex items-center gap-2 ${item.isPopular ? "text-white/90" : "text-gray62"}`}><Check size={20} color={item.isPopular ? "white" : "#30B868"} />{feature}</li>
                    ))
                }
            </ul>
            {
                item.isPopular ? (
                    <button className="bg-white text-black10 rounded-full py-3.75 w-full font-bold"><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>{item.buttonText}</span></button>
                ) : (
                    <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-3.75 w-full font-bold">{item.buttonText}</button>
                )
            }
        </div>
    );
};

export default PricingCard;