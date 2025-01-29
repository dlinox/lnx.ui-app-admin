import { http } from "@/core/http";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  CurriculumModuleCourseDTO,
  CurriculumModuleCourseFormDTO,
  CurriculumModuleCourseFormErrorsDTO,
} from "@/app/modules/Curriculum/types/Curriculum.types";
import type { ResponseServiceDTO } from "@/core/types/Response.types";
import { _getCurriculumModuleCourseInitValues } from "../configs/form.configs";

export const _loadDataTable = async (
  request: any,
  id: any
): Promise<DataTableResponseDTO<CurriculumModuleCourseDTO>> => {
  try {
    request.id = id;
    const response = await http().post(
      "/curriculum/module/course/load-data-table",
      request
    );
    return response.data
      .data as DataTableResponseDTO<CurriculumModuleCourseDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};
export const _storeItem = async (
  request: CurriculumModuleCourseFormDTO
): Promise<
  ResponseServiceDTO<
    CurriculumModuleCourseDTO | CurriculumModuleCourseFormErrorsDTO
  >
> => {
  try {
    const reponse = await http().post("/curriculum/module/course", request);
    return {
      status: true,
      data: reponse.data.data as CurriculumModuleCourseDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CurriculumModuleCourseFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: CurriculumModuleCourseFormDTO
): Promise<
  ResponseServiceDTO<
    CurriculumModuleCourseDTO | CurriculumModuleCourseFormErrorsDTO
  >
> => {
  try {
    const reponse = await http().put("/curriculum/module/course", request);
    return {
      status: true,
      data: reponse.data.data as CurriculumModuleCourseDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CurriculumModuleCourseFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: CurriculumModuleCourseDTO
): Promise<boolean> => {
  try {
    await http().delete("/curriculum/module/course", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const _getItemById = async (
  id: number
): Promise<CurriculumModuleCourseFormDTO> => {
  try {
    const response = await http().get(
      `/curriculum/module/course/get-item-by-id/${id}`
    );
    return response.data.data as CurriculumModuleCourseFormDTO;
  } catch (error) {
    return _getCurriculumModuleCourseInitValues();
  }
};
