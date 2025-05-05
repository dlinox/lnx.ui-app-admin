<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500"> Gestión Curricular </span>
      <h5 class="text-lg font-bold text-slate-800">Curriculo</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable>
    <template #extra="{ reLoadDataTable }">
      <CurriculumForm
        v-model="showModal"
        :item="null"
        @success="reLoadDataTable"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/Curriculum/configs/dataTable.configs";

import CurriculumForm from "@/app/modules/Curriculum/components/CurriculumForm.vue";
import DataTable from "@/app/modules/Curriculum/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
