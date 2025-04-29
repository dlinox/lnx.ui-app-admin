import { useHttp } from "@/core/composables/useHttp";

const http = useHttp();

import {
  getSessionToken,
  setSessionToken,
  removeSessionToken,
} from "@/core/utils/session.utils";

import { useAuthStore } from "@/app/store/auth.stores";

import {
  type AuthFormDTO,
  type ResetPasswordFormDTO,
} from "../types/Auth.types";

const BASE_MODULE_URL = "/auth";

export const _signIn = async (form: AuthFormDTO): Promise<boolean> => {
  removeSessionToken();
  const authStore = useAuthStore();
  try {
    let response = await http.post(`${BASE_MODULE_URL}/sign-in`, form);
    setSessionToken(response.data.data.token);
    authStore.setAuthState(response.data.data, true);
    return true;
  } catch (error) {
    return false;
  }
};

export const _signOut = async () => {
  const authStore = useAuthStore();
  try {
    await http.post(`${BASE_MODULE_URL}/sign-out`, {});
    removeSessionToken();
    authStore.singOut();
    return true;
  } catch (error) {
    return false;
  }
};

export const _user = async () => {
  const authStore = useAuthStore();
  try {
    let token = getSessionToken();
    if (!token) {
      removeSessionToken();
      authStore.singOut();
      return;
    }
    let response = await http.get(`${BASE_MODULE_URL}/user`);
    authStore.setAuthState(response.data.data);
    return response.data.data;
  } catch (error: any) {
    return false;
  }
};

export const _resetPassword = async (
  form: ResetPasswordFormDTO
): Promise<boolean> => {
  try {
    await http.post(`${BASE_MODULE_URL}/reset-password`, form);
    return true;
  } catch (error) {
    return false;
  }
};

export const _clearSession = async () => {
  const authStore = useAuthStore();
  removeSessionToken();
  authStore.clearAuthState();
};
