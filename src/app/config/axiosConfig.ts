import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { apiConfig } from "../../app/config/apiConfig";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: apiConfig.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const xsrfToken = Cookies.get("XSRF-TOKEN");

    if (xsrfToken && config.headers) {
      config.headers["XSRF-TOKEN"] = xsrfToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
