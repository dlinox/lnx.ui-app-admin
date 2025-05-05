import axios, { type AxiosInstance } from "axios";
import { getSessionToken } from "@/core/utils/session.utils";

import { useToast } from "vue-toast-notification";
const toast = useToast();
export const http = (
  baseURL: string = import.meta.env.VITE_APP_API_URL as string
): AxiosInstance => {
  const token: string = getSessionToken();

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: token !== "" ? { Authorization: `Bearer ${token}` } : {},
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.data.message) {
        toast.success(response.data.message,{
          position: 'top-right',
        });
      }
      return response;
    },
    (error: any) => {
      if (error.response?.status === 300) {
        toast.warning(error.response?.data.message || "Error desconocido", {
          duration: 5000,
          position: 'top-right',
        });
      } else {
        toast.error(error.response?.data.message || "Error desconocido", {
          duration: 5000,
          position: 'top-right',
        });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
