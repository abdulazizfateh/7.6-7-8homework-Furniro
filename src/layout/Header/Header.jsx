import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
// CSS
import "./styles.css";
// Icons & Images
import iconSearch from "@/assets/images/icon-search.svg";
import iconUser from "@/assets/images/icon-user.svg";
import iconHeart from "@/assets/images/icon-heart.svg";
import iconCart from "@/assets/images/icon-cart.svg";
import iconMenu from "@/assets/images/icon-menu.svg";
// Redux
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const cartData = useSelector(state => state.cartSlice.cart);
  const wishlistData = useSelector(state => state.wishlistSlice.wishlist);
  return (
    <header className='site_header absolute top-0 left-0 w-full z-50 border-b border-[#eee]'>
      <div className='container'>
        <nav className='header_nav h-14 sm:h-[65px] md:h-[70px] lg:h-[85px] flex items-center justify-between'>
          <Link to={"/"} className='font-[P7] text-xl sm:text-2xl lg:text-3xl'>Furniro.</Link>
          <ul className='header_nav_links hidden md:flex items-center md:gap-10 lg:gap-14 xl:gap-[75px]'>
            <li>
              <NavLink className='header_nav_link font-[P5] text-sm lg:text-base text-primary-text-900' to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink className='header_nav_link font-[P5] text-sm lg:text-base text-primary-text-900' to={"/shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink className='header_nav_link font-[P5] text-sm lg:text-base text-primary-text-900' to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink className='header_nav_link font-[P5] text-sm lg:text-base text-primary-text-900' to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
          <div className='header_nav_actions hidden md:flex items-center gap-6 sm:gap-7 lg:gap-8 xl:gap-11'>
            <img className='w-6 lg:w-7' src={iconUser} alt="Icon User" />
            <img className='w-5 lg:w-6' src={iconSearch} alt="Icon Search" />
            <div onClick={() => navigate("/wishlist")} className='relative cursor-pointer'>
              <img className='w-5 lg:w-6' src={iconHeart} alt="Icon Heart" />
              <span className='absolute -top-3.5 -right-4 size-4 lg:size-5 bg-primary flex items-center justify-center text-white text-sm md:text-base rounded-md'>{wishlistData.length}</span>
            </div>
            <div onClick={() => navigate("/cart")} className='relative cursor-pointer'>
              <img className='w-5 lg:w-6' src={iconCart} alt="Icon Cart" />
              <span className='absolute -top-3.5 -right-4 size-4 lg:size-5 bg-primary flex items-center justify-center text-white text-sm md:text-base rounded-md'>{cartData.length}</span>
            </div>
          </div>
          <button className='md:hidden'>
            <img className='w-6 sm:w-[26px]' src={iconMenu} alt="Icon Menu" />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header);