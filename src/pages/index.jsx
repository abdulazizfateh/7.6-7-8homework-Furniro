import Header from '@/layout/Header/Header';
import { SuspenseCustom } from '@/utils/utils';
import React, { lazy } from 'react'
// React Router Dom Hook, object like routing
import { useRoutes } from 'react-router-dom'
// Layout, wraps the page with Header and Footer
const Layout = lazy(() => import("./layout/Layout"));
// Pages with loading lazy, means load data for the page shown only
const Home = lazy(() => import("./home/Home"));
const Shop = lazy(() => import("./shop/Shop"));
const ProductDetail = lazy(() => import("./product-detail/ProductDetail"));
const Cart = lazy(() => import("./cart/Cart"));
const Wishlist = lazy(() => import("./wishlist/Wishlist"));
const Checkout = lazy(() => import("./checkout/Checkout"));

// Nested Route
const Description = lazy(() => import("./product-detail/Description"));
const Additional = lazy(() => import("./product-detail/Additional"));
const Reviews = lazy(() => import("./product-detail/Reviews"));

const MainRouters = () => {
    return (
        <>
            {
                useRoutes([
                    {
                        path: "/", element: <SuspenseCustom><Layout /></SuspenseCustom>, children: [
                            { path: "/", element: <Home /> },
                            { path: "/shop", element: <Shop /> },
                            {
                                path: "/product/:id", element: <ProductDetail />, children: [
                                    {
                                        index: true, element: <Description />,
                                    },
                                    {
                                        path: "additional", element: <Additional />,
                                    },
                                    {
                                        path: "reviews", element: <Reviews />,
                                    }
                                ]
                            },
                            { path: "/cart", element: <Cart /> },
                            { path: "/wishlist", element: <Wishlist /> },
                            { path: "/checkout", element: <Checkout /> }
                        ]
                    }
                ])
            }
        </>
    )
}

export default React.memo(MainRouters);