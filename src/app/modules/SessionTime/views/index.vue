<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <h6 style="color: #999; margin: 0">
        Gestión de Tipos Horas de la Sesión
      </h6>
      Horas de la Sesión
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable>
    <template #extra="{ reLoadDataTable }">
      <SessionTimeForm
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

import { _createColumns } from "@/app/modules/SessionTime/configs/dataTable.configs";
import SessionTimeForm from "@/app/modules/SessionTime/components/SessionTimeForm.vue";
import DataTable from "@/app/modules/SessionTime/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
