<template>
  <template
    v-if="
      hasPermission([
        'curriculum.create',
        'curriculum.edit',
        'curriculum.delete',
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
        <span class="text-sm text-slate-500"> Gestión Curricular </span>
        <h5 class="text-lg font-bold text-slate-800">Curriculo</h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['curriculum.create'])"
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
      <template #extra="{ reLoadDataTable }">
        <CurriculumForm
          v-model="showModal"
          :item="null"
          @success="reLoadDataTable"
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
import { _createColumns } from "@/app/modules/Curriculum/configs/dataTable.configs";

import CurriculumForm from "@/app/modules/Curriculum/components/CurriculumForm.vue";
import DataTable from "@/app/modules/Curriculum/components/DataTable/DataTable.vue";

import { useRouter } from "vue-router";

import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();
const router = useRouter();

const showModal = ref<boolean>(false);
</script>
