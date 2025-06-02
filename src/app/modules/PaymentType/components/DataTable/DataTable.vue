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
  <PaymentTypeForm
    v-model="showModal"
    :item="editItem"
    @success="reLoadDataTable"
  />
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";



import {
  type DataTableRequestDTO,
  type DataTableResponseDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import debounce from "@/core/utils/debounce.utils";
import LnxIcon from "@/core/components/LnxIcon.vue";

import {
  _createColumns,
  _createPagination,
} from "@/app/modules/PaymentType/configs/dataTable.configs";

import type { PaymentTypeDTO } from "@/app/modules/PaymentType/types/PaymentType.types";

import {
  _loadDataTable,
  _deleteItem,
} from "@/app/modules/PaymentType/services/paymentType.services";

import PaymentTypeForm from "@/app/modules/PaymentType/components/PaymentTypeForm.vue";


const loadingTable = ref(false);
const items = ref<PaymentTypeDTO[]>([]);
const showModal = ref<boolean>(false);
const editItem = ref<PaymentTypeDTO | null>(null);
const pagination = reactive({ ...initValuesDataTablePagination() });
const request = ref<DataTableRequestDTO>({
  search: null,
  page: pagination.page,
  pageSize: pagination.pageSize,
} as DataTableRequestDTO);
const response = ref<DataTableResponseDTO<PaymentTypeDTO>>(
  {} as DataTableResponseDTO<PaymentTypeDTO>
);

const openFormModal = (item: PaymentTypeDTO | null) => {
  editItem.value = item;
  showModal.value = true;
};

const deleteItem = async (item: PaymentTypeDTO) => {
  await _deleteItem(item);
  await reLoadDataTable();
};

const columns = _createColumns(openFormModal, deleteItem);

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
