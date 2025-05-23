import { useHttp } from "@/core/composables/useHttp";
import type { SelectOption } from "naive-ui";
import type {
  RecognitionDTO,
  RecognitionFormDTO,
  RecognitionFormErrorsDTO,
} from "@/app/modules/Recognition/types/Recognition.types";
import type { ResponseServiceDTO } from "@/core/types/Response.types";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

const http = useHttp();

const pathModule = "recognition";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<RecognitionDTO>> => {
  try {
    const response = await http.post(`${pathModule}/load-data-table`, request);
    return response.data.data as DataTableResponseDTO<RecognitionDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: RecognitionFormDTO
): Promise<ResponseServiceDTO<any | RecognitionFormErrorsDTO>> => {
  try {
    let reponse = await http.post(`${pathModule}`, request);
    return {
      status: true,
      data: reponse.data.data,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as RecognitionFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

//   _updateItem,
export const _updateItem = async (
  request: RecognitionFormDTO
): Promise<ResponseServiceDTO<any | RecognitionFormErrorsDTO>> => {
  try {
    let reponse = await http.put(`${pathModule}`, request);
    return {
      status: true,
      data: reponse.data.data,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as RecognitionFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: RecognitionDTO
): Promise<boolean> => {
  try {
    await http.delete(`${pathModule}`, { data: request });
    return true;
  } catch (error) {
    return false;
  }
};

export const _getModuleEnrollmentsForSelect = async (
  studentId: number
): Promise<SelectOption[]> => {
  try {
    const response = await http.get(
      `${pathModule}/module-enrollments/items/for-select/${studentId}`
    );
    return response.data.data as SelectOption[];
  } catch (error) {
    return [];
  }
};

export const _getCourseByModuleForSelect = async (
  request: any
): Promise<SelectOption[]> => {
  try {
    const response = await http.post(
      `${pathModule}/courses-by-module/items/for-select`,
      request
    );
    return response.data.data as SelectOption[];
  } catch (error) {
    return [];
  }
};

export const _getCourseExtracurricularsForSelect = async (
  studentId: number
): Promise<SelectOption[]> => {
  try {
    const response = await http.get(
      `${pathModule}/course-extracurriculars-by-student/items/for-select/${studentId}`
    );
    return response.data.data as SelectOption[];
  } catch (error) {
    return [];
  }
};
