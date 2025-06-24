import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='site_footer border-t border-border'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_main border-b border-border py-6 sm:py-8 md:py-9 lg:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2.85fr_1.4fr_1.4fr_2.85fr] gap-8 sm:gap-14 lg:gap-24 xl:gap-28'>
            <div className='flex flex-col gap-5 md:gap-8 lg:gap-10'>
              <Link to={"/"} className='font-[P7] text-xl sm:text-2xl lg:text-3xl'>Furniro.</Link>
              <p className='font-[P4] text-xs md:text-base text-secondary-text-500'>400 University Drive Suite 200 Coral <br />Gables, <br />FL 33134 USA</p>
            </div>
            <div className='flex flex-col gap-5 md:gap-8 lg:gap-10'>
              <span className='font-[P5] text-xs md:text-base text-secondary-text-500'>Links</span>
              <Link className='font-[P5] text-xs md:text-base text-primary-text-900'>Home</Link>
              <Link className='font-[P5] text-xs md:text-base text-primary-text-900'>Shop</Link>
              <Link className='font-[P5] text-xs md:text-base text-primary-text-900'>About</Link>
              <Link className='font-[P5] text-xs md:text-base text-primary-text-900'>Contact</Link>
            </div>
            <div className='flex flex-col gap-5 md:gap-8 lg:gap-10'>
              <span className='font-[P5] text-xs md:text-base text-secondary-text-500'>Help</span>
              <Link className='font-[P5] text-xs md:text-base text-primary-text-900'>Payment Options</Link>
              <Link className='font-[P5] text-xs md:text-base text-primary-text-900'>Returns</Link>
              <Link className='font-[P5] text-xs md:text-base text-primary-text-900'>Privacy Policies</Link>
            </div>
            <div className='flex flex-col gap-5 md:gap-8 lg:gap-10'>
              <span className='font-[P5] text-xs md:text-base text-secondary-text-500'>Newsletter</span>
              <form className='flex items-center gap-2 md:gap-3'>
                <input className='flex-1 text-xs sm:text-sm text-secondary-text-500 capitalize outline-none pb-1 border-b border-primary-text-900' type="text" placeholder='Enter your email address' />
                <button className='uppercase font-[P5] text-xs sm:text-sm text-primary-text-900 pb-1 border-b border-primary-text-900'>Subscribe</button>
              </form>
            </div>
          </div>
          <div className='h-14 md:h-16 lg:h-20 flex items-center'>
            <p className='font-[P4] text-primary-text-900 text-sm md:text-base'>2025 @furniro. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer);