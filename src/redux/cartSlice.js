import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If item exists in cart, update quantity, colors, and image
        existingItem.quantity += newItem.quantity;
        existingItem.price += newItem.quantity * newItem.price;
        existingItem.color = Array.from(
          new Set([...existingItem.color, ...newItem.color])
        );
        existingItem.img = newItem.img; // Update image
      } else {
        // If item doesn't exist in cart, add it
        state.cart.push(newItem);
      }
    },
    deleteFromCart: (state, action) => {
      const idToDelete = action.payload;
      state.cart = state.cart.filter((item) => item.id !== idToDelete);
    },
  },
});

export const { addToCart, deleteFromCart } = cart.actions;
export default cart.reducer;
