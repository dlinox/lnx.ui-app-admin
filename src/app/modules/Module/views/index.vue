<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <span class="text-sm text-slate-500">
        Gestión de modulos académicos
      </span>
      <h5 class="text-lg font-bold text-slate-800">Modulos</h5>
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable :curriculumOptions="curriculumOptions">
    <template #extra="{ reLoadDataTable }">
      <ModuleForm
        :curriculumOptions="curriculumOptions"
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
import { _createColumns } from "@/app/modules/Module/configs/dataTable.configs";

import ModuleForm from "@/app/modules/Module/components/ModuleForm.vue";
import DataTable from "@/app/modules/Module/components/DataTable/DataTable.vue";
import type { SelectOption } from "naive-ui";
const curriculumOptions = ref<SelectOption[]>([]);

import { __searchCurriculums } from "@/app/shared/services/selectables.services";

const showModal = ref<boolean>(false);

const initValues = async () => {
  curriculumOptions.value = await __searchCurriculums("");
};

initValues();
</script>
