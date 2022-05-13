import axios from "axios";

const baseURL = "https://www.breakingbadapi.com/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
