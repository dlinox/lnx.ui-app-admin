import { type DataTableColumns } from "naive-ui";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import { h } from "vue";
import DataTableOp from "./DataTableOp.vue";

export const _createColumns = (onSuccess: () => void): DataTableColumns => [
  {
    title: "Registros",
    key: "records",
    fixed: "left",
    width: "120px",
    render(rowData: any) {
      const rowItem = rowData as any;
      return h(
        DataTableOp,
        {
          item: rowItem,
          onSuccess: () => {
            onSuccess();
          },
        },
        {
          default: () => "Editar",
        }
      );
    },
  },
  {
    title: "Grupo",
    key: "group",
    minWidth: "50px",
  },
  {
    title: "Curso",
    key: "course",
    minWidth: "120px",
  },
  {
    title: "Docente",
    key: "teacher",
    minWidth: "120px",
  },
  {
    title: "Periodo",
    key: "period",
    minWidth: "120px",
  },
  {
    title: "Cod. Acta",
    key: "recordCodes",
    minWidth: "80px",
  },
  {
    title: "Ultimo registro",
    key: "lastCreatedAt",
    minWidth: "140px",
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
    pageSizes: [10, 50, 100, 500, 1000],
    style: { paddingRight: "16px", paddingBottom: "12px" },
    prefix() {
      return `Total ${data.total} registros`;
    },
  };
};
