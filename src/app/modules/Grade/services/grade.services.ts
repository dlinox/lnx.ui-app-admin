import { useHttp } from "@/core/composables/useHttp";
import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

const http = useHttp();

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<any>> => {
  try {
    const response = await http.post(
      "/enrollment-grade/groups/load-data-table",
      request
    );
    return response.data.data as DataTableResponseDTO<any>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _getGradeStudents = async (groupId: number) => {
  try {
    const response = await http.post(
      `/enrollment-grade/group/${groupId}/students`
    );
    return response.data.data;
  } catch (error) {
    return false;
  }
};

export const _saveGradeStudents = async (data: any): Promise<boolean> => {
  try {
    await http.post(`/enrollment-grade/students/save`, data);
    return true;
  } catch (error) {
    return false;
  }
};
