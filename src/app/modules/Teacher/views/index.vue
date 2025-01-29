<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <h6 style="color: #999; margin: 0">Gestión de Docentes</h6>
      Docentes
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
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
<script lang="ts" setup>
import { ref } from "vue";

import { renderIcon } from "@/core/utils/icon.utils";

import { _createColumns } from "@/app/modules/Teacher/configs/dataTable.configs";
import TeacherForm from "@/app/modules/Teacher/components/TeacherForm.vue";
import DataTable from "@/app/modules/Teacher/components/DataTable/DataTable.vue";

const showModal = ref<boolean>(false);
</script>
