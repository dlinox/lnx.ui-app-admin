import { h } from "vue";
import { NTag, type DataTableColumns } from "naive-ui";

import type { ModuleDTO } from "@/app/modules/Module/types/Module.types";
import DataTableOp from "@/app/modules/Module/components/DataTable/DataTableOp.vue";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

export const _createColumns = (
  openModal: (item: ModuleDTO) => void,
  deleteItem: (item: ModuleDTO) => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as ModuleDTO;
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
    minWidth: "300px",
  },
  {
    title: "Código",
    key: "code",
    minWidth: "150px",
  },
  {
    title: "Descripción",
    key: "description",
    minWidth: "300px",
  },
  {
    title: "Nivel",
    key: "level",
    minWidth: "50px",
  },
  {
    title: "Plan de estudio",
    key: "curriculum",
    minWidth: "150px",
  },
  {
    title: "Extracurricular",
    key: "isExtracurricular",
    width: "150px",
    render: (row) => {
      return h(
        NTag,
        {
          type: row.isExtracurricular ? "info" : "default",
          tertiary: true,
          bordered: false,
          strong: true,
        },
        {
          default: () => (row.isExtracurricular ? "SI" : "NO"),
        }
      );
    },
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
