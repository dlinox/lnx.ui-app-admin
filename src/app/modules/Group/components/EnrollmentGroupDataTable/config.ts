import { h } from "vue";
import { NTag, type DataTableColumns } from "naive-ui";
import GroupStatus from "./GroupStatus.vue";
import {
    type DataTablePaginationDTO,
    initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

export const _createColumns = (
    loadDataTable: () => void
): DataTableColumns => [

        {
            title: "Grupo",
            key: "group",
            minWidth: "80px",
        },
        {
            title: "Curso",
            key: "course",
            minWidth: "200px",
        },
        {
            title: "Módulo",
            key: "module",
            minWidth: "200px",
        },
        {
            title: "Area",
            key: "area",
            minWidth: "200px",
        },
        //modality
        {
            title: "Modalidad",
            key: "modality",
            minWidth: "120px",
        },
        {
            title: "Min. Est.",
            key: "minStudents",
            minWidth: "80px",
        },
        {
            title: "Matriculados",
            key: "studentEnrolled",
            minWidth: "110px",
        },
        //studentReserved
        {
            title: "Con reservados",
            key: "studentReserved",
            minWidth: "80px",
        },
        //posibilidad de apertura el grupo
        {
            title: "% Apertura",
            key: "percentageOpening",
            render: (row: any) => {
                return h(
                    NTag,
                    {
                        type: row.percentageOpening ? row.percentageOpening < 60 ? "error" : (row.percentageOpening! < 100 ? "warning" : "success") : "default",
                        tertiary: true,
                        bordered: false,
                        strong: true,
                    },
                    { default: () => (`${row.percentageOpening}%`) }
                );
            }
        },

        {
            title: "Estado",
            key: "status",
            width: "150px",
            fixed: "right",
            render: (row: any) => {
                return h(
                    GroupStatus, {
                    status: row.status,
                    groupId: row.id,
                    onSuccess: loadDataTable,
                }
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
