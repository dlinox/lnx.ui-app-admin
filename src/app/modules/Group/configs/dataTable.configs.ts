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
    title: "Area",
    key: "area",
    minWidth: "200px",
  },
  {
    title: "Codigo",
    key: "code",
    minWidth: "80px",
  },
  {
    title: "Curso",
    key: "course",
    minWidth: "200px",
  },
  {
    title: "Precios Virtual",
    key: "virtualPrice",
    minWidth: "100px",
    render: (row) => {
      return h(
        "div",
        {
          class:
            Array.isArray(row.virtualPrice) &&
            row.virtualPrice.length > 0 &&
            row.virtualPrice[0] !== ""
              ? ""
              : //punto de color rojo
                "text-red-500 relative px-2 py-1 bg-red-100 text-sm font-semibold text-center",
        },
        Array.isArray(row.virtualPrice) &&
          row.virtualPrice.length > 0 &&
          row.virtualPrice[0] !== ""
          ? row.virtualPrice.map((price) =>
              h(
                NTag,
                {
                  class: "me-1 mb-1",
                  tertiary: true,
                  bordered: false,
                  strong: true,
                },
                { default: () => `S/.${price}` }
              )
            )
          : "Sin definir."
      );
    },
  },
  {
    title: "Precios Presencial",
    key: "presentialPrice",
    minWidth: "100px",
    render: (row) => {
      return h(
        "div",
        {
          class:
            Array.isArray(row.presentialPrice) &&
            row.presentialPrice.length > 0 &&
            row.presentialPrice[0] !== ""
              ? ""
              : "text-red-500 px-2 py-1 bg-red-100 text-sm font-semibold text-center",
        },
        Array.isArray(row.presentialPrice) &&
          row.presentialPrice.length > 0 &&
          row.presentialPrice[0] !== ""
          ? row.presentialPrice.map((price) =>
              h(
                NTag,
                {
                  class: "me-1 mb-1",
                  tertiary: true,
                  bordered: false,
                  strong: true,
                },
                { default: () => `S/.${price}` }
              )
            )
          : "Sin definir."
      );
    },
  },

  {
    title: "Modulo",
    key: "module",
    minWidth: "200px",
  },
  {
    title: "Precio Modulo",
    key: "modulePrice",
    minWidth: "100px",
    render: (row) => {
      return h(
        "div",
        {
          class:
            Array.isArray(row.modulePrice) &&
            row.modulePrice.length > 0 &&
            row.modulePrice[0] !== ""
              ? ""
              : "text-red-500 px-2 py-1 bg-red-100 text-sm font-semibold text-center",
        },
        Array.isArray(row.modulePrice) &&
          row.modulePrice.length > 0 &&
          row.modulePrice[0] !== ""
          ? row.modulePrice.map((price) =>
              h(
                NTag,
                {
                  class: "me-1 mb-1",
                  tertiary: true,
                  bordered: false,
                  strong: true,
                },
                { default: () => `S/.${price}` }
              )
            )
          : "Sin definir."
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
