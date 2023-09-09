import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000", // api url
  // baseURL: "https://clean-gloves-bee.cyclic.app", // api url
  // baseURL: "https://happy-jade-peacock.cyclic.app/",

  withCredentials: true,
});

export default instance;