<template>
  <template
    v-if="
      hasPermission([
        'role-admin.create',
        'role-admin.edit',
        'role-admin.delete',
        'role-admin.assign-permissions',
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
          Gestion de roles de administrador
        </span>
        <h5 class="text-lg font-bold text-slate-800">Roles de Administrador</h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['role-admin.create'])"
          type="primary"
          size="large"
          :render-icon="renderIcon('additem')"
          @click="showModal = true"
        >
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
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/Role/configs/dataTable.configs";

import RoleForm from "@/app/modules/Role/components/RoleForm.vue";
import DataTable from "@/app/modules/Role/components/DataTable/DataTable.vue";

import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();
const showModal = ref<boolean>(false);
</script>
