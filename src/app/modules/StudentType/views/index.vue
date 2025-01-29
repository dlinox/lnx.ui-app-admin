<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <h6 style="color: #999; margin: 0">Gestión de Tipos de Estudiantes</h6>
      Tipos de Estudiantes
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable>
    <template #extra="{ reLoadDataTable }">
      <StudentTypeForm
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

import { _createColumns } from "@/app/modules/StudentType/configs/dataTable.configs";
import StudentTypeForm from "@/app/modules/StudentType/components/StudentTypeForm.vue";
import DataTable from "@/app/modules/StudentType/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
