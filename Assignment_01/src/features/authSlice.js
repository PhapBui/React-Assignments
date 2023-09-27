import { createSlice } from "@reduxjs/toolkit";

const initAuth = {
  user: {},
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuth,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
