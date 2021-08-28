import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

// const authSlice = createSlice({
// name: "auth",
// initialState,
// extraReducers: {
// [register.fulfilled](state, { payload }) {
// state.user = payload.user;
// state.token = payload.token;
// state.isLoggedIn = true;
// },
// [logIn.fulfilled](state, { payload }) {
// state.user = payload.user;
// state.token = payload.token;
// state.isLoggedIn = true;
// },
// [logOut.fulfilled](state, { payload }) {
// state.user = { name: null, email: null };
// state.token = null;
// state.isLoggedIn = false;
// },
// [fetchCurrentUser.pending](state) {
// state.isFetchingCurrent = true;
// },
// [fetchCurrentUser.fulfilled](state, { payload }) {
// state.user = payload;
// state.isLoggedIn = true;
// state.isFetchingCurrent = false;
// },
// },
// });
export default authSlice.reducer;
