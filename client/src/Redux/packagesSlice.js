// slices/packagesSlice.js

import { createSlice } from "@reduxjs/toolkit";
import packages from "../packages.js";

export const packagesSlice = createSlice({
  name: "packages",
  initialState: {
    packagesList: packages,
  },
  reducers: {
    // Agregar aquí reducers
  },
});

export const {
  /* acciones */
} = packagesSlice.actions;

export default packagesSlice.reducer;
