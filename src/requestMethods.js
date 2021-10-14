import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// const TOKEN = "";

const isValidToken = () => {
  if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth).currentUser) {
    return true;
  }
};

const TOKEN = isValidToken() ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth).currentUser.accessToken : "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
