import { http } from "@/core/http";

import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";
import { type ResponseServiceDTO } from "@/core/types/Response.types";

import type {
  SheduleDTO,
  SheduleFormDTO,
  SheduleFormErrorsDTO,
} from "@/app/modules/Shedule/types/Shedule.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<SheduleDTO>> => {
  try {
    const response = await http().post(
      "/schedule/load-data-table",
      request
    );
    return response.data.data as DataTableResponseDTO<SheduleDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: SheduleFormDTO
): Promise<ResponseServiceDTO<SheduleDTO | SheduleFormErrorsDTO>> => {
  try {
    let reponse = await http().post("/schedule", request);
    return {
      status: true,
      data: reponse.data.data as SheduleFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as SheduleFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: SheduleFormDTO
): Promise<ResponseServiceDTO<SheduleDTO | SheduleFormErrorsDTO>> => {
  try {
    let reponse = await http().put("/schedule", request);
    return {
      status: true,
      data: reponse.data.data as SheduleFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as SheduleFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: SheduleFormDTO
): Promise<boolean> => {
  try {
    await http().delete("/schedule", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getShedulesForSelect = async (): Promise<
  ItemSelectDTO[]
> => {
  try {
    let response = await http().get("/schedule/items/for-select");
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
