import { h } from "vue";
import { NTag, type DataTableColumns } from "naive-ui";
import GroupStatus from "./GroupStatus.vue";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

export const _createColumns = (loadDataTable: () => void): DataTableColumns => [
  {
    title: "Grupo",
    key: "group-group",
    children: [
      {
        title: "Codigo",
        key: "group",
        minWidth: "80px",
      },
      {
        title: "Módulo",
        key: "module",
        minWidth: "150px",
      },
      {
        title: "Curso",
        key: "course",
        minWidth: "150px",
      },
      {
        title: "Modalidad",
        key: "modality",
        minWidth: "120px",
      },
    ],
  },
  {
    title: "Carga académica",
    key: "academic-load",
    children: [
      {
        title: "Docente",
        key: "teacher",
        minWidth: "120px",
      },
      {
        title: "Laboratorio",
        key: "laboratory",
        minWidth: "100px",
      },
    ],
  },
  {
    title: "Matriculas",
    key: "enrollment",
    children: [
      {
        title: "Min. Est.",
        key: "minStudents",
        width: "60px",
      },
      {
        title: "Mat.",
        key: "studentEnrolled",
        width: "60px",
      },
      {
        title: "Res.",
        key: "studentReserved",
        width: "60px",
      },
      {
        title: "% Apertura",
        key: "percentageOpening",
        render: (row: any) => {
          return h(
            NTag,
            {
              type: row.percentageOpening
                ? row.percentageOpening < 60
                  ? "error"
                  : row.percentageOpening! < 100
                  ? "warning"
                  : "success"
                : "default",
              tertiary: true,
              bordered: false,
              strong: true,
            },
            { default: () => `${row.percentageOpening}%` }
          );
        },
      },

      {
        title: "Estado",
        key: "status",
        width: "150px",
        fixed: "right",
        render: (row: any) => {
          return h(GroupStatus, {
            item: row,
            status: row.status,
            groupId: row.id,
            onSuccess: loadDataTable,
          });
        },
      },
    ],
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
