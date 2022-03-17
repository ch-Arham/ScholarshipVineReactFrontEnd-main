import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  profile: [],
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.profile = payload.profile;
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    loggedOut: (state) => {
      state.isLoading = false;
      state.error = "";
      state.profile = [];
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail, loggedOut } = actions;

export default reducer;
