import React from 'react'
// Get Product ID
import { useParams } from 'react-router-dom';
// Get Product Data
import { useProductItem } from '@/api/hooks/useProduct';

const Description = () => {
  const { id } = useParams();
  const { data } = useProductItem(id);
  const productData = data?.data;

  return (
    <div className='w-[90%] sm:w-[85%] mx-auto font-[P4] text-secondary-text-500 text-xs md:text-sm flex flex-col gap-5 md:gap-6 lg:gap-[30px]'>
      <p>
        {productData?.description}
      </p>
      <p>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>
  )
}

export default Description