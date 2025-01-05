import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch data from the server
export const fetchHouseData = createAsyncThunk(
  "user/fetchHouseData",
  async () => {
    const response = await axios.get("http://localhost:3000/getData");
    return response.data;
  }
);

let initialState = {
  isRegistered: localStorage.getItem("Registered") === "true",
  userInfo: null,
  houseData: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registered(state) {
      state.isRegistered = true;
      localStorage.setItem("Registered", "true");
    },
    addData(state, action) {
      state.houseData = action.payload;
    },
    logout(state) {
      localStorage.setItem("Registered", "false");
      state.isRegistered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouseData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHouseData.fulfilled, (state, action) => {
        state.loading = false;
        state.houseData = action.payload;
      })
      .addCase(fetchHouseData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { registered, addData, logout } = userSlice.actions;

export default userSlice.reducer;
