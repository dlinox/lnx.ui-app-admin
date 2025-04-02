<template>
  <n-card :segmented="{
    header: true,
    content: true,
  }">
    <template #header>
      <span class="text-sm text-slate-500">
        Gestionar los tipos de documento
      </span>
      <h5 class="text-lg font-bold text-slate-800">Tipos de Documento</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable>
    <template #extra="{ reLoadDataTable }">
      <DocumentTypeForm v-model="showModal" :item="null" @success="reLoadDataTable" />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/DocumentType/configs/dataTable.configs";

import DocumentTypeForm from "@/app/modules/DocumentType/components/DocumentTypeForm.vue";
import DataTable from "@/app/modules/DocumentType/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
