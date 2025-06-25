import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import "./styles.css";
// Icons & Images
import iconNextLink from "@/assets/images/icon-next-link.svg";

const NavHero = ({ page }) => {
    return (
        <section className='section_shop h-[316px]'>
            <div className='h-full flex flex-col items-center justify-center gap-2.5'>
                <h2 className='font-[P5] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-text-900'>{page}</h2>
                <div className='flex items-center gap-1.5'>
                    <Link to={"/"} className='font-[P5] text-sm md:text-base text-primary-text-900'>Home</Link>
                    <img src={iconNextLink} alt="Icon Next" />
                    <span className='font-[P3] text-sm md:text-base text-primary-text-900'>{page}</span>
                </div>
            </div>
        </section>
    )
}

export default React.memo(NavHero);