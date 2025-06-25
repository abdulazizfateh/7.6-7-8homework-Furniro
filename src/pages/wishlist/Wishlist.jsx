import React from 'react'
import { Link } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Components
import Product from '@/components/Product/Product';

const Wishlist = () => {
    const wishlistData = useSelector(state => state.wishlistSlice.wishlist);
    const wishlistDataProduct = {
        products: wishlistData
    }

    return (
        <section className='section_wishlist'>
            <div className='container'>
                <div className={`wishlist_wrapper min-h-screen  py-7 sm:py-9 md:pt-8 md:pb-14 lg:pt-10 lg:pb-24 ${wishlistData.length ? "" : "flex items-center justify-center"}`}>
                    {
                        wishlistData.length
                            ?
                            <Product data={wishlistDataProduct} limit={wishlistData.length} />
                            :
                            <div className='font-[P4] text-secondary-text-700 text-sm md:text-base'>
                                <p className='mb-1'>You have'nt added products to your wishlist yet</p>
                                <Link to={"/shop"} className='text-primary-text-900 text-center block'>Back to Shop</Link>
                            </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default React.memo(Wishlist);