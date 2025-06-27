import React, { useEffect, useState } from 'react'
// Icons 
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
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
                    <div className='cart_wrapper min-h-[calc(100dvh-56px)] relative sm:min-h-[calc(100dvh-65px)] md:min-h-[calc(100dvh-70px)] lg:min-h-[calc(100dvh-85px)] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 md:gap-6 lg:gap-7 py-10 lg:pb-[85px]'>
                        <div className='cart_products'>
                            <div className='grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 font-[P4] text-secondary-text-700 text-sm md:text-base'>
                                {
                                    cartData.length <= 0 ? <div className='h-76 flex flex-col gap-1.5 items-center justify-center border border-border rounded-[10px]'>
                                        <p>You have'nt added products to cart yet</p>
                                        <Link to={"/shop"} className='text-primary-text-900'>Back to Shop</Link>
                                    </div> :
                                        cartData.map(product => (
                                            <div key={product.id} className='flex items-center justify-between gap-20 border border-border p-4 rounded-[10px]'>
                                                <div onClick={() => navigate(`/product/${product.id}`)} className='cursor-pointer flex items-center gap-4 pr-3 flex-1'>
                                                    <div className='size-[80px] rounded-[10px] border border-border'>
                                                        <img className='h-full w-full object-contain' src={product.thumbnail} alt={product.title} />
                                                    </div>
                                                    <p className=''>{product.title}</p>
                                                </div>
                                                <p className='select-none'>${product.price}</p>
                                                <div className='flex items-center justify-between'>
                                                    <button disabled={product.quantity <= 1} onClick={() => handleDecreaseProductQuantity(product)} className='cursor-pointer'>
                                                        <MinusOutlined className={`select-none ${product.quantity === 1 ? "!text-secondary-text-300" : "!text-primary-text-900"}`} />
                                                    </button>
                                                    <div className='w-8'>
                                                        <p className='font-[P5] text-primary-text-900 text-center select-none'>{product.quantity}</p>
                                                    </div>
                                                    <button onClick={() => handleIncreaseProductQuantity(product)} className='cursor-pointer'>
                                                        <PlusOutlined className='select-none !text-primary-text-900' />
                                                    </button>
                                                </div>
                                                <p className='text-primary-text-900 select-none w-14'>${(product.quantity * product.price).toFixed(2)}</p>
                                                <DeleteOutlined onClick={() => handleRemoveFromCart(product.id)} className='text-5 md:text-7 cursor-pointer !text-primary-text-900' />
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                        <div className='cart_calc_total self-start sticky top-[30px] bg-secondary p-4 min-h-76 rounded-[10px] px-6'>
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