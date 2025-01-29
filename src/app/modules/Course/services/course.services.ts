import { http } from "@/core/http";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  CourseDTO,
  CourseFormDTO,
  CourseFormErrorsDTO,
} from "@/app/modules/Course/types/Course.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<CourseDTO>> => {
  try {
    const response = await http().post("/course/load-data-table", request);
    return response.data.data as DataTableResponseDTO<CourseDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: CourseFormDTO
): Promise<ResponseServiceDTO<CourseDTO | CourseFormErrorsDTO>> => {
  try {
    let reponse = await http().post("/course", request);
    return {
      status: true,
      data: reponse.data.data as CourseFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CourseFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: CourseFormDTO
): Promise<ResponseServiceDTO<CourseDTO | CourseFormErrorsDTO>> => {
  try {
    let reponse = await http().put("/course", request);
    return {
      status: true,
      data: reponse.data.data as CourseFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CourseFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (request: CourseFormDTO): Promise<boolean> => {
  try {
    await http().delete("/course", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getCoursesForSelect = async (): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http().get("/course/items/for-select");
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};

export const __getPreRequisiteByCurriculumItemsForSelect = async (
  id: any
): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http().get(
      "/course/prerequisite-by-curriculum/items/for-select/" + id
    );
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
