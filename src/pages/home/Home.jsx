import React, { useEffect } from 'react'
// Components
import Hero from '@/components/Hero/Hero';
import Browse from '@/components/Browse/Browse';
import Product from '@/components/Product/Product';
// Get Product
import { useProduct } from '@/api/hooks/useProduct';
// Navigate
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const { data, isLoading } = useProduct({ limit: 10, skip: 42 });
  const productData = data?.data;
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <Browse />
      <section className='section_products'>
        <div className='container'>
          <div className='products_wrapper py-9 sm:py-10 md:pt-11 md:pb-14 lg:pt-14 lg:pb-[68px]'>
            <div className='mb-3 sm:mb-4 md:mb-5 lg:mb-6'>
              <h2 className='title text-center'>Our Products</h2>
            </div>
            <Product data={productData} loading={isLoading} limit={8} />
            <div className='flex items-center justify-center mt-5 sm:mt-6 md:mt-8 lg:mt-[44px]'>
              <button onClick={() => navigate("/shop")} className='rounded-lg border border-primary h-8 sm:h-10 md:h-11 px-4 md:px-6'>
                <span className='font-[P4] text-primary text-sm md:text-base'>Show more</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default React.memo(Home);