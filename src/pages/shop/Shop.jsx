import React, { useEffect, useState } from 'react'
// Get Product
import { useProduct } from '@/api/hooks/useProduct';
// CSS
import "./styles.css";
// Components
import Category from '@/components/Category/Category';
import Product from '@/components/Product/Product';
import NavHero from '@/components/NavHero/NavHero';
// Antd
import { Pagination } from 'antd';

const Shop = () => {
  // Throwing to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [skip, setSkip] = useState(1);
  // Get
  const { data, isLoading } = useProduct({ limit: 16, skip: (skip - 1) * 16 });
  const productData = data?.data;

  const handleChange = (page) => {
    setSkip(page);
  }

  // Smooth Relocation
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 400,
        behavior: 'smooth',
      });
    }, 500);
  }, [skip])

  // Pagination Responsive for Mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <NavHero page={"Shop"} />
      <Category />
      <div className='container'>
        <div className='products_wrapper py-8 sm:py-10 md:py-12 lg:py-16'>
          <Product data={productData} loading={isLoading} limit={16} />
        </div>
        <div className='flex items-center justify-center mb-14 md:mb-[70px] lg:mb-[85px]'>
          <Pagination
            className='custom-pagination !gap-1 sm:!gap-0'
            pageSize={16}
            total={productData?.total}
            onChange={handleChange}
            showSizeChanger={false}
            showLessItems={isMobile}
            responsive
          />
        </div>
      </div>
    </>
  )
}

export default React.memo(Shop);