import { h } from "vue";
import { type DataTableColumns } from "naive-ui";
import { type AcademicSupervisionDTO } from "@/app/modules/AcademicSupervision/types/AcademicSupervision.types";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import DataTableOp from "@/app/modules/AcademicSupervision/components/DataTable/DataTableOp.vue";

export const _createColumns = (
  openModal: (item: AcademicSupervisionDTO) => void,
  deleteItem: (item: AcademicSupervisionDTO) => void
): DataTableColumns => [
    {
      title: "Ops.",
      key: "ops",
      width: "80px",
      fixed: "left",
      render(rowData: any) {
        const rowItem = rowData as AcademicSupervisionDTO;
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
  // {
  //   title: "Ops.",
  //   key: "ops",
  //   width: "80px",
  //   fixed: "left",
  //   render(rowData: any) {
  //     const rowItem = rowData as AcademicSupervisionDTO;
  //     return h(
  //       NButton,
  //       {
  //         disabled: rowItem.type === "AMPLIACION",
  //         onClick: () => {
  //           openModal(rowItem);
  //         },
  //         item: rowItem,
  //       },
  //       {
  //         default: () => "Ampliación",
  //       }
  //     );
  //   },
  // },
  {
    title: "Periodo",
    key: "period",
    minWidth: "120px",
  },
 
  {
    title: "Docente",
    key: "teacher",
    minWidth: "120px",
  },
  {
    title: "Curso",
    key: "course",
    minWidth: "120px",
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
