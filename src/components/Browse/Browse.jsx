import React from 'react'
// Images
import imageDining from "@/assets/images/browse-image1.png";
import imageLiving from "@/assets/images/browse-image2.png";
import imageBedroom from "@/assets/images/browse-image3.png";

const Browse = () => {
    const range = [
        {
            id: 1,
            image: imageDining,
            title: "Dining"
        },
        {
            id: 2,
            image: imageLiving,
            title: "Living"
        },
        {
            id: 3,
            image: imageBedroom,
            title: "Bedroom"
        }
    ];
    return (
        <section className='section_browse'>
            <div className="container">
                <div className="browse_wrapper pt-9 sm:pt-10 md:pt-11 lg:pt-14 md:px-5 xl:px-7">
                    <div className='flex flex-col gap-0.5 mb-8 sm:mb-9 md:mb-11 lg:mb-16'>
                        <h2 className='font-[P7] text-center text-primary-text-700 text-xl sm:text-2xl md:text-[28px] lg:text-[32px]'>Browse The Range</h2>
                        <p className='font-[P4] text-center w-[85%] mx-auto text-secondary-text-900 text-sm sm:text-base md:text-lg lg:text-xl'>Furnish every room with meaning, not just furniture</p>
                    </div>
                    <div className='grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5'>
                        {
                            range.map(item => (
                                <div key={item.id}>
                                    <img className='w-full h-40 object-cover rounded-lg sm:h-64 md:h-[350px] lg:h-96 xl:h-[480px]' src={item.image} alt="Image Room" />
                                    <p className='font-[P6] text-sm sm:text-lg md:text-xl lg:text-2xl text-center pt-3 sm:pt-4 md:pt-6 lg:pt-[30px]'>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Browse);