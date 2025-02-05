import { http } from "@/core/http";

import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";
import { type ResponseServiceDTO } from "@/core/types/Response.types";

import type {
  SessionTimeDTO,
  SessionTimeFormDTO,
  SessionTimeFormErrorsDTO,
} from "@/app/modules/SessionTime/types/SessionTime.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<SessionTimeDTO>> => {
  try {
    const response = await http().post(
      "/session-time/load-data-table",
      request
    );
    return response.data.data as DataTableResponseDTO<SessionTimeDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: SessionTimeFormDTO
): Promise<ResponseServiceDTO<SessionTimeDTO | SessionTimeFormErrorsDTO>> => {
  try {
    let reponse = await http().post("/session-time", request);
    return {
      status: true,
      data: reponse.data.data as SessionTimeFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as SessionTimeFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: SessionTimeFormDTO
): Promise<ResponseServiceDTO<SessionTimeDTO | SessionTimeFormErrorsDTO>> => {
  try {
    let reponse = await http().put("/session-time", request);
    return {
      status: true,
      data: reponse.data.data as SessionTimeFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as SessionTimeFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: SessionTimeFormDTO
): Promise<boolean> => {
  try {
    await http().delete("/session-time", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getSessionTimesForSelect = async (): Promise<
  ItemSelectDTO[]
> => {
  try {
    let response = await http().get("/session-time/items/for-select");
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
