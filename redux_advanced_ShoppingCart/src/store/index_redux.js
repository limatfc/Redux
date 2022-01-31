import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui_slice";
import cartSlice from "./cart_slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer },
});

export default store;
