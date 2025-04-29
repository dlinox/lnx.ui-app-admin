import { h } from "vue";
import { NTag, type DataTableColumns } from "naive-ui";

import type { CurriculumDTO } from "@/app/modules/Curriculum/types/Curriculum.types";
import DataTableOp from "@/app/modules/Curriculum/components/DataTable/DataTableOp.vue";
import {
  type DataTablePaginationDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import CurriculumCourseDataTableOp from "@/app/modules/Curriculum/components/DataTable/CurriculumCourseDataTableOp.vue";
import { GRADING_MODEL_CONST } from "@/app/shared/constants/gradingModel.constants";

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

export const _createColumns = (
  openModal: (item: CurriculumDTO) => void,
  deleteItem: (item: CurriculumDTO) => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as CurriculumDTO;
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
    minWidth: "150px",
  },
  {
    title: "Modelo de Calificacion",
    key: "gradingModel",
    minWidth: "150px",
    render(row) {
      return h(
        "span",
        {},
        {
          default: () =>
            GRADING_MODEL_CONST.find((item) => item.value == row.gradingModel)
              ?.label,
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

export const _createCurriculumCourseColumns = (
  openModal: (item: any) => void,
  deleteItem: (item: any) => void
): DataTableColumns => [
  {
    title: "Ops.",
    key: "ops",
    width: "80px",
    fixed: "left",
    render(rowData: any) {
      const rowItem = rowData as any;
      return h(
        CurriculumCourseDataTableOp,
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
    title: "Orden",
    key: "order",
    minWidth: "70px",
    align: "right",
  },
  {
    title: "Area",
    key: "area",
    minWidth: "150px",
  },
  {
    title: "Modulo",
    key: "module",
    minWidth: "150px",
  },
  {
    title: "Codigo",
    key: "code",
    minWidth: "100px",
  },
  {
    title: "Curso",
    key: "course",
    minWidth: "150px",
  },
  {
    title: "Hrs. Practica",
    key: "hoursPractice",
    minWidth: "110px",
  },
  {
    title: "Hrs. Teoria",
    key: "hoursTheory",
    minWidth: "100px",
  },
  {
    title: "Creditos",
    key: "credits",
    minWidth: "100px",
  },
  {
    title: "Pre Requisito",
    key: "preRequisite",
    minWidth: "200px",
  },
  {
    title: "Extracurricular",
    key: "isExtracurricular",
    width: "150px",
    render: (row) => {
      return h(
        NTag,
        {
          type: row.isExtracurricular ? "success" : "error",
          tertiary: true,
          bordered: false,
          strong: true,
        },
        { default: () => (row.isExtracurricular ? "	Si" : "No") }
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
