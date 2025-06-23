import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className='section_hero bg-amber-300 w-full'>
            <div className="container">
                <div className='hero_wrapper w-full h-[calc(90dvh-56px)] sm:h-[calc(90dvh-65px)] md:h-[calc(100dvh-70px)] lg:h-[calc(100dvh-85px)] min-h-[380px] sm:min-h-[400px] md:min-h-[550px] xl:min-h-[716px] flex items-center justify-center sm:relative'>
                    <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[643px] lg:min-h-[443px] sm:absolute top-[70%] sm:-translate-y-[70%] sm:right-0 rounded-[10px] bg-white/70 p-6 pt-8 sm:p-8 sm:pt-10 lg:p-10 lg:pt-16'>
                        <span className='font-[P6] text-sm md:text-base text-primary-text-700 tracking-[3px] mb-1'>New Arrival</span>
                        <h1 className='font-[P7] text-primary text-3xl leading-[36px] md:text-4xl md:leading-[44px] lg:text-5xl lg:leading-[56px] xl:text-[52px] xl:leading-[65px] mb-3 lg:mb-4'>Discover <br /> Our New Collection</h1>
                        <p className='font-[P5] text-sm leading-[18px] sm:text-base sm:leading-[20px] lg:text-lg lg:leading-[24px] mb-5 sm:mb-7 md:mb-9 lg:mb-11'>Explore our premium collection — elegant textures, refined design, and quality made for those who value the finer things.</p>
                        <button onClick={() => navigate("/shop")} className='h-12 sm:h-14 md:h-16 lg:h-[74px] px-10 sm:px-14 lg:px-[72px] bg-primary'><span className='text-sm md:text-base font-[P7] uppercase text-white'>Buy Now</span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Hero);