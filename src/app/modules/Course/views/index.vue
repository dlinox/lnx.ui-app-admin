<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500"> Gestión de Cursos </span>
      <h5 class="text-lg font-bold text-slate-800">Cursos</h5>
    </template>

    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable :curriculumOptions="curriculumOptions">
    <template #extra="{ reLoadDataTable }">
      <CourseForm
        v-model="showModal"
        :item="null"
        @success="reLoadDataTable"
        :curriculumOptions="curriculumOptions"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/Course/configs/dataTable.configs";

import CourseForm from "@/app/modules/Course/components/CourseForm.vue";
import DataTable from "@/app/modules/Course/components/DataTable/DataTable.vue";
import type { SelectOption } from "naive-ui";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
const curriculumOptions = ref<SelectOption[]>([]);
const showModal = ref<boolean>(false);

const initValues = async () => {
  curriculumOptions.value = await __searchCurriculums("");
};

initValues();
</script>
