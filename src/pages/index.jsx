import { SuspenseCustom } from '@/utils/utils';
import React, { lazy } from 'react'
// React Router Dom Hook, object like routing
import { useRoutes } from 'react-router-dom'
// Layout, wraps the page with Header and Footer
const Layout = lazy(() => import("./layout/Layout"));
// Pages with loading lazy, means load data for the page shown only
const Home = lazy(() => import("./home/Home"));
const Shop = lazy(() => import("./shop/Shop"));

const MainRouters = () => {
    return (
        <>
            {
                useRoutes([
                    {
                        path: "/", element: <SuspenseCustom><Layout /></SuspenseCustom>, children: [
                            { path: "/", element: <Home /> },
                            { path: "/shop", element: <Shop /> }
                        ]
                    }
                ])
            }
        </>
    )
}

export default React.memo(MainRouters);