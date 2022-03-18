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
  },
});

const { reducer, actions } = loginSlice;

export const { userPending, userSuccess, userFail } = actions;

export default reducer;
