import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || []
}

const wishlistSlice = createSlice(
    {
        name: "wishlist",
        initialState,
        reducers: {
            toggleToWishlist: (state, action) => {
                const doesExist = state.wishlist.some(item => item.id === action.payload.id);
                if (!doesExist) {
                    state.wishlist.push(action.payload);
                } else {
                    state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
                }
            }
        }
    }
)

export const { toggleToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;