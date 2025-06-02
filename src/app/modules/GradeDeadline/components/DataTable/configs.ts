import { h } from "vue";
import { NButton, type DataTableColumns } from "naive-ui";
import { formatDate } from "@/core/utils/dateFormatter.utils";
import { type GradeDeadlineDTO } from "@/app/modules/GradeDeadline/types/GradeDeadline.types";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import { usePermission } from "@/core/composables/usePermission";

const { hasPermission } = usePermission();

export const _createColumns = (
  openModal: (item: GradeDeadlineDTO) => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",

    render(rowData: any) {
      const rowItem = rowData as GradeDeadlineDTO;
      if (!hasPermission(["grade-deadline.extencion"])) {
        return null;
      }
      return h(
        NButton,
        {
          disabled: rowItem.type === "AMPLIACION",
          onClick: () => {
            openModal(rowItem);
          },
          item: rowItem,
        },
        {
          default: () => "Ampliación",
        }
      );
    },
  },
  {
    title: "Periodo",
    key: "period",
    minWidth: "120px",
  },
  {
    title: "Fecha de Inicio",
    key: "startDate",
    minWidth: "140px",
    render(rowData: any) {
      const rowItem = rowData as GradeDeadlineDTO;
      return h(
        "span",
        {},
        {
          default: () => formatDate(rowItem.startDate!),
        }
      );
    },
  },
  {
    title: "Fecha de Fin",
    key: "endDate",
    minWidth: "140px",
    render(rowData: any) {
      const rowItem = rowData as GradeDeadlineDTO;
      return h(
        "span",
        {},
        {
          default: () => formatDate(rowItem.endDate!),
        }
      );
    },
  },
  {
    title: "Tipo",
    key: "type",
    width: "120px",
  },
  {
    title: "Observaciones",
    key: "observations",
    minWidth: "200px",
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
    pageSizes: [10, 50, 100, 500, 1000],
    style: { paddingRight: "16px", paddingBottom: "12px" },
    prefix() {
      return `Total ${data.total} registros`;
    },
  };
};
