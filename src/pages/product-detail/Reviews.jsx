import React from 'react'
// Get Product ID
import { useParams } from 'react-router-dom';
// Get Product Data
import { useProductItem } from '@/api/hooks/useProduct';
// Icons
import iconStar from "@/assets/images/icon-star.svg";

const Reviews = () => {
  const { id } = useParams();
  const { data } = useProductItem(id);
  const productReviewData = data?.data?.reviews;

  return (
    <div className='flex justify-center flex-wrap gap-2 md:gap-3'>
      {
        productReviewData?.map((review, index) => (
          <div key={index} className='border border-border rounded-2xl p-4 font-[P4] text-xs md:text-sm'>
            <div className='flex items-center gap-1 md:gap-1.5 mb-2 md:mb-3'>
              {
                new Array(review?.rating).fill("").map((_, index) => (
                  <img className='w-4 lg:w-[18px]' key={index} src={iconStar} alt="Icon Star" />
                ))
              }
            </div>
            <p className='text-secondary-text-900 mb-4 md:mb-6 lg:mb-7'><span className='text-secondary-text-500'>Comment:</span> {review?.comment}</p>
            <p className='text-xs md:text-sm text-secondary-text-500 line-clamp-1'>{review?.reviewerName}, {review?.reviewerEmail}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Reviews