import React from 'react';


class Landmark extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
            <div className='flex items-center gap-x-2 p-3 border-2 border-gray-600 rounded-lg'>
                <span className='material-symbols-outlined text-4xl text-gray-300'>
                    business_center
                </span>

                {/* 
                    pin_drop
                    campaign
                    cable
                    diversity_1
                    loyalty
                */}

                <div className='flex flex-col'>
                    <span className='uppercase text-xs text-gray-500 font-semibold'>
                        working at
                    </span>

                    <span className='capitalize text-lg font-medium'>
                        LinkedIn
                    </span>
                </div>
            </div>
        )
    }
}


export default Landmark;