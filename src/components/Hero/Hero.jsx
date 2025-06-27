import React from 'react'
import { useNavigate } from 'react-router-dom';
// CSS
import "./styles.css";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className='section_hero w-full'>
            <div className="container_hero">
                <div className='hero_wrapper rounded-[20px] w-full h-[calc(80dvh-56px)] sm:h-[calc(80dvh-65px)] md:h-[calc(80dvh-70px)] lg:h-[calc(80dvh-85px)] min-h-[380px] sm:min-h-[400px] md:min-h-[550px] xl:min-h-[516px] flex items-center justify-center'>
                    <div className='flex flex-col items-center gap-3 md:gap-4 lg:gap-5'>
                        <h1 className='font-[P6] text-2xl sm:text-3xl md:text-4xl lg:text-6xl rounded-[20px] capitalize text-center text-primary-text-900 bg-white/30 backdrop-blur-[1px] p-4 md:p-6 md:px-12 lg:p-7 lg:px-16'>Discover our new <br /> collection</h1>
                        <button onClick={() => navigate("/shop")} className='rounded-lg bg-white h-8 sm:h-10 md:h-11 px-4 md:px-6'>
                            <span className='font-[P4] text-primary-text-900 text-sm md:text-base'>Shop now</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Hero);