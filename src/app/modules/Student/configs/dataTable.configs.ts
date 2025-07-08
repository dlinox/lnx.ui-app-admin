import { h } from "vue";

import { NTag, type DataTableColumns } from "naive-ui";

import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import type { StudentDataTableItemDTO } from "@/app/modules/Student/types/Student.types";
import DataTableOp from "@/app/modules/Student/components/DataTable/DataTableOp.vue";

export const _createColumns = (
  openModal: (item: StudentDataTableItemDTO) => void,
  deleteItem: (item: StudentDataTableItemDTO) => void,
  createUser: (item: StudentDataTableItemDTO) => void
): DataTableColumns => [
  {
    type: "selection",
    fixed: "left",
  },
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as StudentDataTableItemDTO;
      return h(
        DataTableOp,
        {
          onEdit: () => {
            openModal(rowItem);
          },
          onDelete: () => {
            deleteItem(rowItem);
          },
          onCreateUser: () => {
            createUser(rowItem);
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
    title: "Codigo",
    key: "code",
    minWidth: "100px",
  },
  {
    title: "Nro. Documento",
    key: "documentNumber",
    minWidth: "90px",
  },

  {
    title: "Nombre",
    key: "name",
    minWidth: "120px",
  },
  {
    title: "Apellido Paterno",
    key: "lastNameFather",
    minWidth: "100px",
  },
  {
    title: "Apellido Materno",
    key: "lastNameMother",
    minWidth: "100px",
  },
  {
    title: "Género",
    key: "gender",
    width: "75px",
  },
  {
    title: "Email",
    key: "email",
    minWidth: "130px",
  },
  {
    title: "Celular",
    key: "phone",
    minWidth: "100px",
  },
  {
    title: "Tipo de estudiante",
    key: "studentType",
    minWidth: "150px",
    render: (row) => {
      return h(
        NTag,
        {
          tertiary: true,
          bordered: false,
          strong: true,
        },
        {
          default: () => row.studentType,
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
