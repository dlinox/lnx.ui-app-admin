<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <h6 style="color: #999; margin: 0">Gestión de Areas academicas</h6>
      Areas
    </template>
    <template #header-extra>
      <n-button :render-icon="renderIcon('additem')" @click="showModal = true">
        Agregar
      </n-button>
    </template>
  </n-card>
  <DataTable :curriculumOptions="curriculumOptions">
    <template #extra="{ reLoadDataTable }">
      <AreaForm
        v-model="showModal"
        :curriculumOptions="curriculumOptions"
        :item="null"
        @success="reLoadDataTable"
      />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/Area/configs/dataTable.configs";

import AreaForm from "@/app/modules/Area/components/AreaForm.vue";
import DataTable from "@/app/modules/Area/components/DataTable/DataTable.vue";
import type { SelectOption } from "naive-ui";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
const curriculumOptions = ref<SelectOption[]>([]);
const showModal = ref<boolean>(false);

const initValues = async () => {
  curriculumOptions.value = await __searchCurriculums("");
};

initValues();
</script>
