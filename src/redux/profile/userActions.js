import axios from "axios";
import { userPending, userSuccess, userFail } from "./userSlice";

export const getUser = async (dispatch, email) => {
  const authToken = localStorage.getItem("authToken");
  dispatch(userPending());
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/getuser",
      { email },

      {
        Headers: {
          authToken: authToken,
        },
      }
    );

    dispatch(userSuccess(response.data));
  } catch (error) {
    dispatch(userFail());
  }
};
