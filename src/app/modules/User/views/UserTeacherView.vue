<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500">
        Gestion de usuarios de docentes
      </span>
      <h5 class="text-lg font-bold text-slate-800">
        Usuarios de Docentes
      </h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable level="teacher">
    <template #extra="{ reLoadDataTable, roleOptions }">
      <UserForm
        v-model="showModal"
        :item="null"
        :roleOptions="roleOptions"
        @success="reLoadDataTable"
        level="teacher"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/User/configs/dataTable.configs";

import UserForm from "@/app/modules/User/components/UserForm.vue";
import DataTable from "@/app/modules/User/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
