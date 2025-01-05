import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  isRegistered: localStorage.getItem("Registered") === "true",
  userInfo: null,
  houseData: [],
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
    refetch(state) {
      axios
        .get("http://localhost:3000/getData")
        .then((response) => {
          dispatch(addData(response.data));
        })
        .catch((err) => console.log(err));
    },
  },
});

export const { registered, addData, logout, refetch } = userSlice.actions;

export default userSlice.reducer;
