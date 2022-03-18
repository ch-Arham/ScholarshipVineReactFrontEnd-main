import { userPending, userSuccess, userFail } from "./userSlice";

export const getUser = async (dispatch, userId) => {
  const authToken = localStorage.getItem("authToken");
  dispatch(userPending());

  try {
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        authToken,
      },
      body: JSON.stringify({ userId }), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    dispatch(userSuccess(data));
  } catch (error) {
    dispatch(userFail());
  }
};
