import { useHttp } from "@/core/composables/useHttp";

import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type { AcademicRecordDTO } from "@/app/modules/AcademicRecord/types/AcademicRecord.types";

const http = useHttp();

const BASE_URL = "/academic-records";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<AcademicRecordDTO>> => {
  try {
    const response = await http.post(`${BASE_URL}/load-data-table`, request);
    return response.data.data as DataTableResponseDTO<AcademicRecordDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _getRecordPdf = async (id: number): Promise<any> => {
  try {
    const response = await http.post(
      `${BASE_URL}/get-record-pdf/${id}`,
      {},
      {
        responseType: "blob",
      }
    );
    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    const timestamp = new Date().getTime();
    a.href = url;
    a.download = `reporte-academico-${id}-${timestamp}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    return null;
  }
};

export const _printRecord = async (request: any): Promise<any> => {
  try {
    const response = await http.post(`${BASE_URL}/print-record-pdf`, request, {
      responseType: "blob",
    });
    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    const timestamp = new Date().getTime();
    a.href = url;
    a.download = `reporte-academico-${timestamp}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    return null;
  }
};
