import { h } from "vue";
import { type DataTableColumns } from "naive-ui";
import DataTableOp from "@/app/modules/Recognition/components/DataTable/DataTableOp.vue";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import type { RecognitionDTO } from "@/app/modules/Recognition/types/Recognition.types";

export const _createColumns = (
  deleteItem: (item: RecognitionDTO) => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as RecognitionDTO;
      return h(
        DataTableOp,
        {
          onDelete: () => {
            deleteItem(rowItem);
          },
          item: rowItem,
        },
        {
          default: () => "Editar",
        }
      );
    },
  },

  {
    title: "Estudiante",
    key: "student",
    minWidth: "200px",
  },
  {
    title: "Módulo",
    key: "module",
    minWidth: "200px",
  },

  {
    title: "Curso origen",
    key: "courseRecognition",
    minWidth: "200px",
  },
  {
    title: "Curso convalidado",
    key: "course",
    minWidth: "200px",
  },
  {
    title: "Observación",
    key: "observation",
    minWidth: "300px",
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
