import React, { useState } from 'react'
// CSS
import "./styles.css"
// Icons & Images
import iconShare from "@/assets/images/icon-share.svg";
import iconCompare from "@/assets/images/icon-compare.svg";
import iconLike from "@/assets/images/icon-like.svg";

const Product = ({ data }) => {
    const productData = data?.products;
    const [isMouseOvered, setIsMouseOvered] = useState(null);
    const handleDetail = () => {
        console.log("Detail");
    }

    return (
        <div className='product_cards grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3.5'>
            {
                productData?.map(product => (
                    <div onMouseLeave={() => setIsMouseOvered(null)} key={product.id} className='product_card border-[.5px] border-border flex flex-col relative rounded-2xl overflow-hidden'>
                        <div className='bg-white relative'>
                            <img onMouseOver={() => setIsMouseOvered(product.id)} className='w-full h-[180px] sm:h-[240px] lg:h-[280px] xl:h-[300px] object-cover' src={product.thumbnail} alt="Image Product" />
                            {
                                product.discountPercentage >= 10 ? <div className='absolute p-1 top-4 right-4 sm:top-5 sm:right-5 lg:top-6 lg:right-6 flex items-center justify-center bg-highlight-red size-8 sm:size-9 lg:size-12 rounded-full'>
                                    <span className='text-white font-[P5] text-xs sm:text-sm lg:text-base'>-{product.discountPercentage.toFixed(0)}%</span>
                                </div> : <></>
                            }
                        </div>
                        <div className='p-2 sm:p-3 lg:p-4 pb-4 sm:pb-5 md:pb-6 lg:pb-[30px] bg-secondary-bg flex-1 flex flex-col gap-1.5 md:gap-2'>
                            <h4 className='font-[P6] line-clamp-1 text-primary-text-600 text-xs sm:text-sm lg:text-lg'>{product.title}</h4>
                            <p className='font-[P5] line-clamp-2 text-secondary-text-700 text-xs sm:text-sm lg:text-base'>{product.description}</p>
                            <div className='flex-1 flex items-end'>
                                <p className='font-[P6] text-primary-text-600 text-xs sm:text-sm lg:text-lg'>${product.price}<span></span></p>
                            </div>
                        </div>
                        {
                            product.id === isMouseOvered &&
                            <div
                                className='product_card_actions rounded-2xl z-50 absolute top-0 left-0 w-full h-full bg-primary-text-600/50 backdrop-blur-xs flex flex-col items-center pt-[70%] lg:pt-[90%] xl:pt-[95%] gap-3 sm:gap-4 lg:gap-6'>
                                <button className='pointer-events-auto h-7 sm:h-8 md:h-10 lg:h-12 w-[75%] font-[P6] text-xs sm:text-sm lg:text-base text-primary bg-white'>Add to cart</button>
                                <div className='flex flex-col items-center lg:justify-between lg:flex-col xl:flex-row lg:w-[90%] gap-3 pointer-events-auto'>
                                    <div className='flex items-center gap-1'>
                                        <img src={iconShare} alt="Icon Share" />
                                        <span className='font-[P6] text-xs sm:text-sm lg:text-base text-white'>Share</span>
                                    </div>
                                    <div onClick={() => handleDetail()} className='flex items-center gap-1'>
                                        <img src={iconCompare} alt="Icon Compare" />
                                        <span className='font-[P6] text-xs sm:text-sm lg:text-base text-white'>Full info</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <img src={iconLike} alt="Icon Like" />
                                        <span className='font-[P6] text-xs sm:text-sm lg:text-base text-white'>Like</span>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                ))
            }
        </div >
    )
}

export default React.memo(Product);