import { http } from "@/core/http";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  CoursePriceDataTableItemDTO,
  CoursePriceDTO,
  CoursePriceFormDTO,
  CoursePriceFormErrorsDTO,
} from "@/app/modules/CoursePrice/types/CoursePrice.types";
import type { ResponseServiceDTO } from "@/core/types/Response.types";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<CoursePriceDataTableItemDTO>> => {
  try {
    const response = await http().post("/course-price/load-data-table", request);
    return response.data.data as DataTableResponseDTO<CoursePriceDataTableItemDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: CoursePriceFormDTO
): Promise<ResponseServiceDTO<CoursePriceDTO | CoursePriceFormErrorsDTO>> => {
  try {
    let reponse = await http().post("/course-price", request);
    return {
      status: true,
      data: reponse.data.data as CoursePriceFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CoursePriceFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: CoursePriceFormDTO
): Promise<ResponseServiceDTO<CoursePriceDTO | CoursePriceFormErrorsDTO>> => {
  try {
    let reponse = await http().put("/course-price", request);
    return {
      status: true,
      data: reponse.data.data as CoursePriceFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CoursePriceFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (request: CoursePriceDataTableItemDTO): Promise<boolean> => {
  try {
    await http().delete("/course-price", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};
