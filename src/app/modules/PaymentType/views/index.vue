<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <h6 style="color: #999; margin: 0">Gestión de Tipos de Documentos</h6>
      Tipos de Documentos
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable>
    <template #extra="{ reLoadDataTable }">
      <PaymentTypeForm
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
import { _createColumns } from "@/app/modules/PaymentType/configs/dataTable.configs";

import PaymentTypeForm from "@/app/modules/PaymentType/components/PaymentTypeForm.vue";
import DataTable from "@/app/modules/PaymentType/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
