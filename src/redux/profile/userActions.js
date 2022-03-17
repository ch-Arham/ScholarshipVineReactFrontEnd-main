import axios from "axios";
import { loginPending, loginSuccess, loginFail } from "./authSlice";
export const getUser = async (dispatch, user) => {
  dispatch(loginPending());
  try {
    const response = await axios.get(
      "http://localhost:5000/api/auth/getuser",
      user
    );
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFail());
  }
};
