import { useHttp } from "@/core/composables/useHttp";

const http = useHttp();

import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";
import { type ResponseServiceDTO } from "@/core/types/Response.types";

import type {
  StudentTypeDTO,
  StudentTypeFormDTO,
  StudentTypeFormErrorsDTO,
} from "@/app/modules/StudentType/types/StudentType.types";
import type { SelectOption } from "naive-ui";

const BASE_URL = "/student-type";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<StudentTypeDTO>> => {
  try {
    const response = await http.post(`${BASE_URL}/load-data-table`, request);
    return response.data.data as DataTableResponseDTO<StudentTypeDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (
  request: StudentTypeFormDTO
): Promise<ResponseServiceDTO<StudentTypeDTO | StudentTypeFormErrorsDTO>> => {
  try {
    let reponse = await http.post(`${BASE_URL}/save`, request);
    return {
      status: true,
      data: reponse.data.data as StudentTypeFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as StudentTypeFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: StudentTypeFormDTO
): Promise<boolean> => {
  try {
    await http.delete("/student-type", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getStudentTypesForSelect = async (): Promise<SelectOption[]> => {
  try {
    let response = await http.get("/student-type/items/for-select");
    return response.data.data as SelectOption[];
  } catch (error) {
    return [];
  }
};
