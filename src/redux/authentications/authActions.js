import axios from "axios";
import { loginPending, loginSuccess, loginFail } from "./authSlice";
axios.defaults.headers.common = {
  ...axios.defaults.headers.common,
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};
axios.defaults.preflightContinue = true;

export const login = async (dispatch, User) => {
  dispatch(loginPending());
  try {
    const response = await axios.post(
      "https://localhost:5000/api/auth/login",
      User
    );
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFail());
  }
};
export const register = async (dispatch, user) => {
  dispatch(loginPending());
  try {
    const response = await axios.post(
      "https://localhost:5000/api/auth/createuser",
      user
    );
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFail());
  }
};
