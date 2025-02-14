import { http } from "@/core/http";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  PriceDataTableItemDTO,
  PriceDTO,
  PriceFormDTO,
  PriceFormErrorsDTO,
} from "@/app/modules/Price/types/Price.types";
import type { ResponseServiceDTO } from "@/core/types/Response.types";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<PriceDataTableItemDTO>> => {
  try {
    const response = await http().post("/price/load-data-table", request);
    return response.data.data as DataTableResponseDTO<PriceDataTableItemDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: PriceFormDTO
): Promise<ResponseServiceDTO<PriceDTO | PriceFormErrorsDTO>> => {
  try {
    let reponse = await http().post("/price", request);
    return {
      status: true,
      data: reponse.data.data as PriceFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as PriceFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: PriceFormDTO
): Promise<ResponseServiceDTO<PriceDTO | PriceFormErrorsDTO>> => {
  try {
    let reponse = await http().put("/price", request);
    return {
      status: true,
      data: reponse.data.data as PriceFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as PriceFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (request: PriceDataTableItemDTO): Promise<boolean> => {
  try {
    await http().delete("/price", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};
