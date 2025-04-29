
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import type { DataTableColumns } from "naive-ui";
import { h } from "vue";
import DataTableOp from "./DataTableOp.vue";

export const _createColumns = (
  openEnrollmentGroupModal: (item: any) => void,
  reLoadDataTable: () => void
): DataTableColumns => [
    {
      title: "Ops.",
      key: "ops",
      width: "130px",
      fixed: "left",
      render(rowData: any) {
        const rowItem = rowData as any;
        return h(
          DataTableOp,
          {
            onOpenForm: () => openEnrollmentGroupModal(rowItem),
            onSuccess: () => reLoadDataTable(),
            item: rowItem,
          },
          {
            default: () => "Editar",
          }
        );
      },
    },
    {
      title: "Período",
      key: "period",
      minWidth: "100",
    },
    {
      title: "Estado de mat.",
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
