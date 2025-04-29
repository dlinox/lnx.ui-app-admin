import { useHttp } from "@/core/composables/useHttp";

import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  EnrollmentDeadlineDTO,
  EnrollmentDeadlineFormDTO,
  EnrollmentDeadlineFormErrorsDTO,
} from "@/app/modules/EnrollmentDeadline/types/EnrollmentDeadline.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";

const http = useHttp();

const BASE_URL = "/enrollment-deadlines";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<EnrollmentDeadlineDTO>> => {
  try {
    const response = await http.post(`${BASE_URL}/load-data-table`, request);
    return response.data.data as DataTableResponseDTO<EnrollmentDeadlineDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (
  request: EnrollmentDeadlineFormDTO
): Promise<
  ResponseServiceDTO<
    EnrollmentDeadlineFormDTO | EnrollmentDeadlineFormErrorsDTO
  >
> => {
  try {
    let reponse = await http.post(`${BASE_URL}/save`, request);
    return {
      status: true,
      data: reponse.data.data as EnrollmentDeadlineFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as EnrollmentDeadlineFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const __getActiveEnrollmentPeriod = async (): Promise<any | boolean> => {
  try {
    let reponse = await http.get(`${BASE_URL}/active-enrollment-period`);
    return reponse.data.data;
  } catch (error) {
    return false;
  }
};
