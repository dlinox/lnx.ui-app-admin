import { useHttp } from "@/core/composables/useHttp";

const http = useHttp();

import type {
  ChangePasswordFormDTO,
  ChangePasswordFormErrorDTO,
} from "@/app/modules/Profile/types/Profile.types";

import type { ResponseServiceDTO } from "@/core/types/Response.types";

const BASE_URL = "/user/profile";

export const _changePassword = async (
  request: ChangePasswordFormDTO
): Promise<ResponseServiceDTO<boolean | ChangePasswordFormErrorDTO>> => {
  try {
    let reponse = await http.post(`${BASE_URL}/change-password`, request);
    return {
      status: true,
      data: reponse.data.data as boolean,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as ChangePasswordFormErrorDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};
