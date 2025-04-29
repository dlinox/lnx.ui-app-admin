import { useHttp } from "@/core/composables/useHttp";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  ModuleDTO,
  ModuleFormDTO,
  ModuleFormErrorsDTO,
} from "@/app/modules/Module/types/Module.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

const http = useHttp();
export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<ModuleDTO>> => {
  try {
    const response = await http.post("/module/load-data-table", request);
    return response.data.data as DataTableResponseDTO<ModuleDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: ModuleFormDTO
): Promise<ResponseServiceDTO<ModuleDTO | ModuleFormErrorsDTO>> => {
  try {
    let reponse = await http.post("/module", request);
    return {
      status: true,
      data: reponse.data.data as ModuleFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as ModuleFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: ModuleFormDTO
): Promise<ResponseServiceDTO<ModuleDTO | ModuleFormErrorsDTO>> => {
  try {
    let reponse = await http.put("/module", request);
    return {
      status: true,
      data: reponse.data.data as ModuleFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as ModuleFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (request: ModuleFormDTO): Promise<boolean> => {
  try {
    await http.delete("/module", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getModulesForSelect = async (
  query: any
): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http.get("/module/items/for-select", {
      params: query,
    });
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};

export const __getModulesForCurriculumForSelect = async (
  id: any
): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http.get(
      "/module/items/for-select/curriculum/" + id
    );
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
