import { http } from "@/core/http";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  CurriculumModuleDTO,
  CurriculumModuleFormDTO,
  CurriculumModuleFormErrorsDTO,
} from "@/app/modules/Curriculum/types/Curriculum.types";
import type { ResponseServiceDTO } from "@/core/types/Response.types";
import { _getCurriculumModuleInitValues } from "../configs/form.configs";

export const _loadDataTable = async (
  request: any,
  id: any
): Promise<DataTableResponseDTO<CurriculumModuleDTO>> => {
  try {
    request.id = id;
    const response = await http().post(
      "/curriculum/module/load-data-table",
      request
    );
    return response.data.data as DataTableResponseDTO<CurriculumModuleDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _storeItem = async (
  request: CurriculumModuleFormDTO
): Promise<
  ResponseServiceDTO<CurriculumModuleDTO | CurriculumModuleFormErrorsDTO>
> => {
  try {
    const reponse = await http().post("/curriculum/module", request);
    return {
      status: true,
      data: reponse.data.data as CurriculumModuleDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CurriculumModuleFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _updateItem = async (
  request: CurriculumModuleFormDTO
): Promise<
  ResponseServiceDTO<CurriculumModuleDTO | CurriculumModuleFormErrorsDTO>
> => {
  try {
    const reponse = await http().put("/curriculum/module", request);
    return {
      status: true,
      data: reponse.data.data as CurriculumModuleDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as CurriculumModuleFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: CurriculumModuleDTO
): Promise<boolean> => {
  try {
    await http().delete("/curriculum/module", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const _getItemById = async (
  id: number
): Promise<CurriculumModuleFormDTO> => {
  try {
    const response = await http().get(
      `/curriculum/module/get-item-by-id/${id}`
    );
    return response.data.data as CurriculumModuleFormDTO;
  } catch (error) {
    return _getCurriculumModuleInitValues();
  }
};

export const _getDataItem = async (id: any): Promise<CurriculumModuleDTO> => {
  try {
    let response = await http().get(`/curriculum/module/get-data-item/${id}`);
    return response.data.data as CurriculumModuleDTO;
  } catch (error) {
    return {} as CurriculumModuleDTO;
  }
};
