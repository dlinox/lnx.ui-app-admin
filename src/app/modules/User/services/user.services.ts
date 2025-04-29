
import { useHttp } from "@/core/composables/useHttp";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  UserDTO,
  UserFormDTO,
  UserFormErrorsDTO,
} from "@/app/modules/User/types/User.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

const http  = useHttp();

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<UserDTO>> => {
  try {
    const response = await http.post("/user/load-data-table", request);
    return response.data.data as DataTableResponseDTO<UserDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: UserFormDTO
): Promise<ResponseServiceDTO<UserDTO | UserFormErrorsDTO>> => {
  try {
    let reponse = await http.post("/user", request);
    return {
      status: true,
      data: reponse.data.data as UserFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as UserFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _storeAccountItem = async (
  request: any
): Promise<boolean> => {
  try {
    await http.post("/user/account", request);
    return true;
  }
  catch (error: any) {
    return false;
  }
};

export const _updateAccountItem = async (
  request: any
): Promise<boolean> => {
  try {
    await http.put("/user/account", request);
    return true;
  }
  catch (error: any) {
    return false;
  }
};

export const _updateItem = async (
  request: UserFormDTO
): Promise<ResponseServiceDTO<UserDTO | UserFormErrorsDTO>> => {
  try {
    let reponse = await http.put("/user", request);
    return {
      status: true,
      data: reponse.data.data as UserFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as UserFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (request: UserFormDTO): Promise<boolean> => {
  try {
    await http.delete("/user", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getUsersForSelect = async (): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http.get("/user/items/for-select");
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
