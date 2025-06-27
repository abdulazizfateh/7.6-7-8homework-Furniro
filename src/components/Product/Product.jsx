import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// Icons & Images
import { HeartOutlined, HeartFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons"
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity } from '@/redux/features/cart.slice';
import { toggleToWishlist } from '@/redux/features/wishlist.slice';

// Loading for Product Cards 
const LoadingProduct = ({ cardPerPage }) => {
    const arr = new Array(cardPerPage).fill("");

    return (
        arr.map((_, index) => (
            <div key={index} className='rounded-xl overflow-hidden border border-[#eee]'>
                <div className='h-[180px] sm:h-[240px] lg:h-[280px] xl:h-[300px] bg-white'></div>
                <div className='h-[100px] sm:h-[124px] md:h-[132px] lg:h-[166px] bg-secondary-bg'></div>
            </div>
        ))
    )
}

const Product = ({ data, loading, limit: cardPerPage }) => {
    // Dispatch
    const dispatch = useDispatch();
    // Use Selector
    const cartData = useSelector(state => state.cartSlice.cart);
    const wishlistData = useSelector(state => state.wishlistSlice.wishlist);

    const productData = data?.products;
    const navigate = useNavigate();

    const handleMouseOver = (id) => {
        setIsMouseOvered(id);
    }

    // Add to Cart
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const handleDetail = (id) => {
        navigate(`/product/${id}`);
    }
    const handleToggleWishlist = (product) => {
        dispatch(toggleToWishlist(product));
    }


    return (
        <div className='product_cards grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-3.5'>
            {
                loading
                    ?
                    <LoadingProduct cardPerPage={cardPerPage} />
                    :
                    productData?.map(product => (
                        <div key={product.id} className='product_card group border border-[#eee] flex flex-col relative rounded-xl overflow-hidden'>
                            <div className='bg-white overflow-hidden relative'>
                                <img onClick={() => handleDetail(product.id)} className='select-none cursor-pointer group-hover:scale-105 duration-300 ease-out w-full h-[180px] sm:h-[240px] lg:h-[280px] xl:h-[300px] object-cover' src={product.thumbnail} alt="Image Product" />
                                {
                                    product.discountPercentage >= 10 ? <div className='absolute p-1 top-2 left-2 sm:top-3.5 sm:left-3.5 lg:top-4 lg:left-4 flex items-center justify-center bg-highlight-red size-7 sm:size-8 lg:size-10 rounded-full'>
                                        <span className='text-white font-[P4] text-xs md:text-sm'>-{product.discountPercentage.toFixed(0)}%</span>
                                    </div> : <></>
                                }
                                <div className='absolute p-1 top-2 right-2 sm:top-3.5 sm:right-3.5 lg:top-4 lg:right-4 duration-75 ease-out'>
                                    {
                                        wishlistData.some(item => item.id === product.id)
                                            ?
                                            <HeartFilled onClick={() => handleToggleWishlist(product)} className='!text-primary cursor-pointer text-4 md:text-lg' />
                                            :
                                            <HeartOutlined onClick={() => handleToggleWishlist(product)} className='!text-primary cursor-pointer text-4 md:text-lg' />
                                    }
                                </div>
                            </div>
                            <div className='p-2 sm:p-3 lg:p-4 bg-secondary-bg flex-1 flex flex-col gap-1.5 md:gap-2'>
                                <h4 onClick={() => handleDetail(product.id)} className='font-[P5] line-clamp-1 text-primary-text-600 text-sm md:text-base duration-200 cursor-pointer hover:text-primary-text-900'>{product.title}</h4>
                                <p className='font-[P4] line-clamp-2 text-secondary-text-700 text-xs md:text-sm'>{product.description}</p>
                                <div className='flex-1 flex items-end justify-between mb-1.5 lg:mb-2.5'>
                                    <p className='font-[P5] text-primary-text-600 text-sm md:text-base'>${product.price}<span></span></p>
                                </div>
                                {
                                    cartData.some(item => item.id === product.id)
                                        ?
                                        <div className='h-9 bg-white w-full rounded-md flex items-center gap-3 justify-between py-1 px-2'>
                                            <MinusOutlined onClick={() => dispatch(decreaseQuantity(product))} className='px-1.5 cursor-pointer rounded-md h-full bg-secondary-bg select-none' />
                                            <span className='text-primary-text-900 select-none'>{cartData.filter(item => item.id === product.id)[0].quantity}</span>
                                            <PlusOutlined onClick={() => dispatch(increaseQuantity(product))} className='px-1.5 cursor-pointer rounded-md h-full bg-secondary-bg select-none' />
                                        </div>
                                        :
                                        <button onClick={() => handleAddToCart(product)} className='h-9 bg-primary w-full rounded-md'>
                                            <span className='font-[P4] text-sm md:text-base text-white select-none'>Add to cart</span>
                                        </button>
                                }
                            </div>
                        </div>
                    ))
            }
        </div >
    )
}

export default React.memo(Product);