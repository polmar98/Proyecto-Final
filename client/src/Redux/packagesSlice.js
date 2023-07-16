import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk action para obtener packages del servidor
export const fetchPackages = createAsyncThunk(
  "packages/fetchPackages",
  async () => {
    const response = await axios.get("http://localhost:3002/packages");
    return response.data;
  }
);

export const packagesSlice = createSlice({
  name: "packages",
  initialState: { packagesList: [], status: "idle", error: null },
  reducers: {
    // Agrega un nuevo package al estado inicial
    addPackage: (state, action) => {
      state.packagesList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPackages.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Agrega los packages al estado inicial
        state.packagesList = action.payload;
      })
      .addCase(fetchPackages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default packagesSlice.reducer;
