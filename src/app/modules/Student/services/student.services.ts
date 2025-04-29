import { useHttp } from "@/core/composables/useHttp";

import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";

import type {
  StudentDTO,
  StudentFormDTO,
  StudentDataTableItemDTO,
  StudentFormErrorsDTO,
  StudentListItemDTO,
  StudentSearchListRequestDTO,
  StudentInfoDTO,
} from "@/app/modules/Student/types/Student.types";

import { _getStudentFormInitValues } from "../configs/form.configs";

const http = useHttp();
export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<StudentDataTableItemDTO>> => {
  try {
    const response = await http.post("/student/load-data-table", request);
    return response.data.data as DataTableResponseDTO<StudentDataTableItemDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _loadForm = async (id: number): Promise<StudentFormDTO> => {
  try {
    const response = await http.get(`/student/item/load-form/${id}`);
    return response.data.data as StudentFormDTO;
  } catch (error) {
    return _getStudentFormInitValues();
  }
};

export const _storeItem = async (
  request: StudentFormDTO
): Promise<ResponseServiceDTO<StudentDTO | StudentFormErrorsDTO>> => {
  try {
    let reponse = await http.post("/student", request);
    return {
      status: true,
      data: reponse.data.data as StudentFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as StudentFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: StudentFormDTO
): Promise<ResponseServiceDTO<StudentDTO | StudentFormErrorsDTO>> => {
  try {
    let reponse = await http.put("/student", request);
    return {
      status: true,
      data: reponse.data.data as StudentFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as StudentFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: StudentDataTableItemDTO
): Promise<boolean> => {
  try {
    await http.delete("/student", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __searchListStudent = async (
  request: StudentSearchListRequestDTO
): Promise<StudentListItemDTO[]> => {
  try {
    const response = await http.post("/student/search/list", request);
    return response.data.data as StudentListItemDTO[];
  } catch (error) {
    return [];
  }
};

export const _createUser = async (
  request: StudentDataTableItemDTO
): Promise<boolean> => {
  try {
    await http.post("/student/create-user", request);
    return true;
  } catch (error: any) {
    return false;
  }
};

export const __getInfoById = async (
  id: any
): Promise<StudentInfoDTO | null> => {
  try {
    const response = await http.get(`/student/info/${id}`);
    return response.data.data as StudentInfoDTO;
  } catch (error) {
    return null;
  }
};
