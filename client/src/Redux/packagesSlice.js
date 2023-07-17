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

export const { addPackage } = packagesSlice.actions;

export const searchPackagesAsync = createAsyncThunk(
  "packages/searchPackages",
  async (word, { getState }) => {
    const { packagesList } = getState().packages;
    const normalizedSearchTerm = normalizeText(word);
    const filteredPackages = packagesList.filter(
      (tour) =>
        normalizeText(tour.title).includes(normalizedSearchTerm)
    );
    return filteredPackages;
  }
);

// Función de utilidad para normalizar el texto eliminando tildes y convirtiendo a minúsculas
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

export const searchSlice = createSlice({
  name: "search",
  initialState: { searchResults: [], status: "idle", error: null },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPackagesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchPackagesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(searchPackagesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchResults } = searchSlice.actions;

export const packagesReducer = packagesSlice.reducer;
export const searchReducer = searchSlice.reducer;

export default packagesReducer;