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

    <slot name="extra" :reLoadDataTable="reLoadDataTable"> </slot>
  </div>
  <GradeDeadlineForm
    v-model="showModal"
    :item="editItem"
    @success="reLoadDataTable"
  />
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";

import type { GradeDeadlineDTO } from "@/app/modules/GradeDeadline/types/GradeDeadline.types";

import {
  type DataTableRequestDTO,
  type DataTableResponseDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import {
  _createColumns,
  _createPagination,
} from "@/app/modules/GradeDeadline/components/DataTable/configs";

import { _loadDataTable } from "@/app/modules/GradeDeadline/services/gradeDeadline.services";

import GradeDeadlineForm from "@/app/modules/GradeDeadline/components/Form/Form.vue";
import debounce from "@/core/utils/debounce.utils";
import LnxIcon from "@/core/components/LnxIcon.vue";

const loadingTable = ref(false);
const items = ref<GradeDeadlineDTO[]>([]);
const showModal = ref<boolean>(false);
const editItem = ref<GradeDeadlineDTO | null>(null);
const pagination = reactive({ ...initValuesDataTablePagination() });
const request = ref<DataTableRequestDTO>({
  search: null,
  page: pagination.page,
  pageSize: pagination.pageSize,
} as DataTableRequestDTO);
const response = ref<DataTableResponseDTO<GradeDeadlineDTO>>(
  {} as DataTableResponseDTO<GradeDeadlineDTO>
);

const openFormModal = (item: GradeDeadlineDTO | null) => {
  editItem.value = item;
  showModal.value = true;
};

const columns = _createColumns(openFormModal);

const reLoadDataTable = async () => {
  request.value.page = 1;
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

const init = async () => {
  await loadDataTable();
};

init();
</script>
