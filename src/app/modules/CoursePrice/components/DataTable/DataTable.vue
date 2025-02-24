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
      :studentTypesItems="studentTypesItems"
      :modulesByCurriculumItems="modulesByCurriculumItems"
    >
    </slot>
  </div>
  <CoursePriceForm
    v-model="showModal"
    :item="editItem"
    @success="reLoadDataTable"
    :studentTypesItems="studentTypesItems"
    :modulesByCurriculumItems="modulesByCurriculumItems"
    :curriculumId="props.curriculumId"
  />
</template>
<script setup lang="ts">
import { reactive, computed, ref, watch } from "vue";

import { type CoursePriceDataTableItemDTO } from "@/app/modules/CoursePrice/types/CoursePrice.types";

import CoursePriceForm from "@/app/modules/CoursePrice/components/CoursePriceForm.vue";

import {
  type DataTableRequestDTO,
  type DataTableResponseDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";

import {
  _createColumns,
  _createPagination,
} from "@/app/modules/CoursePrice/configs/dataTable.configs";

import { __searchLaboratories } from "@/app/shared/services/selectables.services";

import {
  _loadDataTable,
  _deleteItem,
} from "@/app/modules/CoursePrice/services/price.services";

import debounce from "@/core/utils/debounce.utils";
import LnxIcon from "@/core/components/LnxIcon.vue";

import type { CoursePriceDataTablePropsDTO } from "../../types/CoursePrice.types";
import type { SelectOption } from "naive-ui";
import {
  __getStudentTypesForSelect,
  __searchModulesByCurriculum,
} from "@/app/shared/services/selectables.services";

const props = defineProps<CoursePriceDataTablePropsDTO>();

const propsComputed = computed(() => {
  return {
    curriculumId: props.curriculumId,
  };
});

const loadingTable = ref(false);
const items = ref<CoursePriceDataTableItemDTO[]>([]);
const showModal = ref<boolean>(false);
const editItem = ref<CoursePriceDataTableItemDTO | null>(null);
const pagination = reactive({ ...initValuesDataTablePagination() });
const request = ref<DataTableRequestDTO>({
  search: null,
  page: pagination.page,
  pageSize: pagination.pageSize,
  filters: {
    ...propsComputed.value,
  },
} as DataTableRequestDTO);

const response = ref<DataTableResponseDTO<CoursePriceDataTableItemDTO>>(
  {} as DataTableResponseDTO<CoursePriceDataTableItemDTO>
);

const openFormModal = (item: CoursePriceDataTableItemDTO | null) => {
  editItem.value = item;
  showModal.value = true;
};

const deleteItem = async (item: CoursePriceDataTableItemDTO) => {
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

const studentTypesItems = ref<SelectOption[]>([]);
const modulesByCurriculumItems = ref<SelectOption[]>([]);

const init = async () => {
  studentTypesItems.value = await __getStudentTypesForSelect();
  modulesByCurriculumItems.value = await __searchModulesByCurriculum(
    props.curriculumId
  );
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
