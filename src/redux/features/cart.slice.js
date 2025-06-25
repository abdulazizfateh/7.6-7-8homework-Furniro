import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || []
}

export const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            addToCart: (state, action) => {
                const doesExist = state.cart.some(item => item.id === action.payload.id);
                if (!doesExist) {
                    state.cart.push({ ...action.payload, quantity: 1 });
                }
            },
            removeFromCart: (state, action) => {
                state.cart = state.cart.filter(item => item.id !== action.payload)
            },
            increaseQuantity: (state, action) => {
                const productToBeIncInCart = state.cart.find(item => item.id === action.payload.id);
                if (productToBeIncInCart) {
                    productToBeIncInCart.quantity += 1;
                }
            },
            decreaseQuantity: (state, action) => {
                const productToBeIncInCart = state.cart.find(item => item.id === action.payload.id);
                if (productToBeIncInCart) {
                    productToBeIncInCart.quantity -= 1;
                }
            }
        }
    }
)

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;