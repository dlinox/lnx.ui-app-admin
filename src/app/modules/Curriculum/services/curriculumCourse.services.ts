import { useHttp } from "@/core/composables/useHttp";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  CurriculumCourseDataTableItemDTO,
  CurriculumCourseFormDTO,
  CurriculumCourseFormErrorsDTO,
} from "@/app/modules/Curriculum/types/Curriculum.types";
import { _getCurriculumCourseInitValues } from "../configs/form.configs";
import type { ResponseServiceDTO } from "@/core/types/Response.types";

const modulePath = "/curriculum/course" as string;
const http = useHttp();
export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<CurriculumCourseDataTableItemDTO>> => {
  try {
    const response = await http.post(
      `${modulePath}/load-data-table`,
      request
    );
    return response.data
      .data as DataTableResponseDTO<CurriculumCourseDataTableItemDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: CurriculumCourseFormDTO
): Promise<
  ResponseServiceDTO<CurriculumCourseFormDTO | CurriculumCourseFormErrorsDTO>
> => {
  try {
    const reponse = await http.post(modulePath, request);
    return {
      status: true,
      data: reponse.data.data as CurriculumCourseFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CurriculumCourseFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: CurriculumCourseFormDTO
): Promise<
  ResponseServiceDTO<CurriculumCourseFormDTO | CurriculumCourseFormErrorsDTO>
> => {
  try {
    const reponse = await http.put(modulePath, request);
    return {
      status: true,
      data: reponse.data.data as CurriculumCourseFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CurriculumCourseFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: CurriculumCourseDataTableItemDTO
): Promise<boolean> => {
  try {
    await http.delete(modulePath, { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const _getItemById = async (
  id: number
): Promise<CurriculumCourseFormDTO> => {
  try {
    const response = await http.get(`${modulePath}/get-item-by-id/${id}`);
    return response.data.data as CurriculumCourseFormDTO;
  } catch (error) {
    return _getCurriculumCourseInitValues();
  }
};
