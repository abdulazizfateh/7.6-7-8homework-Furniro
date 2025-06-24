import React from 'react'
// Get Product ID
import { useParams } from 'react-router-dom';
// Get Product Data
import { useProductItem } from '@/api/hooks/useProduct';

const Additional = () => {
  const { id } = useParams();
  const { data } = useProductItem(id);
  const productData = data?.data;

  return (
    <div className='flex items-center gap-5 w-full'>
      <div className='flex-1/2'>
        <div className='pb-1.5 lg:pb-2 border-b border-border'>
          <p className='font-[P4] text-secondary-text-900 text-sm md:text-base'><span className='text-secondary-text-500'>Brand:</span> {productData?.brand ? productData?.brand : "Does not belong to a brand"} <span></span></p>
        </div>
        <div className='py-1.5 lg:py-2 border-b border-border'>
          <p className='font-[P4] text-secondary-text-900 text-sm md:text-base'><span className='text-secondary-text-500'>Availability status:</span> {productData?.availabilityStatus}</p>
        </div>
        <div className='py-1.5 lg:py-2 border-b border-border'>
          <p className='font-[P4] text-secondary-text-900 text-sm md:text-base'><span className='text-secondary-text-500'>Return Policy:</span> {productData?.returnPolicy}<span></span></p>
        </div>
        <div className='py-1.5 lg:py-2 border-b border-border'>
          <p className='font-[P4] text-secondary-text-900 text-sm md:text-base'><span className='text-secondary-text-500'>Shipping Information:</span> {productData?.shippingInformation}<span></span></p>
        </div>
      </div>
      <div className='flex-1/2'>
        <div className='py-1.5 lg:py-2 border-b border-border'>
          <p className='font-[P4] text-secondary-text-900 text-sm md:text-base'><span className='text-secondary-text-500'>Warranty Information:</span> {productData?.warrantyInformation}<span></span></p>
        </div>
        <div className='py-1.5 lg:py-2 border-b border-border'>
          <p className='font-[P4] text-secondary-text-900 text-sm md:text-base'><span className='text-secondary-text-500'>Width:</span> {productData?.dimensions?.width}<span></span></p>
        </div>
        <div className='py-1.5 lg:py-2 border-b border-border'>
          <p className='font-[P4] text-secondary-text-900 text-sm md:text-base'><span className='text-secondary-text-500'>Height:</span> {productData?.dimensions?.height}<span></span></p>
        </div>
        <div className='py-1.5 lg:py-2 border-b border-border'>
          <p className='font-[P4] text-secondary-text-900 text-sm md:text-base'><span className='text-secondary-text-500'>Depth:</span> {productData?.dimensions?.depth}<span></span></p>
        </div>
      </div>

    </div>
  )
}

export default React.memo(Additional);