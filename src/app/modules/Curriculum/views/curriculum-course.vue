<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <h6 style="color: #999; margin: 0">Gestión del Plan de Estudio</h6>
      {{ curriculum?.name }}
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar curso
      </n-button>
    </template>
  </n-card>
  <CurriculumCourseDataTable>
    <template #extra="{ reLoadDataTable, selectables }">
      <CurriculumCourseForm
        v-model="showModal"
        :item="null"
        :selectables="selectables"
        @success="reLoadDataTable"
      />
    </template>
  </CurriculumCourseDataTable>
</template>
<script lang="ts" setup>
import { ref, provide } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/Curriculum/configs/dataTable.configs";
import type { CurriculumDTO } from "../types/Curriculum.types";
import { useRoute } from "vue-router";

import { _getDataItem } from "@/app/modules/Curriculum/services/curriculum.services";
import CurriculumCourseDataTable from "../components/DataTable/CurriculumCourseDataTable.vue";
import CurriculumCourseForm from "../components/CurriculumCourseForm.vue";

const curriculum = ref<CurriculumDTO>();

const route = useRoute();
const showModal = ref<boolean>(false);

const initView = async () => {
  const id = route.params?.id;
  if (id) {
    curriculum.value = await _getDataItem(id);
  }
};

initView();
provide("curriculum", curriculum);
</script>
