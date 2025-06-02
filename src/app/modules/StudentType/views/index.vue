<template>
  <template
    v-if="
      hasPermission([
        'student-type.create',
        'student-type.update',
        'student-type.delete',
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
          Gestión de Tipos de Estudiante</span
        >
        <h5 class="text-lg font-bold text-slate-800">Tipos de Estudiante</h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['student-type.create'])"
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
        <StudentTypeForm
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

import { _createColumns } from "@/app/modules/StudentType/configs/dataTable.configs";
import StudentTypeForm from "@/app/modules/StudentType/components/StudentTypeForm.vue";
import DataTable from "@/app/modules/StudentType/components/DataTable/DataTable.vue";
import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();
const showModal = ref<boolean>(false);
</script>
