import { http } from "@/core/http";

import {
  getSessionToken,
  setSessionToken,
  removeSessionToken,
} from "@/core/utils/session.utils";

import { useAuthStore } from "@/app/store/auth.stores";

import { type AuthRequestDTO } from "../types/Auth.types";

export const signIn = async (form: AuthRequestDTO): Promise<boolean> => {
  const authStore = useAuthStore();
  try {
    let response = await http().post(`/auth/sign-in`, form);

    setSessionToken(response.data.data.token);
    authStore.setAuthState(response.data.data, true);
    return true;
  } catch (error) {
    return false;
  }
};

export const signOut = async () => {
  const authStore = useAuthStore();
  try {
    await http().post(`/auth/sign-out`, null);
    removeSessionToken();
    authStore.singOut();
    return true;
  } catch (error) {
    return false;
  }
};

export const user = async () => {
  const authStore = useAuthStore();
  try {
    let token = getSessionToken()
    if (!token) {
      console.log("No token found");
      removeSessionToken();
      authStore.singOut();
      return;
    }
    let response = await http().get(`auth/user`);

    authStore.setAuthState(response.data.data);
    return response.data.data;
  } catch (error: any) {
    return false;
  }
};

export const clearSession = async () => {
  const authStore = useAuthStore();
  localStorage.removeItem("token");
  authStore.clearAuthState();
};
