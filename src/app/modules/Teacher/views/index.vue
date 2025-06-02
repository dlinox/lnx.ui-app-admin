<template>
  <template
    v-if="
      hasPermission([
        'teacher.create',
        'teacher.edit',
        'teacher.delete',
        'teacher.create-account',
      ])
    "
    >'
    <n-card
      :segmented="{
        header: true,
        content: true,
      }"
    >
      <template #header>
        <span class="text-sm text-slate-500"> Gestión de Docentes </span>
        <h5 class="text-lg font-bold text-slate-800">Docentes</h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['teacher.create'])"
          size="large"
          type="primary"
          :render-icon="renderIcon('additem')"
          @click="showModal = true"
        >
          Agregar
        </n-button>
      </template>
    </n-card>
    <DataTable>
      <template #extra="{ reLoadDataTable, selectables }">
        <TeacherForm
          v-model="showModal"
          :item="null"
          @success="reLoadDataTable"
          :selectables="selectables"
        />
      </template>
    </DataTable>
  </template>
  <template v-else>
    <n-result
      status="403"
      title="403 No Autorizado"
      description="Algunas puertas siempre están cerradas para ti."
    >
      <template #footer>
        <n-button @click="router.push('/')"> Ir a casa </n-button>
      </template>
    </n-result>
  </template>
</template>
<script lang="ts" setup>
import { ref } from "vue";

import { renderIcon } from "@/core/utils/icon.utils";

import { _createColumns } from "@/app/modules/Teacher/configs/dataTable.configs";
import TeacherForm from "@/app/modules/Teacher/components/TeacherForm.vue";
import DataTable from "@/app/modules/Teacher/components/DataTable/DataTable.vue";

import { useRouter } from "vue-router";

import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();
const router = useRouter();
const showModal = ref<boolean>(false);
</script>
