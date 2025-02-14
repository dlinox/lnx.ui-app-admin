import { h } from "vue";
import {  NTag, type DataTableColumns } from "naive-ui";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import type { PriceDataTableItemDTO } from "../types/Price.types";
import DataTableOp from "@/app/modules/Price/components/DataTable/DataTableOp.vue";

export const _createColumns = (
  openModal: (item: PriceDataTableItemDTO) => void,
  deleteItem: (item: PriceDataTableItemDTO) => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as PriceDataTableItemDTO;
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
    title: "Tipo de Estudiante",
    key: "studentType",
    minWidth: "200px",
  },
  {
    title: "Modulo",
    key: "module",
    minWidth: "200px",
  },
  {
    title: "Precio de Matricula",
    key: "enrollmentPrice",
    minWidth: "150px",
  },
  {
    title: "Precio Presencial",
    key: "presentialPrice",
    minWidth: "150px",
  },
  {
    title: "Precio Virtual",
    key: "virtualPrice",
    minWidth: "150px",
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
