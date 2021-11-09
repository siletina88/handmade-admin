import axios from "axios";
import { store } from "./redux/store";
const { REACT_APP_BASE_URL } = process.env;

const BASE_URL = REACT_APP_BASE_URL;
const getStorage = JSON.parse(localStorage.getItem("persist:root"));

// const isValidToken = () => {
//   if (getStorage) {
//     if (getStorage.auth.includes("accessToken")) {
//       return true;
//     }
//   }
// };

// const TOKEN = isValidToken() ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth).currentUser.accessToken : "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.currentUser.accessToken;
    config.headers["token"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.log("Interceptor Request Error" + error);
  }
);
