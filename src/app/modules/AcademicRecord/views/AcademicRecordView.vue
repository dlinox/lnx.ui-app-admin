<template>
  <template
    v-if="hasPermission(['academic-record.view', 'academic-record.print'])"
  >
    <n-card
      :segmented="{
        header: true,
        content: true,
      }"
    >
      <template #header>
        <span class="text-sm text-slate-500">
          Registro de actas académicas
        </span>
        <h5 class="text-lg font-bold text-slate-800">Actas académicas</h5>
      </template>
      <template #header-extra> </template>
    </n-card>
    <DataTable></DataTable>
  </template>
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>

<script lang="ts" setup>
import { _createColumns } from "@/app/modules/AcademicRecord/components/DataTable/configs";
import DataTable from "@/app/modules/AcademicRecord/components/DataTable/DataTable.vue";
import { usePermission } from "@/core/composables/usePermission";

const { hasPermission } = usePermission();
</script>
