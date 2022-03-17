import axios from "axios";
import { loginPending, loginSuccess, loginFail, loggedOut } from "./authSlice";

export const login = async (dispatch, User) => {
  dispatch(loginPending());
  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email: User.email,
      password: User.password,
    });
    const data = response.data;
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail());
  }
};

export const register = async (dispatch, user) => {
  dispatch(loginPending());
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/createuser",
      user
    );
    const data = response.data;
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail());
  }
};


export const logout = async (dispatch) => {
  dispatch(loginPending());
  try {
    dispatch(loggedOut());
  } catch (error) {
    dispatch(loginFail());
  }
};
