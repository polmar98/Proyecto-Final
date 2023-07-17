import { configureStore } from "@reduxjs/toolkit";

import airlinesReducer from "../airlinesSlice";
import citiesReducer from "../citiesSlice";
import commentsReducer from "../commentsSlice";
import continentsReducer from "../continentsSlice";
import countriesReducer from "../countriesSlice";
import packagesReducer, { searchReducer } from "../packagesSlice";
import typepackagesReducer from "../typepackagesSlice";
import usersReducer from "../usersSlice";



export const store = configureStore({
  reducer: {
    packages: packagesReducer,
    users: usersReducer,
    comments: commentsReducer,
    cities: citiesReducer,
    countries: countriesReducer,
    continent: continentsReducer,
    typepackages: typepackagesReducer,
    airlines: airlinesReducer,
    search: searchReducer ,
  },
});

export default store;
