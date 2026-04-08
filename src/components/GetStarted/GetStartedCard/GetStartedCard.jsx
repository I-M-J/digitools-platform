import React from 'react';

const GetStartedCard = ({ item }) => {
    return (
        <div className='boder-2 border-[#F1F1F1] rounded-2xl px-6 py-22 relative space-y-4 border-2 flex flex-col items-center text-center'>
            <div className="p-5 rounded-full bg-[#9514FA]/10 w-fit">
                <img className='w-15' src={`/assets/${item.image}`} alt="" />
            </div>

            <h3 className='font-bold text-2xl text-black10'>{item.title}</h3>

            <p className='text-base font-normal text-gray62 leading-5'>{item.description}</p>
        </div>
    );
};

export default GetStartedCard;