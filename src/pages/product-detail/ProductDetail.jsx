import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
// Get Product Item and Related Category Product
import { useProductCategory, useProductItem } from '@/api/hooks/useProduct';
// CSS
import "./styles.css";
// Icons & Images
import iconNextLink from "@/assets/images/icon-next-link.svg";
import iconStar from "@/assets/images/icon-star.svg";
import iconFacebook from "@/assets/images/icon-facebook.svg";
import iconLinkedIn from "@/assets/images/icon-linkedIn.svg";
import iconX from "@/assets/images/icon-x.svg";
import Product from '@/components/Product/Product';

const ProductDetail = () => {
  const { id } = useParams();
  // Relocate
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id])

  // Get Product
  const { data, isLoading } = useProductItem(id);
  const productData = data?.data;

  // Get Related Category Product
  const category = productData?.category;
  const relatedProduct = useProductCategory(category, !!category, { limit: 4 });
  const relatedProductData = relatedProduct?.data?.data;
  const isRelatedProductLoading = relatedProduct?.isLoading;

  // Main Image
  const [mainImage, setMainImage] = useState(0);
  const handleMainImage = (index) => {
    setMainImage(index);
  }
  useEffect(() => {
    setMainImage(0);
  }, [productData])

  return (
    <>
      <section className='section_page_nav bg-secondary hidden md:block'>
        <div className='container'>
          <div className='page_nav_wrapper h-16 lg:h-[100px] flex items-center'>
            <div className='flex items-center gap-6 pr-6 border-r-2 border-secondary-text-500 h-9'>
              <div className='flex items-center gap-[14px]'>
                <Link className='font-[P4] text-sm md:text-base text-secondary-text-500' to={"/"}>Home</Link>
                <img src={iconNextLink} alt="Icon Next" />
              </div>
              <div className='flex items-center gap-[14px]'>
                <Link className='font-[P4] text-sm md:text-base text-secondary-text-500' to={"/shop"}>Shop</Link>
                <img src={iconNextLink} alt="Icon Next" />
              </div>
            </div>
            <div className='pl-6'>
              <span className='font-[P4] text-sm md:text-base text-primary-text-900'>{productData?.title}</span>
            </div>
          </div>
        </div>
      </section>
      <section className='section_product_detail'>
        <div className="container">
          <div className="product_detail_wrapper">





            <div className='product_detail_main grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 pt-6 pb-8 md:pt-8 md:pb-10 lg:pt-9 lg:pb-14'>
              <div className='product_detail_images grid grid-cols-1 lg:grid-cols-[0.76fr_4.23fr] gap-5 md:gap-7'>
                <div className='flex items-center lg:items-start order-2 lg:order-1 lg:flex-col gap-4 md:gap-5 lg:gap-6 '>
                  {
                    productData?.images?.map((image, index) => (
                      <div key={index} className={`bg-secondary border rounded-[10px] ${index === mainImage ? "border-black" : "border-transparent"}`}>
                        <img onClick={() => handleMainImage(index)} className='object-contain w-full h-20' src={image} alt="Image Product" />
                      </div>
                    ))
                  }
                </div>
                <div className='bg-secondary rounded-[10px] h-[260px] sm:h-[380px] md:h-[400px] lg:h-[500px] order-1 lg:order-2'>
                  <img className='object-contain w-full h-full' src={productData?.images[mainImage]} alt="Product Image" />
                </div>
              </div>
              <div className='product_detail_body'>
                <h3 className='font-[P4] text-primary-text-900 text-2xl sm:text-[28px] md:text-4xl lg:text-[42px] mb-2 lg:mb-3'>{productData?.title}</h3>
                <strong className='font-[P5] text-secondary-text-500 text-base sm:text-lg md:text-xl lg:text-2xl mb-3 lg:mb-4'>${productData?.price}</strong>
                <div className='h-[30px] flex items-center mb-4 lg:mb-[18px]'>
                  <div className='h-full flex items-center gap-1.5 pr-4 border-r border-secondary-text-500'>
                    <img className='w-4 lg:w-[18px]' src={iconStar} alt="" />
                    <img className='w-4 lg:w-[18px]' src={iconStar} alt="" />
                    <img className='w-4 lg:w-[18px]' src={iconStar} alt="" />
                    <img className='w-4 lg:w-[18px]' src={iconStar} alt="" />
                    <img className='w-4 lg:w-[18px]' src={iconStar} alt="" />
                  </div>
                  <div className='pl-[22px]'>
                    <span className='font-[P4] text-secondary-text-500 text-[11px] md:text-[13px]'>{productData?.reviews.length} Customer Review</span>
                  </div>
                </div>
                <p className='w-[90%] lg:w-[65%] font-[P4] text-primary-text-900 text-[11px] md:text-[13px] mb-4 lg:mb-[22px]'>{productData?.description}</p>
                <div className='flex items-center gap-4 lg:gap-[18px] md:flex-col md:items-start mb-6 lg:mb-8'>
                  <div className='flex flex-col gap-3'>
                    <span className='font-[P4] text-secondary-text-500 text-xs md:text-sm'>Size</span>
                    <div className='flex items-center gap-2 sm:gap-3 lg:gap-4'>
                      <div className='size-6 lg:size-[30px] flex items-center justify-center text-[11px] md:text-[13px] rounded-sm lg:rounded-[5px] bg-primary text-white'>L</div>
                      <div className='size-6 lg:size-[30px] flex items-center justify-center text-[11px] md:text-[13px] rounded-sm lg:rounded-[5px] bg-secondary text-primary-text-900'>XL</div>
                      <div className='size-6 lg:size-[30px] flex items-center justify-center text-[11px] md:text-[13px] rounded-sm lg:rounded-[5px] bg-secondary text-primary-text-900'>XS</div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 md:mb-6 lg:mb-8'>
                    <span className='font-[P4] text-secondary-text-500 text-xs md:text-sm'>Size</span>
                    <div className='flex items-center gap-2 sm:gap-3 lg:gap-4'>
                      <div className='size-5 sm:size-6 lg:size-[30px] rounded-full bg-[#816DFA]'></div>
                      <div className='size-5 sm:size-6 lg:size-[30px] rounded-full bg-primary-text-900'></div>
                      <div className='size-5 sm:size-6 lg:size-[30px] rounded-full bg-primary'></div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col min-[380px]:flex-row min-[380px]:items-center gap-2 min-[768px]:gap-3 min-[1024px]:gap-4 font-[P4] text-primary-text-900 text-min-[640px] min-[640px]:text-base min-[768px]:text-min-[1024px] min-[1024px]:text-xl border-b border-secondary-text-500 pb-8 min-[768px]:pb-10 min-[1024px]:pb-[60px]'>
                  <button className='h-10 md:h-12 lg:h-16 text-primary-text-900 flex items-center justify-around gap-5 sm:gap-6 md:gap-7 lg:gap-[35px] p-2 lg:p-4 border border-primary-text-900 rounded-[15px]'>
                    <span className='p-1'>-</span>
                    <span className='font-[P5] p-1'>1</span>
                    <span className='p-1'>+</span>
                  </button>
                  <button className='h-10 md:h-12 lg:h-16 lg:flex-1 p-2 border border-primary-text-900 rounded-[15px]'>Add To Cart</button>
                  <button className='h-10 md:h-12 lg:h-16 lg:flex-1 p-2 border border-primary-text-900 rounded-[15px]'>+ Compare</button>
                </div>
                <div className='pt-5 pb-8 sm:pt-7 sm:pb-10 lg:pt-10 lg:pb-[68px] flex items-center font-[P4] text-secondary-text-500 text-sm md:text-base'>
                  <div className='min-w-20 flex flex-col gap-2 md:gap-3'>
                    <span>SKU</span>
                    <span>Category</span>
                    <span>Tags</span>
                    <span>Share</span>
                  </div>
                  <div className='flex-1 flex flex-col gap-2 md:gap-3'>
                    <div className='flex items-center'>
                      <p className='mx-2 md:mx-3'>:</p>
                      <span className='capitalize'>{productData?.sku}</span>
                    </div>
                    <div className='flex items-center'>
                      <p className='mx-2 md:mx-3'>:</p>
                      <span className='capitalize'>{productData?.category}</span>
                    </div>
                    <div className='flex items-center'>
                      <p className='mx-2 md:mx-3'>:</p>
                      <div className='flex items-center gap-1'>
                        {
                          productData?.tags.map((tag, index) => (
                            <span key={index} className='capitalize'>{tag}{productData?.tags.length - 1 === index ? "" : ","}</span>
                          ))
                        }
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <p className='mx-2 md:mx-3'>:</p>
                      <div className='flex items-center gap-3 md:gap-4 lg:gap-6'>
                        <img src={iconFacebook} alt="Logo Facebook" />
                        <img src={iconLinkedIn} alt="Logo LinkedIn" />
                        <img src={iconX} alt="Logo X" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className='product_detail_additional_info border-y border-border '>
          <div className='container'>
            <div className='product_detail_additional_info_wrapper pt-6 pb-9 sm:pt-8 sm:pb-10 md:pt-9 md:pb-12 lg:pt-12 lg:pb-16 flex flex-col gap-5 md:gap-7 lg:gap-9'>
              <div className='flex items-center justify-center gap-7 sm:gap-9 md:gap-11 lg:gap-[52px]'>
                <NavLink className='product_detail_additional_nav font-[P4] text-secondary-text-500 text-base sm:text-lg md:text-xl lg:text-2xl' end={true} to={""}>Description</NavLink>
                <NavLink className='product_detail_additional_nav font-[P4] text-secondary-text-500 text-base sm:text-lg md:text-xl lg:text-2xl' to={"additional"}>Additional</NavLink>
                <NavLink className='product_detail_additional_nav font-[P4] text-secondary-text-500 text-base sm:text-lg md:text-xl lg:text-2xl' to={"reviews"}>Reviews[{productData?.reviews?.length}]</NavLink>
              </div>
              <div>
                <Outlet productData={productData} />
              </div>
              <div className='grid grid-cols-1 min-[320px]:grid-cols-2 gap-3 md:gap-4 lg:gap-5'>
                <div className='bg-secondary h-48 sm:h-56 md:h-64 lg:h-[348px] rounded-[10px]'>
                  <img className='w-full h-full object-contain' src={productData?.images?.[0]} alt="Image Product" />
                </div>
                <div className='bg-secondary h-48 sm:h-56 md:h-64 lg:h-[348px] rounded-[10px]'>
                  <img className='w-full h-full object-contain' src={productData?.images?.[1] ? productData?.images[1] : productData?.images[0]} alt="Image Product" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='product_detail_related'>
          <div className="container">
            <div className="product_detail_related_wrapper pt-8 pb-12 sm:pt-9 sm:pb-16 md:pt-11 md:pb-20 lg:pt-14 lg:pb-[92px]">
              <h3 className='font-[P5] text-center text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-5 lg:mb-[26px]'>Related Products</h3>
              <Product data={relatedProductData} loading={isRelatedProductLoading} limit={4} id={id} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default React.memo(ProductDetail);