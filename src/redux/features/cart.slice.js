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
                    if (productToBeIncInCart.quantity >= 1) {
                        productToBeIncInCart.quantity -= 1;
                    }
                    if (productToBeIncInCart.quantity === 0) {
                        state.cart = state.cart.filter(item => item.id !== productToBeIncInCart.id)
                    }
                }
            },
            clearCart: (state) => {
                state.cart = [];
            }
        }
    }
)

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;