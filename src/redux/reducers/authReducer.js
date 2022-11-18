import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlicer.actions;

export default authSlicer.reducer;