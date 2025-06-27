import React, { useEffect, useState } from 'react'
// Get Product
import { useProduct } from '@/api/hooks/useProduct';
// CSS
import "./styles.css";
// Components
import Product from '@/components/Product/Product';
// Antd
import { Pagination } from 'antd';

const Shop = () => {
  // Throwing to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [skip, setSkip] = useState(3);
  // Get
  const { data, isLoading } = useProduct({ limit: 20, skip: (skip - 1) * 20 });
  const productData = data?.data;

  const handleChange = (page) => {
    setSkip(page);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 500);
  }

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
      <div className='container'>
        <div className='products_wrapper py-4 pb-8 sm:pb-10 md:pb-12 lg:pb-16'>
          <Product data={productData} loading={isLoading} limit={20} />
        </div>
        <div className='flex items-center justify-center mb-14 md:mb-[70px] lg:mb-[85px]'>
          <Pagination
            className='custom-pagination !gap-1 sm:!gap-0'
            pageSize={20}
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