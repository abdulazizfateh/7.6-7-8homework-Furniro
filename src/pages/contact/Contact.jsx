import React, { useEffect, useState } from 'react'
// CSS 
import "./styles.css";
// Antd
import { message, Form, Input } from 'antd';
// Redux
import { clearCart } from '@/redux/features/cart.slice';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // Outside button
    const [form] = Form.useForm();

    // Form
    const onFinish = values => {
        console.log('Success:', values);
        form.resetFields();
        navigate("/");
    };


    return (
        <section className='section_contact'>
            <div className='container'>
                <div className='contact_wrapper py-10 lg:pb-[85px]'>
                    <h3 className='title text-center mb-2 md:mb-3'>Get In Touch With Us</h3>
                    <p className='text-sm md:text-base font-[P4] text-secondary-text-500 w-[70%] mx-auto text-center mb-4 md:mb-7 lg:mb-10'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    <div className='form_wrapper grid grid-cols-2 gap-5'>
                        <div>
                            <div className="space-y-8 p-6 font-[P4] text-secondary-text-500">
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h2 className="font-[P5] text-xl text-primary-text-900">Address</h2>
                                        <p>236 5th SE Avenue, New York NY10000, United States</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h2 className="font-[P5] text-xl text-primary-text-900">Phone</h2>
                                        <p>Mobile: +(84) 546-6789</p>
                                        <p>Hotline: +(84) 456-6789</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h2 className="font-[P5] text-xl text-primary-text-900">Working Time</h2>
                                        <p>Monday–Friday: 9:00 – 22:00</p>
                                        <p>Saturday–Sunday: 9:00 – 21:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contact_form'>
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
                                        <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-12 !px-4 !border !border-secondary-text-500 !rounded-[10px]' />
                                    </Form.Item>
                                    <Form.Item className='w-full'
                                        label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Last Name</span>}
                                        name="lastName"
                                        rules={[{ required: true, message: 'Please input your last name!' }]}
                                    >
                                        <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-12 !px-4 !border !border-secondary-text-500 !rounded-[10px]' />
                                    </Form.Item>
                                </div>
                                <Form.Item
                                    label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Street Address</span>}
                                    name="streetAddress"
                                    rules={[{ required: true, message: 'Please input your street address!' }]}
                                >
                                    <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-12 !px-4 !border !border-secondary-text-500 !rounded-[10px]' />
                                </Form.Item>
                                <Form.Item
                                    label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Town / City</span>}
                                    name="city"
                                    rules={[{ required: true, message: 'Please input your town / city!' }]}
                                >
                                    <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-12 !px-4 !border !border-secondary-text-500 !rounded-[10px]' />
                                </Form.Item>
                                <Form.Item
                                    label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Zipcode</span>}
                                    name="zipcode"
                                    rules={[{ required: true, message: 'Please input your zipcode!' }]}
                                >
                                    <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-12 !px-4 !border !border-secondary-text-500 !rounded-[10px]' />
                                </Form.Item>
                                <Form.Item
                                    label={<span className='font-[P5] text-primary-text-900 text-sm md:text-base'>Phone Number</span>}
                                    name="phoneNumber"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input className='!font-[P4] !text-primary-text-900 !text-sm md:!text-base !h-12 !px-4 !border !border-secondary-text-500 !rounded-[10px]' />
                                </Form.Item>
                                <button onClick={() => form.submit()} className='border border-primary-text-900 rounded-[15px] h-8 md:h-10 lg:h-12 w-[55%]'>
                                    <span className='font-[P4] text-sm sm:text-base lg:text-xl text-primary-text-900'>Submit</span>
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact