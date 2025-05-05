<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500"> Registro de actas académicas </span>
      <h5 class="text-lg font-bold text-slate-800">Actas académicas</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable>
    <template #extra="{ reLoadDataTable }">
      <AcademicRecordForm
        v-model="showModal"
        :item="null"
        @success="reLoadDataTable"
      />
    </template>
  </DataTable>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/AcademicRecord/components/DataTable/configs";
import AcademicRecordForm from "@/app/modules/AcademicRecord/components/Form/Form.vue";
import DataTable from "@/app/modules/AcademicRecord/components/DataTable/DataTable.vue";
const showModal = ref<boolean>(false);
</script>
