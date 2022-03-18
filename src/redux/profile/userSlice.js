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
    userPending: (state) => {
      state.isLoading = true;
    },
    userSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = "";
      state.profile = payload.user;
    },
    userFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    userLogout: (state) => {
      state.profile = [];
    },
  },
});

const { reducer, actions } = loginSlice;

export const { userPending, userSuccess, userFail, userLogout } = actions;

export default reducer;
