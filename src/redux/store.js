import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart.slice";

export const store = configureStore(
    {
        reducer: {
            cartSlice
        }
    }
)
