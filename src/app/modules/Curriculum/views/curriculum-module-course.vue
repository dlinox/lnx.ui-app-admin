<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <h6 style="color: #999; margin: 0">
        Gestión de Cursos del Plan de Estudio
      </h6>
      {{ curriculumModule?.area }}
      {{ curriculumModule?.module ? " - " + curriculumModule?.module : "" }}
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <CourseDataTable>
    <template #extra="{ reLoadDataTable, selectables }">
      <CurriculumModuleCourseForm
        v-model="showModal"
        :item="null"
        @success="reLoadDataTable"
        :selectables="selectables"
      />
    </template>
  </CourseDataTable>
</template>
<script lang="ts" setup>
import { provide, ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _getDataItem } from "@/app/modules/Curriculum/services/curriculumModule.services";
import { useRoute } from "vue-router";

import CourseDataTable from "@/app/modules/Curriculum/components/DataTable/CourseDataTable.vue";
import type { CurriculumModuleDTO } from "../types/Curriculum.types";
import CurriculumModuleCourseForm from "../components/CurriculumModuleCourseForm.vue";

const curriculumModule = ref<CurriculumModuleDTO>();
const route = useRoute();
const showModal = ref<boolean>(false);
const initView = async () => {
  const id = route.params?.id;
  if (id) {
    curriculumModule.value = await _getDataItem(id);
  }
};

initView();
provide("curriculumModule", curriculumModule);
</script>
