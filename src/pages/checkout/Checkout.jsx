import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
// CSS 
import "./styles.css";
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Antd
import { message, Form, Input, Radio } from 'antd';
// Redux
import { clearCart } from '@/redux/features/cart.slice';

const Checkout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const navigate = useNavigate();
    // Dispatch
    const dispatch = useDispatch();

    // Checkout Defender
    const cartData = useSelector(state => state.cartSlice.cart);
    if (!cartData.length) {
        return <Navigate replace to={"/cart"} />;
    }
    // Outside button
    const [form] = Form.useForm();

    // Form
    const onFinish = values => {
        console.log('Success:', values);
        form.resetFields();
        navigate("/");
        message.success("Ordered");
        dispatch(clearCart());
    };

    // Total
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal((cartData.reduce(((sum, item) => sum + (item.quantity * item.price)), 0)).toFixed(2));
    }, [cartData])
    // Radio
    const [valueBankRadio, setValueBankRadio] = useState("Direct Bank Transfer");
    const onBankRadioChange = e => {
        setValueBankRadio(e.target.value);
    };

    return (
        <section className='section_checkout'>
            <div className='container'>
                <div className='checkout_wrapper py-10 lg:pb-[85px]'>
                    <h3 className='font-[P6] text-primary-text-900 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-2xl md:text-3xl lg:text-[36px]'>Billing details</h3>
                    <div className='checkout_wrapper grid grid-cols-2 gap-5'>
                        <div className='checkout_form'>
                            <Form className=''
                                form={form}
                                name="basic"
                                style={{ maxWidth: 453 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                autoComplete="off"
                                layout='vertical'
                            >
                                <div className='flex items-center gap-4'>
                                    <Form.Item className='w-full'
                                        label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>First Name</span>}
                                        name="firstName"
                                        rules={[{ required: true, message: 'Please input your first name!' }]}
                                    >
                                        <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-14 !border !border-secondary-text-500 !rounded-[10px]' />
                                    </Form.Item>
                                    <Form.Item className='w-full'
                                        label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Last Name</span>}
                                        name="lastName"
                                        rules={[{ required: true, message: 'Please input your last name!' }]}
                                    >
                                        <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-14 !border !border-secondary-text-500 !rounded-[10px]' />
                                    </Form.Item>
                                </div>
                                <Form.Item
                                    label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Street Address</span>}
                                    name="streetAddress"
                                    rules={[{ required: true, message: 'Please input your street address!' }]}
                                >
                                    <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-14 !border !border-secondary-text-500 !rounded-[10px]' />
                                </Form.Item>
                                <Form.Item
                                    label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Town / City</span>}
                                    name="city"
                                    rules={[{ required: true, message: 'Please input your town / city!' }]}
                                >
                                    <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-14 !border !border-secondary-text-500 !rounded-[10px]' />
                                </Form.Item>
                                <Form.Item
                                    label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Zipcode</span>}
                                    name="zipcode"
                                    rules={[{ required: true, message: 'Please input your zipcode!' }]}
                                >
                                    <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-14 !border !border-secondary-text-500 !rounded-[10px]' />
                                </Form.Item>
                                <Form.Item
                                    label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Phone Number</span>}
                                    name="phoneNumber"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-14 !border !border-secondary-text-500 !rounded-[10px]' />
                                </Form.Item>
                            </Form>
                        </div>
                        <div className='checkout_order self-start px-5 md:px-7 lg:px-9'>
                            <div className='checkout_product_info border-b border-border pb-7 md:pb-9 lg:pb-[40px]'>
                                <div className='flex items-center justify-between mb-[14px]'>
                                    <p className='font-[P5] text-base sm:text-lg md:text-xl lg:text-2xl text-primary-text-900'>Product</p>
                                    <p className='font-[P5] text-base sm:text-lg md:text-xl lg:text-2xl text-primary-text-900'>Subtotal</p>
                                </div>
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
                                <div className='flex items-center justify-between'>
                                    <p className='font-[P4] text-primary-text-900 text-sm md:text-base'>Total</p>
                                    <p className='font-[P7] text-primary text-base sm:text-lg md:text-xl lg:text-2xl'>${total}</p>
                                </div>
                            </div>
                            <div className='checkout_payment py-4 lg:py-[22.5px]'>
                                <div className='flex items-center gap-3 md:gap-4 mb-3'>
                                    <div className='size-4 bg-primary-text-900 rounded-full'></div>
                                    <p className='font-[P4] text-primary-text-900 text-sm md:text-base'>{valueBankRadio}</p>
                                </div>
                                <div className='h-[72px] mb-4 lg:mb-[22.5px]'>
                                    {
                                        valueBankRadio === "Direct Bank Transfer"
                                            ?
                                            <p className='font-[P3] text-secondary-text-500 text-sm md:text-base'>Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                                Your order will not be shipped until the funds have cleared in our account.</p>
                                            : <p className='font-[P3] text-secondary-text-500 text-sm md:text-base'>Make your payment when you are picking the order. Please use your Order ID as the payment reference.</p>
                                    }
                                </div>
                                <div className='mb-4 lg:mb-[22.5px]'>
                                    <Radio.Group
                                        style={{ display: "flex", flexDirection: "column", gap: "11px" }}
                                        onChange={onBankRadioChange}
                                        value={valueBankRadio}
                                    >
                                        <Radio value={"Direct Bank Transfer"}>
                                            <span className='font-[P5] text-secondary-text-500 text-sm md:text-base'>Direct Bank Transfer</span>
                                        </Radio>
                                        <Radio value={"Cash On Delivery"}>
                                            <span className='font-[P5] text-secondary-text-500 text-sm md:text-base'>Cash On Delivery</span>
                                        </Radio>
                                    </Radio.Group>
                                </div>
                                <div className='mb-6 md:mb-8 lg:mb-10'>
                                    <p className='font-[P3] text-sm md:text-base text-primary-text-900'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-[P6]'>privacy policy.</span></p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button onClick={() => form.submit()} className='border border-primary-text-900 rounded-[15px] h-10 md:h-12 lg:h-16 w-[55%]'>
                                        <span className='font-[P4] text-sm sm:text-base lg:text-xl text-primary-text-900'>Place order</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout