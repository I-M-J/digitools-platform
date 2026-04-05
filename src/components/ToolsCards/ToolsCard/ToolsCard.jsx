import { Check } from 'lucide-react';
import React from 'react';

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

const ToolsCard = ({ tool }) => {
    return (
        <div className='p-6 space-y-4 relative border-2 border-[#F2F2F2] rounded-2xl'>
            <div className={`absolute top-2.5 right-2.5 rounded-full px-3 py-1.5 font-medium text-sm ${badgeStyler(tool.badgeColor)}`}>{tool.badge}</div>

            <div className='w-15 h-15 flex justify-center items-center border border-[#F2F2F2] rounded-full'>
                <img className='max-w-8' src={`/src/assets/products/${tool.image}`} alt="" />
            </div>

            <h2>{tool.title}</h2>

            <p>{tool.description}</p>

            <h3>${tool.price}<span>/{tool.pricingType}</span></h3>

            <div>
                <ul>
                    {
                        tool.features.map((feature, index) => <li key={index}><Check size={20} color="#30B868" />{feature}</li>)
                    }
                </ul>
            </div>

            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white h-fit py-3.75 w-full font-bold rounded-full'>Explore Products</button>
        </div>
    );
};

export default ToolsCard;