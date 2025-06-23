import React from 'react'
// Layout, Header and Footer
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
// Outlet, shows page according to route
import { Outlet } from 'react-router-dom'
// Custom Suspense Loading, it is shown till mark-up is read
import { SuspenseCustom } from '@/utils/utils'

const Layout = () => {
    return (
        <>
            <Header />
            <main className='site_main mt-14 sm:mt-[65px] md:mt-[70px] lg:mt-[85px]'>
                <SuspenseCustom><Outlet /></SuspenseCustom>
            </main>
            <Footer />
        </>
    )
}

export default React.memo(Layout);