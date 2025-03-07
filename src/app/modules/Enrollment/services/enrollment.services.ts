import { http } from "@/core/http";
import type { ResponseServiceDTO } from "@/core/types/Response.types";

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
