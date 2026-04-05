import React from 'react';
import CartItem from './CartItem.jsx/CartItem';
import { ShoppingCart } from 'lucide-react';

const Cart = ({ cart, setCart }) => {
    return (
        <section className='pb-30'>
            <div className='max-w-300 mx-auto w-11/12 xl:w-3/4 space-y-6 p-10 border-2 border-[#F2F2F2] rounded-2xl'>
                <h2 className='font-bold text-2xl text-black10'>Your Cart</h2>
                {cart.length > 0 && (
                    <>
                        <div className='space-y-4'>
                            {
                                cart.map(tool => <CartItem key={tool.id} tool={tool} cart={cart} setCart={setCart} />)
                            }
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='text-gray62'>Total:</p>

                            <h3>${cart.reduce((total, currentTool) => total + currentTool.price, 0)}</h3>
                            {/* array.reduce() can be used for summation of array items */}
                        </div>

                        <button onClick={() => setCart([])} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white h-fit py-3.75 w-full font-bold rounded-full'>Proceed to Checkout</button>
                    </>
                )}

                {!cart.length && (
                    <div className='flex flex-col items-center gap-5'>
                        <ShoppingCart size={100} color="#627382" />
                        <p className='text-gray62 text-xl font-bold'>Your Cart is Empty</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;