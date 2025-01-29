import { http } from "@/core/http";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  CurriculumDTO,
  CurriculumFormDTO,
  CurriculumFormErrorsDTO,
} from "@/app/modules/Curriculum/types/Curriculum.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<CurriculumDTO>> => {
  try {
    const response = await http().post("/curriculum/load-data-table", request);
    return response.data.data as DataTableResponseDTO<CurriculumDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: CurriculumFormDTO
): Promise<ResponseServiceDTO<CurriculumDTO | CurriculumFormErrorsDTO>> => {
  try {
    let reponse = await http().post("/curriculum", request);
    return {
      status: true,
      data: reponse.data.data as CurriculumFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CurriculumFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: CurriculumFormDTO
): Promise<ResponseServiceDTO<CurriculumDTO | CurriculumFormErrorsDTO>> => {
  try {
    let reponse = await http().put("/curriculum", request);
    return {
      status: true,
      data: reponse.data.data as CurriculumFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CurriculumFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: CurriculumFormDTO
): Promise<boolean> => {
  try {
    await http().delete("/curriculum", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};


export const _getDataItem = async (id: any): Promise<CurriculumDTO> => {
  try {
    let response = await http().get(`/curriculum/get-data-item/${id}`);
    return response.data.data as CurriculumFormDTO;
  } catch (error) {
    return {} as CurriculumFormDTO;
  }
}

export const __getCurriculumsForSelect = async (): Promise<ItemSelectDTO[]> => {
  try {
    let response = await http().get("/curriculum/items/for-select");
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
