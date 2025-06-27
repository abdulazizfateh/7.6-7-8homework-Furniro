import React, { useEffect, useState } from 'react'
// Icons 
import iconDelete from "@/assets/images/icon-delete.svg";
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/redux/features/cart.slice';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const navigate = useNavigate();

    // Dispatch
    const dispatch = useDispatch();
    // UseSelector
    const cartData = useSelector(state => state.cartSlice.cart);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const handleIncreaseProductQuantity = (product) => {
        dispatch(increaseQuantity(product));
    }
    const handleDecreaseProductQuantity = (product) => {
        dispatch(decreaseQuantity(product));
    }

    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal((cartData.reduce(((sum, item) => sum + (item.quantity * item.price)), 0)).toFixed(2));
    }, [cartData])


    return (
        <>
            <section className='section_cart'>
                <div className='container'>
                    <div className='cart_wrapper min-h-[calc(80dvh-56px)] sm:min-h-[calc(80dvh-65px)] md:min-h-[calc(80dvh-70px)] lg:min-h-[calc(80dvh-85px)] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 md:gap-6 lg:gap-7 py-10 lg:pb-[85px]'>
                        <div className='cart_products'>
                            <div className='grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 font-[P4] text-secondary-text-700 text-sm md:text-base'>
                                {
                                    cartData.length <= 0 ? <div className='h-76 flex flex-col gap-1.5 items-center justify-center border border-border rounded-[10px]'>
                                        <p>You have'nt added products to cart yet</p>
                                        <Link to={"/shop"} className='text-primary-text-900'>Back to Shop</Link>
                                    </div> :
                                        cartData.map(product => (
                                            <div key={product.id} className='flex items-center'>
                                                <div className='flex items-center gap-4 pr-3 w-[340px]'>
                                                    <div className='size-[105px] rounded-[10px] bg-[#B88E2F38]'>
                                                        <img className='h-full w-full object-contain' src={product.thumbnail} alt={product.title} />
                                                    </div>
                                                    <p className=''>{product.title}</p>
                                                </div>
                                                <p className='w-[150px]'>${product.price}</p>
                                                <div className='w-[130px] flex items-center gap-3'>
                                                    <button disabled={product.quantity <= 1} onClick={() => handleDecreaseProductQuantity(product)} className='cursor-pointer font-[P5] disabled:text-secondary-text-300'>-</button>
                                                    <p className='text-primary-text-900'>{product.quantity}</p>
                                                    <button onClick={() => handleIncreaseProductQuantity(product)} className='cursor-pointer font-[P5]'>+</button>
                                                </div>
                                                <p className='w-[140px] text-primary-text-900'>${(product.quantity * product.price).toFixed(2)}</p>
                                                <img onClick={() => handleRemoveFromCart(product.id)} className='w-5 md:w-6 cursor-pointer' src={iconDelete} alt="Icon Delete" />
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                        <div className='cart_calc_total self-start bg-secondary p-4 h-76 rounded-[10px] px-6'>
                            <p className='font-[P6] text-center text-primary-text-900 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32px] mb-8 sm:mb-10 lg:mb-14'>Cart Totals</p>
                            <div className='flex flex-col gap-2 mb-[22px]'>
                                {
                                    cartData.map((product) => (
                                        <div key={product.id} className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <p className='font-[P4] text-secondary-text-500 text-sm md:text-base'>{product.title}</p>
                                                <div className='flex items-center gap-1 font-[P5] text-primary-text-900 text-xs md:text-sm'>
                                                    <p>X</p>
                                                    <p>{product.quantity}</p>
                                                </div>
                                            </div>
                                            <p className='font-[P3] text-primary-text-900 text-sm md:text-md'>${(product.price * product.quantity).toFixed(2)}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center justify-between mx-auto mb-6 sm:mb-8 lg:mb-10'>
                                <p className='font-[P5] text-primary-text-900 text-sm md:text-base'>Total</p>
                                <p className='font-[P5] text-sm sm:text-base lg:text-xl text-primary'>${total}</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button onClick={() => navigate("/checkout")} className='rounded-[15px] border border-black h-8 md:h-10 lg:h-12 px-7 sm:px-9 md:px-11 lg:px-14'>
                                    <span className='font-[P4] text-sm md:text-base text-primary-text-900'>Check Out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart