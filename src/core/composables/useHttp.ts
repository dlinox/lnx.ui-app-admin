import axios, { type AxiosInstance } from "axios";
import { getSessionToken } from "@/core/utils/session.utils";
import { toast as toastify, type ToastOptions } from "vue3-toastify";

export function useHttp(
  baseURL: string = import.meta.env.VITE_APP_API_URL as string
): AxiosInstance {
  const axiosInstance = axios.create({ baseURL });

  axiosInstance.interceptors.request.use((config) => {
    const token: string = getSessionToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.data.message) {
        toastify(response.data.message, { type: "success" } as ToastOptions);
      }
      return response;
    },
    (error) => {
      const errorMessage =
        error.response?.data?.message ||
        "Ocurrió un error, por favor intente de nuevo";
      const statusCode = error.response?.status;

      if (statusCode === 300) {
        toastify(errorMessage, { type: "info" } as ToastOptions);
      } else {
        toastify(errorMessage, { type: "error" } as ToastOptions);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
