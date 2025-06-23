import React from 'react'

const LoadingProduct = ({ cardPerPage }) => {
    const arr = new Array(cardPerPage).fill("");

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-4 md:gap-6 lg:gap-8'>
            {
                arr.map((product, index) => (
                    <div key={index} className='rounded-2xl overflow-hidden border-[.5px] border-border'>
                        <div className='h-[180px] sm:h-[240px] lg:h-[280px] xl:h-[300px] bg-white'></div>
                        <div className='h-[100px] sm:h-[124px] md:h-[132px] lg:h-[166px] bg-secondary-bg'></div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(LoadingProduct);