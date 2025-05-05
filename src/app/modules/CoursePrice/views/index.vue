<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500"> 
        Gestión de precios  
      </span>
      <h5 class="text-lg font-bold text-slate-800">
        Mensualidades
      </h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>

    <template #action>
      <n-row gutter="16" style="display: flex; justify-content: center">
        <n-col span="10">
          <n-select
            v-model:value="formSearch.curriculumId"
            placeholder="Seleccionar Plan de estudio"
            filterable
            :options="curriculumOptions"
            clearable
            :virtual-scroll="false"
          />
        </n-col>
      </n-row>
    </template>
  </n-card>
  <DataTable
    v-if="formSearch!.curriculumId"
    :curriculumId="formSearch.curriculumId"
  >
    <template #extra="{ reLoadDataTable, studentTypesItems, coursesItems }">
      <CoursePriceForm
        v-model="showModal"
        :item="null"
        @success="reLoadDataTable"
        :studentTypesItems="studentTypesItems"
        :coursesItems="coursesItems"
        :curriculumId="formSearch.curriculumId"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { SelectOption } from "naive-ui";
import { renderIcon } from "@/core/utils/icon.utils";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
import DataTable from "@/app/modules/CoursePrice/components/DataTable/DataTable.vue";
import CoursePriceForm from "@/app/modules/CoursePrice/components/CoursePriceForm.vue";
const curriculumOptions = ref<SelectOption[]>([]);

const showModal = ref<boolean>(false);

const formSearch = ref<{
  curriculumId: number | null;
}>({
  curriculumId: null,
});

const initView = async () => {
  curriculumOptions.value = await __searchCurriculums("");
};

initView();
</script>
