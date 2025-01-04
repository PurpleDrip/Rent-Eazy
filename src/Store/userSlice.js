import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegistered: false,
  isLoggedIn: false,
  userInfo: null,
  houseData: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state) {
      state.isRegistered = true;
    },
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
    addData(state, action) {
      state.houseData = action.payload;
    },
  },
});

export const { register, login, logout, addData } = userSlice.actions;

export default userSlice.reducer;
