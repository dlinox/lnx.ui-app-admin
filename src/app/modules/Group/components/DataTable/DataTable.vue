<template>
  <div style="border-bottom: 1px solid #e9e9e9">
    <n-row :gutter="12" style="padding: 12px 16px">
      <n-col :span="12" class="self-center">
        <n-button
          v-if="hasPermission(['group.clone'])"
          :render-icon="renderIcon('convertshape')"
          @click="showModalClone = true"
        >
          Clonar grupos
        </n-button>
      </n-col>
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
  <GroupForm
    v-model="showModal"
    :item="editItem"
    :periodId="periodId"
    :laboratoryOptions="laboratoryOptions"
    @success="reLoadDataTable"
  />
  <GroupCloneForm
    v-model="showModalClone"
    :periodId="periodId"
    :curriculumId="curriculumId"
    @success="reLoadDataTable"
  />
</template>
<script setup lang="ts">
import { reactive, computed, ref, watch } from "vue";

import { type GroupDataTableItemDTO } from "@/app/modules/Group/types/Group.types";

import GroupForm from "@/app/modules/Group/components/GroupForm.vue";
import GroupCloneForm from "@/app/modules/Group/components/GroupCloneForm.vue";

import {
  type DataTableRequestDTO,
  type DataTableResponseDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import {
  _createColumns,
  _createPagination,
} from "@/app/modules/Group/configs/dataTable.configs";

import { __searchLaboratories } from "@/app/shared/services/selectables.services";

import { _loadDataTable } from "@/app/modules/Group/services/group.services";

import debounce from "@/core/utils/debounce.utils";
import LnxIcon from "@/core/components/LnxIcon.vue";

import type { GroupDataTablePropsDTO } from "../../types/Group.types";
import type { SelectOption } from "naive-ui";
import { renderIcon } from "@/core/utils/icon.utils";

import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();

const props = defineProps<GroupDataTablePropsDTO>();

const propsComputed = computed(() => {
  return {
    periodId: props.periodId,
    curriculumId: props.curriculumId,
  };
});

const loadingTable = ref(false);
const items = ref<GroupDataTableItemDTO[]>([]);
const showModal = ref<boolean>(false);
const showModalClone = ref<boolean>(false);
const editItem = ref<GroupDataTableItemDTO | null>(null);
const pagination = reactive({ ...initValuesDataTablePagination() });
const request = ref<DataTableRequestDTO>({
  search: null,
  page: pagination.page,
  pageSize: pagination.pageSize,
  filters: {
    ...propsComputed.value,
  },
} as DataTableRequestDTO);
const response = ref<DataTableResponseDTO<GroupDataTableItemDTO>>(
  {} as DataTableResponseDTO<GroupDataTableItemDTO>
);

const laboratoryOptions = ref<SelectOption[]>([]);

const openFormModal = (item: GroupDataTableItemDTO | null) => {
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
  laboratoryOptions.value = await __searchLaboratories("");
  await loadDataTable();
};

watch(
  propsComputed,
  async (newFilters, _oldFilters) => {
    request.value.filters = newFilters;
    await reLoadDataTable();
  },
  { deep: true }
);

init();
</script>
