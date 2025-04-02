<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500"> Gestión de Laboratorios </span>
      <h5 class="text-lg font-bold text-slate-800">Laboratorios</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable>
    <template #extra="{ reLoadDataTable }">
      <LaboratoryForm
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
import { _createColumns } from "@/app/modules/Laboratory/configs/dataTable.configs";

import LaboratoryForm from "@/app/modules/Laboratory/components/LaboratoryForm.vue";
import DataTable from "@/app/modules/Laboratory/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
