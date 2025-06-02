<template>
  <template
    v-if="
      hasPermission([
        'document-type.create',
        'document-type.edit',
        'document-type.delete',
      ])
    "
  >
    <n-card
      :segmented="{
        header: true,
        content: true,
      }"
    >
      <template #header>
        <span class="text-sm text-slate-500">
          Gestionar los tipos de documento
        </span>
        <h5 class="text-lg font-bold text-slate-800">Tipos de Documento</h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['document-type.create'])"
          type="primary"
          size="large"
          :render-icon="renderIcon('additem')"
          @click="showModal = true"
        >
          Agregar
        </n-button>
      </template>
    </n-card>
    <DataTable>
      <template #extra="{ reLoadDataTable }">
        <DocumentTypeForm
          v-model="showModal"
          :item="null"
          @success="reLoadDataTable"
        />
      </template>
    </DataTable>
  </template>
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/DocumentType/configs/dataTable.configs";

import DocumentTypeForm from "@/app/modules/DocumentType/components/DocumentTypeForm.vue";
import DataTable from "@/app/modules/DocumentType/components/DataTable/DataTable.vue";

import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();

const showModal = ref<boolean>(false);
</script>
