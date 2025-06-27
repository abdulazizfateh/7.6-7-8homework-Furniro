import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='site_footer border-t border-[#eeeeec]'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_main border-b border-border py-6 sm:py-7 md:py-8 lg:py-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2.85fr_1.4fr_1.4fr_2.85fr] gap-8 sm:gap-14 lg:gap-24 xl:gap-28'>
            <div className='flex flex-col gap-2 md:gap-3 lg:gap-4'>
              <Link to={"/"} className='font-[P7] text-xl sm:text-2xl lg:text-3xl mb-2'>Furniro.</Link>
              <p className='font-[P4] text-sm md:text-base text-secondary-text-500'>400 University Drive Suite 200 Coral <br />Gables, <br />FL 33134 USA</p>
            </div>
            <div className='flex flex-col gap-2 md:gap-3 lg:gap-4 font-[P4] text-sm md:text-base text-primary-text-900'>
              <span className='text-secondary-text-500 mb-2'>Links</span>
              <Link className=''>Home</Link>
              <Link className=''>Shop</Link>
              <Link className=''>About</Link>
              <Link className=''>Contact</Link>
            </div>
            <div className='flex flex-col gap-2 md:gap-3 lg:gap-4 font-[P4] text-sm md:text-base text-primary-text-900'>
              <span className='text-secondary-text-500 mb-2'>Help</span>
              <Link className=''>Payment Options</Link>
              <Link className=''>Returns</Link>
              <Link className=''>Privacy Policies</Link>
            </div>
            <div className='flex flex-col gap-2 md:gap-3 lg:gap-4'>
              <span className='font-[P4] text-sm md:text-base text-secondary-text-500 mb-2'>Newsletter</span>
              <form className='flex items-center gap-2 md:gap-3'>
                <input className='flex-1 text-xs sm:text-sm text-secondary-text-500 capitalize outline-none pb-1 border-b border-primary-text-900' type="text" placeholder='Enter your email address' />
                <button className='uppercase font-[P4] text-xs sm:text-sm text-primary-text-900 pb-1 border-b border-primary-text-900'>Subscribe</button>
              </form>
            </div>
          </div>
          <div className='h-12 md:h-14 lg:h-16 flex items-center'>
            <p className='font-[P4] text-primary-text-900 text-xs md:text-sm'>2025 @furniro. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer);