import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
// CSS
import "./styles.css";
// Icons & Images
import { UserOutlined, SearchOutlined, ShoppingOutlined, HeartOutlined, MenuOutlined } from "@ant-design/icons";
// Redux
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const cartData = useSelector(state => state.cartSlice.cart);
  const wishlistData = useSelector(state => state.wishlistSlice.wishlist);
  return (
    <header className='site_header absolute top-0 left-0 w-full z-50 border-b border-[#eeeeec]'>
      <div className='container'>
        <nav className='header_nav h-14 sm:h-[60px] md:h-[65px] lg:h-[75px] flex items-center justify-between'>
          <Link to={"/"} className='font-[P7] text-xl sm:text-2xl lg:text-3xl'>Furniro.</Link>
          <ul className='header_nav_links hidden md:flex items-center md:gap-10 lg:gap-14 xl:gap-[75px]'>
            <li>
              <NavLink className='header_nav_link font-[P4] text-sm lg:text-base text-primary-text-900' to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink className='header_nav_link font-[P4] text-sm lg:text-base text-primary-text-900' to={"/shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink className='header_nav_link font-[P4] text-sm lg:text-base text-primary-text-900' to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink className='header_nav_link font-[P4] text-sm lg:text-base text-primary-text-900' to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
          <div className='header_nav_actions hidden md:flex items-center gap-6 sm:gap-7 lg:gap-8 xl:gap-11'>
            <UserOutlined className='text-lg md:text-xl lg:text-[22px]' />
            <SearchOutlined className='text-lg md:text-xl lg:text-[22px]' />
            <div onClick={() => navigate("/wishlist")} className='relative cursor-pointer'>
              <HeartOutlined className='text-lg md:text-xl lg:text-[22px]' />
              {
                wishlistData.length
                  ?
                  <div className='flex items-center justify-center pt-.5 absolute -top-1.5 -right-2.5 size-4 lg:size-[18px] rounded-full bg-primary/90'>
                    <span className='text-white font-[P5] text-xs'>{wishlistData.length}</span>
                  </div>
                  :
                  <></>
              }
            </div>
            <div onClick={() => navigate("/cart")} className='relative cursor-pointer'>
              <ShoppingOutlined className='text-lg md:text-xl lg:text-[22px]' />
              {
                cartData.length
                  ?
                  <div className='flex items-center justify-center pt-.5 absolute -top-1 -right-2.5 size-4 lg:size-[18px] rounded-full bg-primary/90'>
                    <span className='text-white font-[P5] text-xs md:text-sm'>{cartData.length}</span>
                  </div>
                  :
                  <></>
              }
            </div>
          </div>
          <button className='md:hidden'>
            <MenuOutlined className='text-lg md:text-xl lg:text-[22px]' />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header);