// import { http } from "@/core/http";
import { useHttp } from "@/core/composable/useHttp";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  PeriodDTO,
  PeriodFormDTO,
  PeriodFormErrorsDTO,
} from "@/app/modules/Period/types/Period.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

const http = useHttp();
export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<PeriodDTO>> => {
  try {
    const response = await http.post("/period/load-data-table", request);
    return response.data.data as DataTableResponseDTO<PeriodDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: PeriodFormDTO
): Promise<ResponseServiceDTO<PeriodDTO | PeriodFormErrorsDTO>> => {
  try {
    let reponse = await http.post("/period", request);
    return {
      status: true,
      data: reponse.data.data as PeriodFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as PeriodFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: PeriodFormDTO
): Promise<ResponseServiceDTO<PeriodDTO | PeriodFormErrorsDTO>> => {
  try {
    let reponse = await http.put("/period", request);
    return {
      status: true,
      data: reponse.data.data as PeriodFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as PeriodFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (request: PeriodFormDTO): Promise<boolean> => {
  try {
    await http.delete("/period", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getPeriodsForSelect = async (): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http.get("/period/items/for-select");
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
