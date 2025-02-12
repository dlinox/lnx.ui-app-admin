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
      :selectables="selectables"
    >
    </slot>
  </div>
  <CurriculumCourseForm
    v-model="showModal"
    :item="editItem"
    :selectables="selectables"
    @success="reLoadDataTable"
  />
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";

import LnxIcon from "@/core/components/LnxIcon.vue";
import debounce from "@/core/utils/debounce.utils";
import {
  type DataTableRequestDTO,
  type DataTableResponseDTO,
  initValuesDataTablePagination,
} from "@/core/types/DataTable.types";
import { type ItemSelectDTO } from "@/core/types/Select.types";

import { type CurriculumCourseDataTableItemDTO } from "@/app/modules/Curriculum/types/Curriculum.types";

import {
  _createCurriculumCourseColumns,
  _createPagination,
} from "@/app/modules/Curriculum/configs/dataTable.configs";
import {
  _loadDataTable,
  _deleteItem,
} from "@/app/modules/Curriculum/services/curriculumCourse.services";

import {
  __getCoursesForSelect,
  __getPreRequisiteByCurriculumItemsForSelect,
} from "@/app/modules/Course/services/course.services";

import { __getAreasForSelect } from "@/app/modules/Area/services/area.services";
import { __getModulesForCurriculumForSelect } from "@/app/modules/Module/services/module.services";

import CurriculumCourseForm from "@/app/modules/Curriculum/components/CurriculumCourseForm.vue";

const route = useRoute();

const selectables = ref<any>({
  areaItems: [] as ItemSelectDTO[],
  moduleItems: [] as ItemSelectDTO[],
  courseItems: [] as ItemSelectDTO[],
  preRequisiteItems: [] as ItemSelectDTO[],
});

const loadingTable = ref(false);
const items = ref<CurriculumCourseDataTableItemDTO[]>([]);
const showModal = ref<boolean>(false);
const editItem = ref<CurriculumCourseDataTableItemDTO | null>(null);
const pagination = reactive({ ...initValuesDataTablePagination() });
const request = ref<DataTableRequestDTO>({
  search: null,
  page: pagination.page,
  pageSize: pagination.pageSize,
  filters: {
    curriculumId: route.params?.id,
  },
} as DataTableRequestDTO);
const response = ref<DataTableResponseDTO<CurriculumCourseDataTableItemDTO>>(
  {} as DataTableResponseDTO<CurriculumCourseDataTableItemDTO>
);

const openFormModal = (item: CurriculumCourseDataTableItemDTO | null) => {
  editItem.value = item;
  showModal.value = true;
};

const deleteItem = async (item: CurriculumCourseDataTableItemDTO) => {
  await _deleteItem(item);
  await reLoadDataTable();
};

const columns = _createCurriculumCourseColumns(openFormModal, deleteItem);

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
  const id = route.params?.id;
  selectables.value.areaItems = await __getAreasForSelect();
  selectables.value.moduleItems = await __getModulesForCurriculumForSelect(id);
  selectables.value.courseItems = await __getCoursesForSelect();
  selectables.value.preRequisiteItems =
    await __getPreRequisiteByCurriculumItemsForSelect(id);
};

init();
</script>
