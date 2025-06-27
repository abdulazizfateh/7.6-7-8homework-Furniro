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
                <div className={`wishlist_wrapper min-h-[calc(100dvh-56px)] sm:min-h-[calc(100dvh-65px)] md:min-h-[calc(100dvh-70px)] lg:min-h-[calc(100dvh-85px)] ${wishlistData.length ? "" : "flex items-center justify-center"}`}>
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