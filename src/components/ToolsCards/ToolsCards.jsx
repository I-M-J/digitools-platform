import React, { use } from 'react';
import ToolsCard from './ToolsCard/ToolsCard';

const ToolsCards = ({ toolsDataPromise }) => {
    const toolsData = use(toolsDataPromise);

    return (
        <section>
            <div className='max-w-300 mx-auto w-11/12 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5'>
                {
                    toolsData.map((tool) => <ToolsCard key={tool.id} tool={tool} />)
                }
            </div>
        </section>
    );
};

export default ToolsCards;