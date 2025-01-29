import { http } from "@/core/http";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  PaymentTypeDTO,
  PaymentTypeFormDTO,
  PaymentTypeFormErrorsDTO,
} from "@/app/modules/PaymentType/types/PaymentType.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<PaymentTypeDTO>> => {
  try {
    const response = await http().post(
      "/payment-type/load-data-table",
      request
    );
    return response.data.data as DataTableResponseDTO<PaymentTypeDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: PaymentTypeFormDTO
): Promise<ResponseServiceDTO<PaymentTypeDTO | PaymentTypeFormErrorsDTO>> => {
  try {
    let reponse = await http().post("/payment-type", request);
    return {
      status: true,
      data: reponse.data.data as PaymentTypeFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as PaymentTypeFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: PaymentTypeFormDTO
): Promise<ResponseServiceDTO<PaymentTypeDTO | PaymentTypeFormErrorsDTO>> => {
  try {
    let reponse = await http().put("/payment-type", request);
    return {
      status: true,
      data: reponse.data.data as PaymentTypeFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as PaymentTypeFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: PaymentTypeFormDTO
): Promise<boolean> => {
  try {
    await http().delete("/payment-type", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};
