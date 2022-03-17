import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authentications/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
