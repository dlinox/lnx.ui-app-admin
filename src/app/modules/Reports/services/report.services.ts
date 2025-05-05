import { useHttp } from "@/core/composables/useHttp";

const http = useHttp();

const baseUrl = "/reports/";

export const _pdfStudentEnrollments = async (request: any) => {
  try {
    const response = await http.post(`${baseUrl}student/enrollments`, request, {
      responseType: "blob",
    });

    pdfDownload(response.data, `reporte-estudiante-${request.id}`);

    return true;
  } catch (error) {
    return false;
  }
};

// studentGrades
export const _pdfStudentGrades = async (request: any) => {
  try {
    const response = await http.post(`${baseUrl}student/grades`, request, {
      responseType: "blob",
    });
    pdfDownload(response.data, `reporte-notas-estudiante-${request.id}`);
    return true;
  } catch (error) {
    return false;
  }
};

// Route::post('api/group/get-by-module-and-period', [GroupController::class, 'getByModuleAndPeriod']);

export const _getGroupsByModuleAndPeriod = async (request: any) => {
  try {
    const response = await http.post("group/get-by-module-and-period", request);
    return response.data.data;
  } catch (error) {
    return [];
  }
};

export const _pdfGroupEnrolledStudents = async (request: any) => {
  try {
    const response = await http.post(
      `${baseUrl}group/enrolled-students`,
      request,
      {
        responseType: "blob",
      }
    );
    pdfDownload(response.data, `reporte-estudiantes-matriculados`);
    return true;
  } catch (error) {
    return false;
  }
};

export const _pdfEnabledGroups = async (request: any) => {
  try {
    const response = await http.post(
      `${baseUrl}group/enabled-groups`,
      request,
      {
        responseType: "blob",
      }
    );
    pdfDownload(response.data, `reporte-grupos-habilitados`);
    return true;
  } catch (error) {
    return false;
  }
};

const pdfDownload = (data: any, filename: string) => {
  const blob = new Blob([data], { type: "application/pdf" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  const timestamp = new Date().getTime();
  a.href = url;
  a.download = `${filename}-${timestamp}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};
