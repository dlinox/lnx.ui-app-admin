<template>
  <template v-if="hasPermission(['area.create', 'area.edit', 'area.delete'])">
    <n-card
      :segmented="{
        header: true,
        content: true,
      }"
    >
      <template #header>
        <span class="text-sm text-slate-500">
          Gestión de Areas academicas
        </span>
        <h5 class="text-lg font-bold text-slate-800">Areas</h5>
      </template>
      <template #header-extra>
        <n-button
          v-if="hasPermission(['area.create'])"
          size="large"
          type="primary"
          :render-icon="renderIcon('additem')"
          @click="showModal = true"
        >
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
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { renderIcon } from "@/core/utils/icon.utils";
import { _createColumns } from "@/app/modules/Area/configs/dataTable.configs";

import AreaForm from "@/app/modules/Area/components/AreaForm.vue";
import DataTable from "@/app/modules/Area/components/DataTable/DataTable.vue";
import type { SelectOption } from "naive-ui";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";

import { usePermission } from "@/core/composables/usePermission";
const { hasPermission } = usePermission();

const curriculumOptions = ref<SelectOption[]>([]);
const showModal = ref<boolean>(false);

const initValues = async () => {
  curriculumOptions.value = await __searchCurriculums("");
};

initValues();
</script>
