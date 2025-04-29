import { useHttp } from "@/core/composables/useHttp";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  RoleDTO,
  RoleFormDTO,
  RoleFormErrorsDTO,
} from "@/app/modules/Role/types/Role.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

const http = useHttp();

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<RoleDTO>> => {
  try {
    const response = await http.post("/role/load-data-table", request);
    return response.data.data as DataTableResponseDTO<RoleDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: RoleFormDTO
): Promise<ResponseServiceDTO<RoleDTO | RoleFormErrorsDTO>> => {
  try {
    let reponse = await http.post("/role", request);
    return {
      status: true,
      data: reponse.data.data as RoleFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as RoleFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: RoleFormDTO
): Promise<ResponseServiceDTO<RoleDTO | RoleFormErrorsDTO>> => {
  try {
    let reponse = await http.put("/role", request);
    return {
      status: true,
      data: reponse.data.data as RoleFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as RoleFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (request: RoleFormDTO): Promise<boolean> => {
  try {
    await http.delete("/role", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getRolesForSelect = async (
  level: string
): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http.get("/role/items/for-select", {
      params: { level },
    });
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
