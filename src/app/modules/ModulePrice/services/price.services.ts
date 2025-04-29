import { useHttp } from "@/core/composables/useHttp";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  ModulePriceDataTableItemDTO,
  ModulePriceDTO,
  ModulePriceFormDTO,
  ModulePriceFormErrorsDTO,
} from "@/app/modules/ModulePrice/types/ModulePrice.types";
import type { ResponseServiceDTO } from "@/core/types/Response.types";

const http = useHttp();
export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<ModulePriceDataTableItemDTO>> => {
  try {
    const response = await http.post("/module-price/load-data-table", request);
    return response.data.data as DataTableResponseDTO<ModulePriceDataTableItemDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: ModulePriceFormDTO
): Promise<ResponseServiceDTO<ModulePriceDTO | ModulePriceFormErrorsDTO>> => {
  try {
    let reponse = await http.post("/module-price", request);
    return {
      status: true,
      data: reponse.data.data as ModulePriceFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as ModulePriceFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: ModulePriceFormDTO
): Promise<ResponseServiceDTO<ModulePriceDTO | ModulePriceFormErrorsDTO>> => {
  try {
    let reponse = await http.put("/module-price", request);
    return {
      status: true,
      data: reponse.data.data as ModulePriceFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as ModulePriceFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (request: ModulePriceDataTableItemDTO): Promise<boolean> => {
  try {
    await http.delete("/module-price", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};
