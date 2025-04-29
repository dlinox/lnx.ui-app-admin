import { h } from "vue";
import {
  NButton,
  NPopover,
  NTag,
  NText,
  type DataTableColumns,
} from "naive-ui";
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
    title: "Modulo",
    key: "module-group",
    minWidth: "200px",
    children: [
      {
        title: "Nombre",
        key: "module",
        minWidth: "180px",
      },
      {
        title: "Precios",
        key: "modulePrice",
        minWidth: "100px",
        render: (row) => {
          return h(
            NPopover,
            { trigger: "click" },
            {
              trigger: () =>
                h(NButton, null, {
                  default: () =>
                    `Ver precios (${
                      Array.isArray(row.modulePrice)
                        ? row.modulePrice.length
                        : 0
                    })`,
                }),
              header: () =>
                h(
                  NText,
                  { strong: true, depth: 1 },
                  { default: () => "Lista de precios" }
                ),
              default: () =>
                h(
                  "ul",
                  {},
                  Array.isArray(row.modulePrice)
                    ? row.modulePrice?.map((price: string) =>
                        h("li", {}, `S/. ${price}`)
                      )
                    : h("li", {}, "No hay precios definidos")
                ),
            }
          );
        },
      },
    ],
  },

  {
    title: "Curso",
    key: "course-group",
    children: [
      {
        title: "Codigo",
        key: "code",
        minWidth: "80px",
      },
      {
        title: "Nombre",
        key: "course",
        minWidth: "180px",
      },
      {
        title: "Precios Virtual",
        key: "virtualPrice",
        minWidth: "100px",
        render: (row) => {
          return h(
            NPopover,
            { trigger: "click" },
            {
              trigger: () =>
                h(NButton, null, {
                  default: () =>
                    `Ver precios (${
                      Array.isArray(row.virtualPrice)
                        ? row.virtualPrice.length
                        : 0
                    })`,
                }),
              header: () =>
                h(
                  NText,
                  { strong: true, depth: 1 },
                  { default: () => "Lista de precios" }
                ),
              default: () =>
                h(
                  "ul",
                  {},
                  Array.isArray(row.virtualPrice)
                    ? row.virtualPrice?.map((price: string) =>
                        h("li", {}, `S/. ${price}`)
                      )
                    : h("li", {}, "No hay precios definidos")
                ),
            }
          );
        },
      },
      {
        title: "Precios Presencial",
        key: "presentialPrice",
        minWidth: "100px",
        render: (row) => {
          return h(
            NPopover,
            { trigger: "click" },
            {
              trigger: () =>
                h(NButton, null, {
                  default: () =>
                    `Ver precios (${
                      Array.isArray(row.presentialPrice)
                        ? row.presentialPrice.length
                        : 0
                    })`,
                }),
              header: () =>
                h(
                  NText,
                  { strong: true, depth: 1 },
                  { default: () => "Lista de precios" }
                ),
              default: () =>
                h(
                  "ul",
                  {},
                  Array.isArray(row.presentialPrice)
                    ? row.presentialPrice?.map((price: string) =>
                        h("li", {}, `S/. ${price}`)
                      )
                    : h("li", {}, "No hay precios definidos")
                ),
            }
          );
        },
      },
      {
        title: "Estado",
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
    ],
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
