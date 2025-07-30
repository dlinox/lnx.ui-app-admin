import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import { NTag, type DataTableColumns } from "naive-ui";
import { h } from "vue";
import DataTableOp from "./DataTableOp.vue";
import DataTablePayments from "./DataTablePayments.vue";

export const _createColumns = (
  openEnrollmentGroupModal: (item: any) => void,
  reLoadDataTable: () => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "100px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as any;
      return h(
        DataTableOp,
        {
          onOpenForm: () => openEnrollmentGroupModal(rowItem),
          onSuccess: () => reLoadDataTable(),
          item: rowItem,
        },
        {
          default: () => "Editar",
        }
      );
    },
  },
  {
    title: "Período",
    key: "period",
    minWidth: "120",
  },

  {
    title: "Estudiante",
    key: "group-student",
    children: [
      {
        title: "Nombre",
        key: "student",

        minWidth: "250px",
      },
      {
        title: "Estado de mat.",
        key: "enrollmentStatus",

        minWidth: "150px",
        render(rowData: any) {
          const rowItem = rowData as any;
          return h(
            NTag,
            {
              // 'MATRICULADO', 'RESERVADO', 'RETIRADO', 'EXPULSADO', 'CANCELADO'
              type: rowItem.enrollmentStatus === "MATRICULADO"
                ? "info"
                : rowItem.enrollmentStatus === "RESERVADO"
                ? "warning"
                : "error",
              size: "small",
              bordered: false,
            },
            {
              default: () => rowItem.enrollmentStatus,
            }
          );
        },
      },
      {
        // paymentFiles
        minWidth: "80px",
        title: "Pagos",
        key: "payments",
        render(rowData: any) {
          const rowItem = rowData as any;
          return h(DataTablePayments, {
            payments: rowItem.payments,
          });
        },
      }
    ],
  },

  {
    title: "Grupo",
    key: "group-group",
    children: [
      {
        title: "Módulo",
        key: "module",
        minWidth: "200px",
      },

      {
        title: "Curso",
        key: "course",
        minWidth: "200px",
      },
      {
        title: "Grupo",
        key: "group",

        minWidth: "100px",
      },
      {
        title: "Modalidad",
        key: "modality",
        minWidth: "100px",
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
