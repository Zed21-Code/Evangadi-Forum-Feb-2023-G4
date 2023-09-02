import axios from "axios";

const instance = axios.create({
    baseURL: "https://happy-jade-peacock.cyclic.app/",
    withCredentials: true,
})

export default instance;

// npm i react-router-dom react-icons react-bootstrap bootstrap axios @mui/material @mui/icons-material @emotion/styled @emotion/react