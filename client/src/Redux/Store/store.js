import { configureStore } from "@reduxjs/toolkit";

import airlinesReducer from "../airlinesSlice";
import citiesReducer from "../citiesSlice";
import commentsReducer from "../commentsSlice";
import continentsReducer from "../continentsSlice";
import countriesReducer from "../countriesSlice";
import packagesReducer from "../packagesSlice";
import typepackagesReducer from "../typepackagesSlice";
import usersReducer from "../usersSlice";
import hotelsreducer from "../hotelsSlice";
import activityReducer from "../activitySlice"

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
    hotels: hotelsreducer,
    activity: activityReducer,
  },
});

export default store;
