import React from 'react'
// Components
import Hero from '@/components/Hero';
import Browse from '@/components/Browse';
import Product from '@/components/Product/Product';
import LoadingProduct from '@/components/LoadingProduct';
// Get Product
import { useProduct } from '@/api/hooks/useProduct';
// Navigate
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { data, isLoading } = useProduct({ limit: 16, skip: 42 });
  const productData = data?.data;
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <Browse />
      <section className='section_products'>
        <div className='container'>
          <div className='products_wrapper py-9 sm:py-10 md:pt-11 md:pb-14 lg:pt-14 lg:pb-[68px]'>
            <div className='mb-5 sm:mb-6 md:mb-7 lg:mb-8'>
              <h2 className='font-[P7] text-primary-text-600 text-2xl sm:text-[28px] md:text-3xl lg:text-[40px] text-center'>Our Products</h2>
            </div>
            <Product data={productData} />
            {
              isLoading && <LoadingProduct cardPerPage={16} />
            }
            <div className='flex items-center justify-center mt-5 sm:mt-6 md:mt-8 lg:mt-[44px]'>
              <button onClick={() => navigate("/shop")} className='h-7 sm:h-8 md:h-9 lg:h-12 px-12 sm:px-[60px] md:px-[70px] lg:px-[82px] bg-white border border-primary'>
                <span className='font-[P6] text-sm md:text-base text-primary capitalize'>Show more</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default React.memo(Home);