<template>
  <template v-if="hasPermission(['enrollment.edit'])">
    <n-card
      :segmented="{
        header: true,
        content: true,
      }"
    >
      <template #header>
        <span class="text-sm text-slate-500"> Gestión de matrículas </span>
        <h5 class="text-lg font-bold text-slate-800">Matrículas</h5>
      </template>
      <template #header-extra> </template>
    </n-card>
    <DataTable> </DataTable>
  </template>
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>
<script lang="ts" setup>
import { _createColumns } from "@/app/modules/Course/configs/dataTable.configs";
import DataTable from "@/app/modules/Enrollment/components/DataTable/DataTable.vue";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
import { usePermission } from "@/core/composables/usePermission";

const { hasPermission } = usePermission();
const initValues = async () => {};
initValues();
</script>
