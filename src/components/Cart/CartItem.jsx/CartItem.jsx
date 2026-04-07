import React from 'react';
import { toast } from 'react-toastify';

const CartItem = ({ tool, cart, setCart }) => {
    const handleRemoveFromCart = () => {
        cart.pop(tool);

        setCart([...cart]);

        toast.warn(`${tool.title} removed from cart!`);
    }

    return (
        <div className='bg-[#F9FAFC] p-5 flex items-center justify-between rounded-2xl'>
            <div className='flex items-center gap-4'>
                <div className='w-15 h-15 flex justify-center items-center border border-[#F2F2F2] rounded-full'>
                    <img className='max-w-8' src={`/src/assets/products/${tool.image}`} alt="" />
                </div>

                <div className='flex flex-col gap-2 items-start'>
                    <h2 className='font-semibold text-xl text-black10'>{tool.title}</h2>
                    <h3 className='font-medium leading-5 text-gray62'>${tool.price}<span>/{tool.pricingType}</span></h3>
                </div>
            </div>

            <div>
                <button onClick={handleRemoveFromCart} className='font-bold text-base text-[#FF3980] hover:cursor-pointer'>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;