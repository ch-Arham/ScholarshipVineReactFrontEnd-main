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
      "http://simwjo069f.execute-api.us-east-1.amazonaws.com/dev/login",
      {
        headers: {
          "x-amzn-RequestId": "c4af8f15-5c57-4ae3-8b05-6060cdf86c69",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, Access-Control-Allow-Headers",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "x-amz-apigw-id": "PBN4jH6CIAMFTmA=",
          "X-Amzn-Trace-id":
            "Root=1-62305d03-58083112005f533c1caeeaaa;Sample=0",
          "X-Cache": "Miss from cloudfront",
          "Via": "1.1 289a9745961f61628764c51baab54288.cloudfront.net",
          "X-Amz-Cf-Pop": "LHR50-P2",
        },
      },
      {
        email: User.email,
        password: User.password,
      }
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
      "https://simwjo069f.execute-api.us-east-1.amazonaws.com/dev/reg",
      user
    );
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFail());
  }
};
