import { h } from "vue";
import { NTag, type DataTableColumns } from "naive-ui";

import type { LaboratoryDTO } from "@/app/modules/Laboratory/types/Laboratory.types";
import DataTableOp from "@/app/modules/Laboratory/components/DataTable/DataTableOp.vue";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

export const _createColumns = (
  openModal: (item: LaboratoryDTO) => void,
  deleteItem: (item: LaboratoryDTO) => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as LaboratoryDTO;
      return h(
        DataTableOp,
        {
          onEdit: () => {
            openModal(rowItem);
          },
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
    title: "Nombre",
    key: "name",
    minWidth: "180px",
  },
  {
    title: "Tipo",
    key: "type",
    width: "120px",
  },
  {
    title: "Habilitado",
    key: "isEnabled",
    width: "120px",
    render: (row) => {
      return h(
        NTag,
        {
          type: row.isEnabled ? "success" : "error",
          tertiary: true,
          bordered: false,
          strong: true,
        },
        { default: () => (row.isEnabled ? "	Habilitado" : "Deshabilitado") }
      );
    },
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
