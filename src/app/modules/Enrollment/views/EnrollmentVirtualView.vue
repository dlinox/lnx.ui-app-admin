<template>
  <n-card :segmented="{
    header: true,
    content: true,
  }">
    <template #header>
      <h6 style="color: #999; margin: 0">
        Gestión matrícula virtual
      </h6>
      Matrícula virtual
    </template>
    <template #header-extra>
    </template>
  </n-card>
  <DataTable>
  </DataTable>
</template>
<script lang="ts" setup>
import { _createColumns } from "@/app/modules/Course/configs/dataTable.configs";
import DataTable from "@/app/modules/Enrollment/components/DataTable/DataTable.vue";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
const initValues = async () => {};
initValues();
</script>