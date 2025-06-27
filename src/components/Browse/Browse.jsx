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
                <div className="browse_wrapper pt-8 sm:pt-10 md:pt-12 lg:pt-14 md:px-8 xl:px-10">
                    <div className='flex flex-col gap-0.5 mb-3 sm:mb-4 md:mb-5 lg:mb-6'>
                        <h2 className='title text-center'>Browse The Range</h2>
                        <p className='font-[P4] text-center w-[85%] mx-auto text-secondary-text-900 text-sm md:text-base lg:text-lg'>Furnish every room with meaning, not just furniture</p>
                    </div>
                    <div className='grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5'>
                        {
                            range.map(item => (
                                <div key={item.id}>
                                    <img className='w-full h-40 object-cover rounded-lg sm:h-64 md:h-[350px] lg:h-96 xl:h-[480px]' src={item.image} alt="Image Room" />
                                    <p className='font-[P6] text-sm md:text-base lg:text-lg text-center pt-2.5 sm:pt-3 md:pt-4 lg:pt-5'>{item.title}</p>
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