import React, { use } from 'react';
import ToolsCard from './ToolsCard/ToolsCard';

const ToolsCards = ({ toolsDataPromise, cart, setCart }) => {
    const toolsData = use(toolsDataPromise);

    return (
        <section className='pb-30'>
            <div className='max-w-300 mx-auto w-11/12 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5'>
                {
                    toolsData.map((tool) => <ToolsCard key={tool.id} tool={tool} cart={cart} setCart={setCart} />)
                }
            </div>
        </section>
    );
};

export default ToolsCards;