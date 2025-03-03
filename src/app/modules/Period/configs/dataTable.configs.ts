import { h } from "vue";
import { NTag, type DataTableColumns } from "naive-ui";

import type { PeriodDTO } from "@/app/modules/Period/types/Period.types";
import DataTableOp from "@/app/modules/Period/components/DataTable/DataTableOp.vue";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import { MONTHS } from "@/core/constants/months.constants";

export const _createColumns = (
  openModal: (item: PeriodDTO) => void,
  deleteItem: (item: PeriodDTO) => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as PeriodDTO;
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
    title: "Año",
    key: "year",
    minWidth: "150px",
  },
  {
    title: "Mes",
    key: "month",
    minWidth: "150px",
    render: (row) => {
      const month = MONTHS.find((m) => m.value === row.month);
      return h(`span`, month?.label);
    },
  },
  // enrollmentEnabled
  {
    title: "Matrícula",
    key: "enrollmentEnabled",
    width: "150px",
    render: (row) => {
      return h(
        NTag,
        {
          type: row.enrollmentEnabled ? "success" : "error",
          tertiary: true,
          bordered: false,
          strong: true,
        },
        { default: () => (row.enrollmentEnabled ? "	Habilitada" : "-") }
      );
    },
  },

  {
    title: "Activo",
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
        { default: () => (row.isEnabled ? "	Activo" : "Deshabilitado") }
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
