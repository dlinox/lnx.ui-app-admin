import { http } from "@/core/http";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  LaboratoryDTO,
  LaboratoryFormDTO,
  LaboratoryFormErrorsDTO,
} from "@/app/modules/Laboratory/types/Laboratory.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<LaboratoryDTO>> => {
  try {
    const response = await http().post(
      "/laboratory/load-data-table",
      request
    );
    return response.data.data as DataTableResponseDTO<LaboratoryDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: LaboratoryFormDTO
): Promise<ResponseServiceDTO<LaboratoryDTO | LaboratoryFormErrorsDTO>> => {
  try {
    let reponse = await http().post("/laboratory", request);
    return {
      status: true,
      data: reponse.data.data as LaboratoryFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as LaboratoryFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: LaboratoryFormDTO
): Promise<ResponseServiceDTO<LaboratoryDTO | LaboratoryFormErrorsDTO>> => {
  try {
    let reponse = await http().put("/laboratory", request);
    return {
      status: true,
      data: reponse.data.data as LaboratoryFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as LaboratoryFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: LaboratoryFormDTO
): Promise<boolean> => {
  try {
    await http().delete("/laboratory", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getLaboratorysForSelect = async (): Promise<
  ItemSelectDTO[]
> => {
  try {
    let response = await http().get("/laboratory/items/for-select");
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
