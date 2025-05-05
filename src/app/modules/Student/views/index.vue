<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500"> Gestión de Estudiantes </span>
      <h5 class="text-lg font-bold text-slate-800">Estudiantes</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable>
    <template #extra="{ reLoadDataTable, selectables }">
      <StudentForm
        v-model="showModal"
        :item="null"
        @success="reLoadDataTable"
        :selectables="selectables"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";

import { renderIcon } from "@/core/utils/icon.utils";

import { _createColumns } from "@/app/modules/Student/configs/dataTable.configs";
import StudentForm from "@/app/modules/Student/components/StudentForm.vue";
import DataTable from "@/app/modules/Student/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
