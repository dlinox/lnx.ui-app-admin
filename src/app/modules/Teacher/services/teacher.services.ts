
import { useHttp } from "@/core/composables/useHttp";

import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";
import { type ResponseServiceDTO } from "@/core/types/Response.types";

import type {
  TeacherDTO,
  TeacherFormDTO,
  TeacherDataTableItemDTO,
  TeacherFormErrorsDTO,
} from "@/app/modules/Teacher/types/Teacher.types";
import { _getTeacherFormInitValues } from "../configs/form.configs";

const http = useHttp();

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<TeacherDataTableItemDTO>> => {
  try {
    const response = await http.post("/teacher/load-data-table", request);
    return response.data.data as DataTableResponseDTO<TeacherDataTableItemDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _getItemById = async (id: number): Promise<TeacherFormDTO> => {
  try {
    const response = await http.get(`/teacher/item/by-id/${id}`);
    return response.data.data as TeacherFormDTO;
  } catch (error) {
    return _getTeacherFormInitValues();
  }
};

export const _storeItem = async (
  request: TeacherFormDTO
): Promise<ResponseServiceDTO<TeacherDTO | TeacherFormErrorsDTO>> => {
  try {
    let reponse = await http.post("/teacher", request);
    return {
      status: true,
      data: reponse.data.data as TeacherFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as TeacherFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: TeacherFormDTO
): Promise<ResponseServiceDTO<TeacherDTO | TeacherFormErrorsDTO>> => {
  try {
    let reponse = await http.put("/teacher", request);
    return {
      status: true,
      data: reponse.data.data as TeacherFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as TeacherFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: TeacherDataTableItemDTO
): Promise<boolean> => {
  try {
    await http.delete("/teacher", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const _createUser = async (
  request: TeacherDataTableItemDTO
): Promise<boolean> => {
  try {
    await http.post("/teacher/create-user", request);
    return true;
  } catch (error: any) {
    return false;
  }
};
