import { h } from "vue";
import { NTag, type DataTableColumns } from "naive-ui";

import type { CourseDTO } from "@/app/modules/Course/types/Course.types";
import DataTableOp from "@/app/modules/Course/components/DataTable/DataTableOp.vue";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

export const _createColumns = (
  openModal: (item: CourseDTO) => void,
  deleteItem: (item: CourseDTO) => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as CourseDTO;
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
    minWidth: "80px",
  },
  {
    title: "Horas de práctica",
    key: "hoursPractice",
    minWidth: "80px",
  },
  {
    title: "Horas de teoría",
    key: "hoursTheory",
    minWidth: "80px",
  },
  {
    title: "Créditos",
    key: "credits",
    minWidth: "80px",
  },
  {
    title: "Área",
    key: "area",
    minWidth: "150px",
  },
  {
    title: "Módulo",
    key: "module",
    minWidth: "150px",
  },
  {
    title: "Currículo",
    key: "curriculum",
    minWidth: "150px",
  },
  {
    title: "Prerrequisito",
    key: "preRequisite",
    minWidth: "150px",
  },
  {
    title: "Descripción",
    key: "description",
    minWidth: "350px",
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
