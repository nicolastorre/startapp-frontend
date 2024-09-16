import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { apiConfig } from "../../app/config/apiConfig";
import Cookies from "js-cookie";
import { Container } from "../../Container";
import { RefreshConnectionAuth } from "../../domain/usecases/auth/RefreshConnectionAuth";

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
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Pour éviter de boucler infiniment

      try {
        const refreshConnectionAuth = Container.get<RefreshConnectionAuth>(
          "RefreshConnectionAuth"
        );
        await refreshConnectionAuth.execute();

        return axiosInstance(originalRequest);
      } catch (err) {
        console.error(err instanceof Error ? err.message : "Undefined error");
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
