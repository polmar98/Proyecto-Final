import { configureStore } from "@reduxjs/toolkit";

import airlinesReducer from "../airlinesSlice";
import citiesReducer from "../citiesSlice";
import commentsReducer from "../commentsSlice";
import continentsReducer from "../continentsSlice";
import countriesReducer from "../countriesSlice";
import typepackagesReducer from "../typepackagesSlice";
import usersReducer from "../usersSlice";
import packagesReducer, { searchReducer } from "../packagesSlice";

export const store = configureStore({
  reducer: {
    packages: packagesReducer,
    users: usersReducer,
    comments: commentsReducer,
    cities: citiesReducer,
    countries: countriesReducer,
    continents: continentsReducer,
    typepackages: typepackagesReducer,
    airlines: airlinesReducer,
    search: searchReducer,
  },
});

export default store;
