
import { useHttp } from "@/core/composables/useHttp";
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
import { _getCourseInitValues } from "../configs/form.configs";

const http = useHttp();

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<CourseDTO>> => {
  try {
    const response = await http.post("/course/load-data-table", request);
    return response.data.data as DataTableResponseDTO<CourseDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: CourseFormDTO
): Promise<ResponseServiceDTO<CourseDTO | CourseFormErrorsDTO>> => {
  try {
    let reponse = await http.post("/course", request);
    return {
      status: true,
      data: reponse.data.data as CourseDTO,
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
): Promise<ResponseServiceDTO<CourseFormDTO | CourseFormErrorsDTO>> => {
  try {
    let reponse = await http.put("/course", request);
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

export const _deleteItem = async (request: CourseDTO): Promise<boolean> => {
  try {
    await http.delete("/course", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const _getItemById = async (id: number): Promise<CourseFormDTO> => {
  try {
    const response = await http.get(`course/get-item-by-id/${id}`);
    return response.data.data as CourseFormDTO;
  } catch (error) {
    return _getCourseInitValues();
  }
};

export const __getCoursesForSelect = async (
  query: any
): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http.get("/course/items/for-select", {
      params: query,
    });
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};

export const __getPreRequisiteByCurriculumItemsForSelect = async (
  id: any
): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http.get(
      "/course/prerequisite-by-curriculum/items/for-select/" + id
    );
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};

// Route::get('items/for-select/module/{moduleId}', [CourseController::class, 'getItemsByModuleForSelect']);
export const __getItemsByModuleForSelect = async (
  moduleId: number
): Promise<any> => {
  try {
    let reponse = await http.get(`/course/items/for-select/module/${moduleId}`);
    return reponse.data.data;
  } catch (error: any) {
    return null;
  }
};
