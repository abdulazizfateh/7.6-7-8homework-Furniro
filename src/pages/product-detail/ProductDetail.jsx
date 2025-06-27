import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
// Get Product Item and Related Category Product
import { useProductCategory, useProductItem } from '@/api/hooks/useProduct';
// CSS
import "./styles.css";
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, increaseQuantity } from '@/redux/features/cart.slice';
// Icons & Images
import iconStar from "@/assets/images/icon-star.svg";
import Product from '@/components/Product/Product';
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"


const ProductDetail = () => {
  const { id } = useParams();
  // Relocate
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id])
  const navigate = useNavigate();

  // Get Product
  const { data, isLoading } = useProductItem(id);
  const productData = data?.data;
  console.log(productData);

  // Redux
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cartSlice.cart);


  // Get Related Category Product
  const category = productData?.category;
  const relatedProduct = useProductCategory(category, !!category, { limit: 5 });
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
      <section className='section_product_detail'>
        <div className="container">
          <div className="product_detail_wrapper">





            <div className='product_detail_main grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 py-6 md:pb-8 lg:py-10'>
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
                <h3 className='title !font-[P4] mb-2'>{productData?.title}</h3>
                <p className='font-[P5] text-secondary-text-500 text-base md:text-lg lg:text-xl mb-2'>${productData?.price}</p>
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
                <div className='flex flex-col lg:w-[70%] min-[380px]:flex-row min-[380px]:items-center gap-2 min-[768px]:gap-3 min-[1024px]:gap-4 pb-8 min-[768px]:pb-10 min-[1024px]:pb-[60px]'>
                  {
                    cartData.find(item => item.id === productData?.id)?.quantity
                      ?
                      <button className='h-8 md:h-10 lg:h-12 flex-1/2 flex items-center justify-around gap-5 sm:gap-6 md:gap-7 lg:gap-[35px] border border-primary-text-900 rounded-[15px] text-primary-text-900 font-[P4] text-sm md:text-base'>
                        <MinusOutlined onClick={() => dispatch(decreaseQuantity(productData))} />
                        <span className='font-[P5] p-1'>{cartData.find(item => item.id === productData?.id)?.quantity}</span>
                        <PlusOutlined onClick={() => dispatch(increaseQuantity(productData))} />
                      </button>
                      :
                      <button onClick={() => dispatch(addToCart(productData))} className='h-8 md:h-10 lg:h-12 flex-1/2 border border-primary-text-900 rounded-[15px]'>
                        <span className='text-primary-text-900 font-[P4] text-sm md:text-base'>Add to cart</span>
                      </button>
                  }
                  <button onClick={() => navigate("/cart")} className='flex-2/4 h-8 md:h-10 lg:h-12 border border-primary-text-900 rounded-[15px]'>
                    <span className='text-primary-text-900 font-[P4] text-sm md:text-base'>Go to cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className='product_detail_additional_info border-y border-[#eeeeec]'>
          <div className='container'>
            <div className='product_detail_additional_info_wrapper pt-6 pb-9 sm:pt-8 sm:pb-10 md:pt-9 md:pb-12 lg:pt-12 lg:pb-16 flex flex-col gap-5 md:gap-7 lg:gap-9'>
              <div className='flex items-center justify-center gap-7 sm:gap-9 md:gap-11 lg:gap-[52px] font-[P4] text-secondary-text-500 text-sm md:text-base lg:text-lg'>
                <NavLink className='product_detail_additional_nav' end={true} to={""}>Description</NavLink>
                <NavLink className='product_detail_additional_nav' to={"additional"}>Additional</NavLink>
                <NavLink className='product_detail_additional_nav' to={"reviews"}>Reviews[{productData?.reviews?.length}]</NavLink>
              </div>
              <div className='min-h-[150px]'>
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
              <h3 className='title text-center mb-4 md:mb-5 lg:mb-[26px]'>Related Products</h3>
              <Product data={relatedProductData} loading={isRelatedProductLoading} limit={5} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default React.memo(ProductDetail);