import { userPending, userSuccess, userFail } from "./userSlice";

export const getUser = async (dispatch, email) => {
  const authToken = await localStorage.getItem("authToken");
  dispatch(userPending());
  try {
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        authToken,
      },
    });
    const data = await response.json();
    dispatch(userSuccess(data));
  } catch (error) {
    dispatch(userFail());
  }
};
