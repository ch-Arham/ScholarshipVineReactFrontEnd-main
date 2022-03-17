import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
  profile: [],
  authToken: "",
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
      state.profile = payload.profile;
      state.authToken = payload.token;
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    loggedOut: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = "";
      state.profile = [];
      state.authToken = "";
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail, loggedOut } = actions;

export default reducer;
