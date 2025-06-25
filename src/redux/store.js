import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart.slice";
import wishlistSlice from "./features/wishlist.slice"

export const store = configureStore(
    {
        reducer: {
            cartSlice,
            wishlistSlice
        }
    }
)

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cartSlice.cart));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlistSlice.wishlist));
})