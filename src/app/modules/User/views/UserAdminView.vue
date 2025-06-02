<template>
  <template
    v-if="
      hasPermission([
        'user-admin.create',
        'user-admin.edit',
        'user-admin.delete',
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
          Gestion de usuarios de administrador
        </span>
        <h5 class="text-lg font-bold text-slate-800">
          Usuarios de Administrador
        </h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['user-admin.create'])"
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
      <template #extra="{ reLoadDataTable, roleOptions }">
        <UserForm
          v-model="showModal"
          :item="null"
          :roleOptions="roleOptions"
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
import { _createColumns } from "@/app/modules/User/configs/dataTable.configs";

import UserForm from "@/app/modules/User/components/UserForm.vue";
import DataTable from "@/app/modules/User/components/DataTable/DataTable.vue";
import { usePermission } from "@/core/composables/usePermission";

const { hasPermission } = usePermission();
const showModal = ref<boolean>(false);
</script>
