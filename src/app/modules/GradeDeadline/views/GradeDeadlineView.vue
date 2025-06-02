<template>
  <template
    v-if="hasPermission(['grade-deadline.create', 'grade-deadline.extencion'])"
  >
    <n-card
      :segmented="{
        header: true,
        content: true,
      }"
    >
      <template #header>
        <span class="text-sm text-slate-500">
          Gestion de periodo de ingresos de notas
        </span>
        <h5 class="text-lg font-bold text-slate-800">
          Habilitar ingreso de notas
        </h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['grade-deadline.create'])"
          :render-icon="renderIcon('additem')"
          @click="showModal = true"
        >
          Agregar
        </n-button>
      </template>
    </n-card>
    <DataTable>
      <template #extra="{ reLoadDataTable }">
        <GradeDeadlineForm
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
import { _createColumns } from "@/app/modules/GradeDeadline/components/DataTable/configs";
import GradeDeadlineForm from "@/app/modules/GradeDeadline/components/Form/Form.vue";
import DataTable from "@/app/modules/GradeDeadline/components/DataTable/DataTable.vue";
import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();
const showModal = ref<boolean>(false);
</script>
