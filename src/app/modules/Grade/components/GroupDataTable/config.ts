import { h } from "vue";
import { NTag, type DataTableColumns } from "naive-ui";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import { usePermission } from "@/core/composables/usePermission";
import GroupForm from "@/app/modules/Grade/components/Form/GradeForm.vue";
const { hasPermission } = usePermission();

export const _createColumns = (): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as any;
      if (
        !hasPermission(["enrollment-grade.view", "enrollment-grade.create"])
      ) {
        return null;
      }
      return h(GroupForm, {
        groupId: rowItem.id,
      });
    },
  },
  {
    title: "Grupo",
    key: "group-group",
    children: [
      {
        title: "Codigo",
        key: "group",
        minWidth: "80px",
      },
      {
        title: "Curso",
        key: "course",
        minWidth: "150px",
      },
      {
        title: "Horario",
        key: "schedules",
        minWidth: "150px",
        render: (row: any) => {
          return h(
            NTag,
            {},
            {
              default: () => row.schedules,
            }
          );
        },
      },
      {
        title: "Modalidad",
        key: "modality",
        minWidth: "120px",
      },
    ],
  },
  {
    title: "Carga académica",
    key: "academic-load",
    children: [
      {
        title: "Docente",
        key: "teacher",
        minWidth: "120px",
      },
      {
        title: "Laboratorio",
        key: "laboratory",
        minWidth: "100px",
      },
    ],
  },
  {
    title: "Matriculas",
    key: "enrollment",
    children: [
      {
        title: "Estado",
        key: "status",
        width: "150px",
        fixed: "right",
        render: (row: any) => {
          return h(
            NTag,
            {
              type: row.status === "CANCELADO" ? "error" : "info",
              round: false,
            },
            {
              default: () => row.status,
            }
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
      return `${data.total} registros`;
    },
  };
};
