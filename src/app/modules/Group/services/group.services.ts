import { http } from "@/core/http";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  GroupDataTableItemDTO,
  GroupFormDTO,
  GroupFormErrorsDTO,
  GroupRequestLoadFormDTO,
} from "@/app/modules/Group/types/Group.types";
import type { ResponseServiceDTO } from "@/core/types/Response.types";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<GroupDataTableItemDTO>> => {
  try {
    const response = await http().post("/group/load-data-table", request);
    return response.data.data as DataTableResponseDTO<GroupDataTableItemDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _loadForm = async (
  request: GroupRequestLoadFormDTO
): Promise<GroupFormDTO[] | null> => {
  try {
    const response = await http().post("/group/load-form", request);
    return response.data.data as GroupFormDTO[];
  } catch (error) {
    return null;
  }
};

export const _saveItems = async (
  request: GroupFormDTO[],
  periodId: number,
  curriculumCourseId: number
): Promise<ResponseServiceDTO<GroupFormDTO | GroupFormErrorsDTO>> => {
  try {
    const response = await http().post("/group/save", {
      groups: request,
      periodId,
      curriculumCourseId,
    });
    return {
      status: true,
      data: response.data.data as GroupFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as GroupFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: GroupFormDTO
): Promise<boolean> => {
  try {
    await http().delete("/group", { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};