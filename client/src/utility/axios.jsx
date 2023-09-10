import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:4000", // api url
  baseURL: "https://evanforum-g4.onrender.com/",

  withCredentials: true,
});

export default instance;