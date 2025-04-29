<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500">
        Gestion de usuarios de estudiante
      </span>
      <h5 class="text-lg font-bold text-slate-800">Usuarios de Estudiante</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable level="student">
    <template #extra="{ reLoadDataTable, roleOptions }">
      <AccountUserForm
        v-model="showModal"
        :item="null"
        :roleOptions="roleOptions"
        @success="reLoadDataTable"
        level="student"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/User/configs/dataTable.configs";
import AccountUserForm from "@/app/modules/User/components/AccountUserForm.vue";
import DataTable from "@/app/modules/User/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
