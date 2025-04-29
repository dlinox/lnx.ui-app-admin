import { useHttp } from "@/core/composables/useHttp";

import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  AcademicSupervisionDTO,
  AcademicSupervisionFormDTO,
  AcademicSupervisionFormErrorsDTO,
} from "@/app/modules/AcademicSupervision/types/AcademicSupervision.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";

const http = useHttp();

const BASE_URL = "/academic-supervision";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<AcademicSupervisionDTO>> => {
  try {
    const response = await http.post(`${BASE_URL}/load-data-table`, request);
    return response.data.data as DataTableResponseDTO<AcademicSupervisionDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (
  request: AcademicSupervisionFormDTO
): Promise<
  ResponseServiceDTO<
    AcademicSupervisionFormDTO | AcademicSupervisionFormErrorsDTO
  >
> => {
  try {
    let reponse = await http.post(`${BASE_URL}/save`, request);
    return {
      status: true,
      data: reponse.data.data as AcademicSupervisionFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as AcademicSupervisionFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: any
): Promise<boolean> => {
  try {
    let reponse = await http.post(`${BASE_URL}/delete`, request);
    return reponse.data.status;
  }
  catch (error) {
    return false;
  }
}

//get-active-groups
export const _getActiveGroups = async (): Promise<any[]> => {
  try {
    let reponse = await http.get(`${BASE_URL}/active-groups`);
    return reponse.data.data;
  } catch (error) {
    return [];
  }
};