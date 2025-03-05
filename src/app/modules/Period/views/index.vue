<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
      footer: true,
    }"
  >
    <template #header>
      <h6 style="font-size: 14px; color: #999; margin: 0">
        Gestión Periodos Académicos
      </h6>
      Periodos Académicos
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable>
    <template #extra="{ reLoadDataTable }">
      <PeriodForm v-model="showModal" :item="null" @success="reLoadDataTable" />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/Period/configs/dataTable.configs";
import PeriodForm from "@/app/modules/Period/components/PeriodForm.vue";
import DataTable from "@/app/modules/Period/components/DataTable/DataTable.vue";
import { __searchPeriods } from "@/app/shared/services/selectables.services";
const showModal = ref<boolean>(false);
</script>
