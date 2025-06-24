import React from 'react'
// Icons & Images
import iconFilter from "@/assets/images/icon-filter.svg";
import iconCategory from "@/assets/images/icon-category.svg";
import iconCatalog from "@/assets/images/icon-catalog.svg";

const Category = () => {

    return (
        <section className='section_category hidden bg-secondary lg:block'>
            <div className="container">
                <div className="category_wrapper h-16 lg:h-[100px] flex items-center justify-between">
                    <div className='flex items-center h-9'>
                        <div className='flex items-center gap-6 pr-8 border-r-[2px] border-secondary-text-500 h-full'>
                            <div className='flex items-center gap-3'>
                                <img src={iconFilter} alt="Icon Filter" />
                                <span className='font-[P4] text-base md:text-lg lg:text-xl text-primary-text-900'>Filter</span>
                            </div>
                            <div>
                                <img src={iconCategory} alt="Icon Category" />
                            </div>
                            <div>
                                <img src={iconCatalog} alt="Icon Catalog" />
                            </div>
                        </div>
                        <div className='pl-8'>
                            <span>Showing 1–16 of 32 results</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='flex items-center gap-4'>
                            <span className='font-[P4] text-base md:text-lg lg:text-xl text-primary-text-900'>Show</span>
                            <div className='size-14 bg-white flex items-center justify-center'>
                                <span className='font-[P4] text-base md:text-lg lg:text-xl text-secondary-text-500'>16</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span className='font-[P4] text-base md:text-lg lg:text-xl text-primary-text-900'>Sort by</span>
                            <div className='bg-white px-8 h-14 w-48 flex items-center'>
                                <span className='font-[P4] text-base md:text-lg lg:text-xl text-secondary-text-500'>Default</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Category);