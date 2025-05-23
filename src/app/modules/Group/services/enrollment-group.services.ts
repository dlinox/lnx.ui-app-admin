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
      "/enrollment-groups/load-data-table",
      request
    );
    return response.data.data as DataTableResponseDTO<any>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

// Route::post('change-status-group', [EnrollmentController::class, 'changeStatusGroup']);
export const _changeStatusGroup = async (request: any): Promise<any> => {
  try {
    let reponse = await http.post(`/enrollment-groups/change-status-group`, {
      ...request,
    });
    return {
      status: true,
      data: reponse.data.data as any,
    };
  } catch (error: any) {
    return {
      status: false,
      data: null,
    };
  }
};

export const _getStudents = async (groupId: number): Promise<any[]> => {
  try {
    const response = await http.get(
      "/enrollment-groups/get-students/" + groupId
    );
    return response.data.data;
  } catch (error) {
    return [];
  }
};

export const _sendMassiveEmail = async (groupId: number): Promise<boolean> => {
  try {
    await http.post("/enrollment-groups/send-massive-email/" + groupId);
    return true;
  } catch (error) {
    return false;
  }
};
