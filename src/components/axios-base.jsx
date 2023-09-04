import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://news-server-1ny4.onrender.com/api/",
});

export default axiosBase;
