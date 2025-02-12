import { h } from "vue";
import { NButton, NTag, type DataTableColumns } from "naive-ui";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import type { GroupDataTableItemDTO } from "../types/Group.types";

export const _createColumns = (
  openModal: (item: GroupDataTableItemDTO) => void
): DataTableColumns => [
  {
    title: "Grupos",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as GroupDataTableItemDTO;
      return h(
        NButton,
        {
          type: "tertiary",
          onClick: () => openModal(rowItem),
        },
        { default: () => `${rowItem.countGroups} Grupo(s) ` }
      );
    },
  },
  {
    title: "Codigo",
    key: "code",
    minWidth: "80px",
  },
  {
    title: "Area",
    key: "area",
    minWidth: "200px",
  },
  {
    title: "Modulo",
    key: "module",
    minWidth: "200px",
  },
  {
    title: "Curso",
    key: "course",
    minWidth: "200px",
  },
  {
    title: "Habilitado",
    key: "isEnabled",
    width: "150px",
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
