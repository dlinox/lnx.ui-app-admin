import { useHttp } from "@/core/composables/useHttp";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  AreaDTO,
  AreaFormDTO,
  AreaFormErrorsDTO,
} from "@/app/modules/Area/types/Area.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

const http = useHttp();
export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<AreaDTO>> => {
  try {
    const response = await http.post("/area/load-data-table", request);
    return response.data.data as DataTableResponseDTO<AreaDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: AreaFormDTO
): Promise<ResponseServiceDTO<AreaDTO | AreaFormErrorsDTO>> => {
  try {
    let reponse = await http.post("/area", request);
    return {
      status: true,
      data: reponse.data.data as AreaFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as AreaFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: AreaFormDTO
): Promise<ResponseServiceDTO<AreaDTO | AreaFormErrorsDTO>> => {
  try {
    let reponse = await http.put("/area", request);
    return {
      status: true,
      data: reponse.data.data as AreaFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as AreaFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (request: AreaFormDTO): Promise<boolean> => {
  try {
    await http.delete("/area", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getAreasForSelect = async (
  query: any
): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http.get("/area/items/for-select", {
      params: query,
    });
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
