import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== "production",
});

export default Store;
