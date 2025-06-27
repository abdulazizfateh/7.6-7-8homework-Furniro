import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
// CSS
import "./styles.css";
// Icons & Images
import { UserOutlined, SearchOutlined, ShoppingOutlined, HeartOutlined, MenuOutlined } from "@ant-design/icons";
// Redux
import { useSelector } from 'react-redux';
// React Query
import { useProductSearch } from '@/api/hooks/useProduct';
// Search - Use Debounce
import useDebounce from '@/hooks/useDebounce';

const Header = () => {
  const navigate = useNavigate();
  const cartData = useSelector(state => state.cartSlice.cart);
  const wishlistData = useSelector(state => state.wishlistSlice.wishlist);

  // Search
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // Search Modal
  const handleSearchOpen = () => {
    setIsSearchModalOpen(true);
  }
  const hanldeSearchClose = (e) => {
    if (e.currentTarget === e.target) {
      setIsSearchModalOpen(false);
    }
  }

  // Search Request
  const searchValueDebounce = useDebounce(searchValue)
  const { data } = useProductSearch({ q: searchValueDebounce.trim() });
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }

  const searchData = data?.data?.products

  const handleDetailOnSearch = id => {
    navigate(`/product/${id}`);
    setIsSearchModalOpen(false);
  }

  return (
    <header className='site_header absolute top-0 left-0 w-full z-50 border-b border-border'>
      <div className='container'>
        <nav className='header_nav h-14 sm:h-[60px] md:h-[65px] lg:h-[75px] flex items-center justify-between'>
          <Link to={"/"} className='font-[P7] text-xl sm:text-2xl lg:text-3xl'>Furniro.</Link>
          <ul className='header_nav_links hidden md:flex items-center md:gap-10 lg:gap-12'>
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
            <div className='relative'>
              <SearchOutlined onClick={() => handleSearchOpen()} className='text-lg md:text-xl lg:text-[22px]' />
              {isSearchModalOpen &&
                <div className='bg-white rounded-xl absolute z-30 w-[800px] top-1/2 -translate-y-1/2 -right-[10px]'>
                  <div className='relative'>
                    <form className='h-[50px] flex items-center'>
                      <input onChange={handleSearchChange} value={searchValue}
                        className={`${searchData?.length ? "rounded-bl-0 rounded-tl-lg bg-white" : "rounded-l-lg"} h-full w-full px-4 font-[P4] text-sm md:text-base border border-primary outline-none`} placeholder="Search..." />
                      <button className={`${searchData?.length ? "rounded-br-0 rounded-tr-lg bg-white" : "rounded-r-lg"} w-[50px] h-full border-r border-y border-primary text-lg md:text-xl lg:text-[22px]`} onClick={(e) => e.preventDefault()}><SearchOutlined /></button>
                    </form>
                    {
                      searchData?.length
                        ?
                        <div className='flex flex-col max-h-[600px] overflow-y-auto absolute top-[50px] w-[800px] pb-4 rounded-b-xl border-b border-l border-r border-primary bg-white'>
                          {
                            searchData?.map(product => (
                              <div onClick={() => handleDetailOnSearch(product.id)} key={product.id} className='min-h-[72px] flex items-center justify-between gap-10 px-4 py-2 cursor-pointer hover:bg-secondary-bg duration-150'>
                                <div className='flex items-center gap-3'>
                                  <div>
                                    <img className='w-20 object-contain' src={product?.thumbnail} alt={product?.title} />
                                  </div>
                                  <div className='flex flex-col gap-1'>
                                    <p className='font-[P4] text-xs md:text-sm text-primary-text-900'>{product?.title} </p>
                                    <p className='font-[P4] line-clamp-2 text-[10px] md:text-xs text-secondary-text-500'>{product?.description} </p>
                                  </div>
                                </div>
                                <div className=''>
                                  <p className='font-[P5] text-primary-text-900 text-xs md:text-sm'>${product?.price}</p>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        :
                        <></>
                    }
                  </div>
                </div>
              }
              {isSearchModalOpen &&
                <div onClick={(e) => hanldeSearchClose(e)} className='fixed inset-0 w-full h-full flex items-start pt-4 justify-center bg-black/20'>
                </div>
              }
            </div>
            <UserOutlined className='text-lg md:text-xl lg:text-[22px]' />
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
                    <span className='text-white font-[P5] text-xs'>{cartData.length}</span>
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