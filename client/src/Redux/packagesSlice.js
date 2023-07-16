// slices/packagesSlice.js

import { createSlice } from "@reduxjs/toolkit";
import packages from "../packages.js";

export const packagesSlice = createSlice({
  name: "packages",
  initialState: {
    packagesList: packages,
    searchResults: []
  },
  reducers: {
    // Agregar aquí reducers
    searchPackages: (state, action) => {
      const pais = action.payload;
      

      if (pais === "") {
        state.searchResults = state.packagesList;
      } else {
        const results = state.packagesList.filter((tour) =>{
          if (Array.isArray(tour.Pais)){
            return tour.Pais.some((pais)=>pais.toLocaleLowerCase().includes(pais.toLocaleLowerCase()))
          }else{
            return tour.Pais.toLowerCase().includes(pais.toLowerCase())
          }
        }
          
        );
        state.searchResults = results;
      }
    }
  },
});

export const {
  /* acciones */
  searchPackages

} = packagesSlice.actions;

export default packagesSlice.reducer;
