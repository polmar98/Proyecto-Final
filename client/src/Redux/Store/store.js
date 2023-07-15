import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from "../packagesSlice";

export const store = configureStore({
  reducer: {
    packages: packagesReducer,
  },
});

export default store;
