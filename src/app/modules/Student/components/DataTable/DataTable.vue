<template>
  <div style="border-bottom: 1px solid #e9e9e9">
    <n-row :gutter="12" style="padding: 12px 16px">
      <n-col :span="12"> </n-col>
      <n-col :span="12">
        <n-input
          size="large"
          placeholder="Buscar"
          v-model:value="request.search"
          @input="debouncedReload"
          clearable
        >
          <template #suffix>
            <LnxIcon icon-name="search-normal-1" size="20" />
          </template>
        </n-input>
      </n-col>
    </n-row>
    <n-row>
      <n-col :span="24">
        <n-data-table
          key="id"
          remote
          size="small"
          :single-line="false"
          :columns="columns"
          :data="items"
          :pagination="_createPagination(pagination)"
          :pagination-show-size-picker="true"
          :loading="loadingTable"
          @update:page="onPageChange"
          @update:page-size="onPageSizeChange"
        />
      </n-col>
    </n-row>

    <slot
      name="extra"
      :reLoadDataTable="reLoadDataTable"
      :selectables="selectables"
    >
    </slot>
  </div>
  <StudentForm
    v-model="showModal"
    :item="editItem"
    @success="reLoadDataTable"
    :selectables="selectables"
  />
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";

import debounce from "@/core/utils/debounce.utils";
import LnxIcon from "@/core/components/LnxIcon.vue";

import {
  type DataTableRequestDTO,
  type DataTableResponseDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import type { StudentDataTableItemDTO } from "@/app/modules/Student/types/Student.types";

import {
  _createColumns,
  _createPagination,
} from "@/app/modules/Student/configs/dataTable.configs";

import {
  _loadDataTable,
  _deleteItem,
  _createUser,
} from "@/app/modules/Student/services/student.services";

import StudentForm from "@/app/modules/Student/components/StudentForm.vue";

import { __getStudentTypesForSelect } from "@/app/modules/StudentType/services/studentType.services";
import { __getDocumentTypesForSelect } from "@/app/modules/DocumentType/services/documentType.services";
import type { TableColumns } from "naive-ui/es/data-table/src/interface";

const loadingTable = ref(false);
const items = ref<StudentDataTableItemDTO[]>([]);
const showModal = ref<boolean>(false);
const editItem = ref<StudentDataTableItemDTO | null>(null);
const pagination = reactive({ ...initValuesDataTablePagination() });
const request = ref<DataTableRequestDTO>({
  search: null,
  page: pagination.page,
  pageSize: pagination.pageSize,
} as DataTableRequestDTO);
const response = ref<DataTableResponseDTO<StudentDataTableItemDTO>>(
  {} as DataTableResponseDTO<StudentDataTableItemDTO>
);

const selectables = ref<any>({});

const columns = ref<TableColumns>([]);

const reLoadDataTable = async () => {
  request.value.page = 1;
  console.log("reloading data table");
  await loadDataTable();
};

const loadDataTable = async () => {
  loadingTable.value = true;
  response.value = await _loadDataTable(request.value);
  items.value = response.value.data;
  pagination.total = response.value.total;
  pagination.pageSize = response.value.per_page;
  pagination.page = response.value.current_page;
  pagination.pageCount = response.value.last_page;
  loadingTable.value = false;
};

const debouncedReload = debounce(() => {
  reLoadDataTable();
}, 400);

const onPageChange = async (page: number) => {
  request.value.page = page;
  await loadDataTable();
};

const onPageSizeChange = async (pageSize: number) => {
  request.value.page = 1;
  request.value.pageSize = pageSize;
  await loadDataTable();
};

const openFormModal = (item: StudentDataTableItemDTO | null) => {
  editItem.value = item;
  showModal.value = true;
};

const deleteItem = async (item: StudentDataTableItemDTO) => {
  await _deleteItem(item);
  await reLoadDataTable();
};

const createUser = async (item: StudentDataTableItemDTO) => {
  const response = await _createUser(item);
  if (response) {
    await reLoadDataTable();
  }
};

const init = async () => {
  columns.value = _createColumns(openFormModal, deleteItem, createUser);
  await loadDataTable();
  selectables.value.studentTypesItems = await __getStudentTypesForSelect();
  selectables.value.documentTypesItems = await __getDocumentTypesForSelect();
};

init();
</script>
