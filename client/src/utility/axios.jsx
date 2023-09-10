import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:4000", // api url
  baseURL: "https://puce-perch-boot.cyclic.cloud/", // api url

  withCredentials: true,
});

export default instance;