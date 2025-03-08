
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import type { DataTableColumns } from "naive-ui";

export const _createColumns = (): DataTableColumns => [
  {
    title: "Estado de matrícula",
    key: "enrollmentStatus",
    minWidth: "150px",
  },
  {
    title: "Estudiante",
    key: "student",
    minWidth: "300px",
  },

  {
    title: "Módulo",
    key: "module",
    minWidth: "200px",
  },

  {
    title: "Curso",
    key: "course",
    minWidth: "200px",
  },
  {
    title: "Grupo",
    key: "group",

    minWidth: "100px",
  },
  {
    title: "Modalidad",
    key: "modality",
    minWidth: "100px",
  },
  {
    title: "Laboratorio",
    key: "laboratory",
    minWidth: "150px",
  },

  {
    title: "Período",
    key: "period",
    minWidth: "100",
  },
];

export const _createPagination = (
  data: DataTablePaginationDTO = initValuesDataTablePagination()
) => {
  return {
    page: data.page,
    total: data.total,
    pageSize: data.pageSize,
    pageCount: data.pageCount,
    showSizePicker: true,
    pageSizes: [10, 50, 100, 500, 1000, 5000],
    style: { paddingRight: "16px", paddingBottom: "12px" },
    prefix() {
      return `Total ${data.total} registros`;
    },
  };
};
