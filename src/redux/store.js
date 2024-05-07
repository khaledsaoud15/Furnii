import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import registerSlice from "./registerSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    register: registerSlice,
    login: userSlice,
  },
});
