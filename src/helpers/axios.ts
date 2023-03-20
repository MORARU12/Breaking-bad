import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/character";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
