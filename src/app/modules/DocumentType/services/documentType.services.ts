import { useHttp } from "@/core/composables/useHttp";

const http = useHttp();

import {
  type DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/core/types/DataTable.types";

import type {
  DocumentTypeDTO,
  DocumentTypeFormDTO,
  DocumentTypeFormErrorsDTO,
} from "@/app/modules/DocumentType/types/DocumentType.types";

import { type ResponseServiceDTO } from "@/core/types/Response.types";
import type { ItemSelectDTO } from "@/core/types/Select.types";

//difinir  el url base del modulo
const BASE_URL = "/document-type";

export const _loadDataTable = async (
  request: any
): Promise<DataTableResponseDTO<DocumentTypeDTO>> => {
  try {
    const response = await http.post(`${BASE_URL}/load-data-table`, request);
    return response.data.data as DataTableResponseDTO<DocumentTypeDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (
  request: DocumentTypeFormDTO
): Promise<ResponseServiceDTO<DocumentTypeDTO | DocumentTypeFormErrorsDTO>> => {
  try {
    let reponse = await http.post(`${BASE_URL}/save`, request);
    return {
      status: true,
      data: reponse.data.data as DocumentTypeFormDTO,
    };
  } catch (error: any) {
    if (error.response.status === 422) {
      return {
        status: false,
        data: error.response.data.errors as DocumentTypeFormErrorsDTO,
      };
    }
    return {
      status: false,
      data: null,
    };
  }
};

export const _deleteItem = async (
  request: DocumentTypeFormDTO
): Promise<boolean> => {
  try {
    await http.delete(`${BASE_URL}`, { data: { id: request.id } });
    return true;
  } catch (error) {
    return false;
  }
};

export const __getDocumentTypesForSelect = async (): Promise<
  ItemSelectDTO[]
> => {
  try {
    let response = await http.get(`${BASE_URL}/items/for-select`);
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};
