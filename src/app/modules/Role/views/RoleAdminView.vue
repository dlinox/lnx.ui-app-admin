<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500">
        Gestion de roles de administrador
      </span>
      <h5 class="text-lg font-bold text-slate-800">Roles de Administrador</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable level="admin">
    <template #extra="{ reLoadDataTable }">
      <RoleForm
        v-model="showModal"
        :item="null"
        @success="reLoadDataTable"
        level="admin"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/Role/configs/dataTable.configs";

import RoleForm from "@/app/modules/Role/components/RoleForm.vue";
import DataTable from "@/app/modules/Role/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
