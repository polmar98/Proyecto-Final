import { configureStore } from "@reduxjs/toolkit";

import airelinesReducer from "../airelinesSlice";
import citiesReducer from "../citiesSlice";
import commentsReducer from "../commentsSlice";
import continentReducer from "../continentSlice";
import countriesReducer from "../countriesSlice";
import packagesReducer from "../packagesSlice";
import typepackagesReducer from "../typepackagesSlice";
import usersReducer from "../usersSlice";

export const store = configureStore({
  reducer: {
    packages: packagesReducer,
    users: usersReducer,
    comments: commentsReducer,
    cities: citiesReducer,
    countries: countriesReducer,
    continent: continentReducer,
    typepackages: typepackagesReducer,
    airelines: airelinesReducer,
  },
});

export default store;
