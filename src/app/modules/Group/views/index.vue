<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <h6 class="text-sm text-gray-400">Carga Académica</h6>
      Apertura de grupos
    </template>

    <template #action>
      <n-row gutter="16" style="display: flex; justify-content: center">
        <n-col span="10">
          <n-select
            v-model:value="formSearch.curriculumId"
            placeholder="Seleccionar Plan de estudio"
            filterable
            :options="optionscurriculumId"
            clearable
            :virtual-scroll="false"
          />
        </n-col>
        <n-col span="10">
          <n-select
            v-model:value="formSearch.period"
            placeholder="Seleccionar Periodo Académico"
            filterable
            :options="optionsPeirod"
            :loading="loadingSearchPeriod"
            clearable
            remote
            :virtual-scroll="false"
            @search="debouncedhandleSearchPeriod"
          />
        </n-col>
      </n-row>
    </template>
  </n-card>
  <DataTable
    v-if="formSearch!.period && formSearch!.curriculumId"
    :periodId="formSearch.period"
    :curriculumId="formSearch.curriculumId"
  >
  </DataTable>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { SelectOption } from "naive-ui";

import debounce from "@/core/utils/debounce.utils";
import {
  __searchPeriods,
  __searchCurriculums,
} from "@/app/shared/services/selectables.services";
import DataTable from "@/app/modules/Group/components/DataTable/DataTable.vue";

const loadingSearchPeriod = ref<boolean>(false);
const optionsPeirod = ref<SelectOption[]>([]);

const handleSearchPeriod = async (search: string) => {
  loadingSearchPeriod.value = true;
  optionsPeirod.value = await __searchPeriods(search);
  loadingSearchPeriod.value = false;
};

const debouncedhandleSearchPeriod = debounce((search) => {
  handleSearchPeriod(search);
}, 400);

const optionscurriculumId = ref<SelectOption[]>([]);

const formSearch = ref<{
  period: number | null;
  curriculumId: number | null;
}>({
  period: null,
  curriculumId: null,
});

const initView = async () => {
  await handleSearchPeriod("");
  optionscurriculumId.value = await __searchCurriculums("");
};

initView();
</script>
