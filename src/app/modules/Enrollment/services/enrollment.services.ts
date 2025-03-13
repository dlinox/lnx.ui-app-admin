import { http } from "@/core/http";
import { initValuesDataTableResponse, type DataTableResponseDTO } from "@/core/types/DataTable.types";
import type { ResponseServiceDTO } from "@/core/types/Response.types";
import type { PaymentDTO } from "../../Payment/types/Payment.types";


export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<any>> => {
  try {
    const response = await http().post("/enrollment/load-data-table", request);
    return response.data.data as DataTableResponseDTO<any>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};
// Route::post('module-store', [EnrollmentController::class, 'enrollmentModuleStore']);
export const _enrollmentModuleStore = async (
  request: any
): Promise<ResponseServiceDTO<any>> => {
  try {
    let reponse = await http().post(`/enrollment/module-store`, {
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

// Route::post('group-store', [EnrollmentController::class, 'enrollmentGroupStore']);
export const _enrollmentGroupStore = async (
  request: any
): Promise<ResponseServiceDTO<any>> => {
  try {
    let reponse = await http().post(`/enrollment/group-store`, {
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
// group-update
// Route::post('group-update', [EnrollmentController::class, 'enrollmentGroupUpdate']);
export const _enrollmentGroupUpdate = async (
  request: any
): Promise<ResponseServiceDTO<any>> => {
  try {
    let reponse = await http().post(`/enrollment/group-update`, {
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

// Route::post('group-reserved', [EnrollmentController::class, 'enrollmentGroupReserved']);
export const _enrollmentGroupReserved = async (
  request: any
): Promise<ResponseServiceDTO<any>> => {
  try {
    let reponse = await http().post(`/enrollment/group-reserved`, {
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
// Route::post('group-cancel', [EnrollmentController::class, 'enrollmentGroupCancel']);
export const _enrollmentGroupCancel = async (
  request: any
): Promise<ResponseServiceDTO<any>> => {
  try {
    let reponse = await http().post(`/enrollment/group-cancel`, {
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

export const _getEnabledGroupEnrollment = async (
  request: any
): Promise<ResponseServiceDTO<any>> => {
  try {
    let reponse = await http().post(`/enrollment/enabled-groups`, request);
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

export const _getStudentEnrollment = async (
  id: any,
  curriculumId: number,
  periodId: number
): Promise<any> => {
  try {
    let reponse = await http().post(
      `/enrollment/student-enrollment-avaliable`,
      {
        studentId: id,
        curriculumId: curriculumId,
        periodId: periodId,
      }
    );

    return reponse.data.data;
  } catch (error: any) {
    return null;
  }
};

export const _getModulesEnrollment = async (
  studentId: any,
  curriculumId: number
): Promise<ResponseServiceDTO<any>> => {
  try {
    let reponse = await http().post(
      `/enrollment/${studentId}/student/${curriculumId}/curriculum`
    );
    return {
      status: true,
      data: reponse.data.data as any,
    };
  } catch (error: any) {
    return {
      status: false,
      data: [],
    };
  }
};

// Route::post('download-enrollment-pdfF', [EnrollmentController::class, 'downloadEnrollmentPDF']);
export const _downloadEnrollmentPDF = async (request: any): Promise<any> => {
  try {
    let reponse = await http().post(
      `/enrollment/download-enrollment-pdf`,
      {
        ...request,
      },
      {
        responseType: "blob",
      }
    );

    return reponse.data;
  } catch (error: any) {
    return null;
  }
};

// Route::post('get-enrollment-group-payments', [EnrollmentController::class, 'getEnrollmentGroupPayments']);
export const _getEnrollmentGroupPayments = async (request: any): Promise<PaymentDTO[]> => {
  try {
    let reponse = await http().post(`/enrollment/get-enrollment-group-payments`, {
      ...request,
    });
    return reponse.data.data;
  } catch (error: any) {
    return [];
  }
};


export const _getStudentEnrollmentSpecial = async (
  id: any,
  curriculumId: number,
  periodId: number
): Promise<any> => {
  try {
    let reponse = await http().post(
      `/enrollment/student-enrollment-avaliable-special`,
      {
        studentId: id,
        curriculumId: curriculumId,
        periodId: periodId,
      }
    );

    return reponse.data.data;
  } catch (error: any) {
    return null;
  }
}