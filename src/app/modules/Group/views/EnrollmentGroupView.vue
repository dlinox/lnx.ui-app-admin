<template>
  <n-card
    :segmented="{
      header: true,
      content: true,
    }"
  >
    <template #header>
      <h6 class="text-sm text-gray-400">Gestión de grupos aperturados</h6>
      Grupos aperturados
    </template>

    <template #action> </template>
  </n-card>
  <EnrollmentGroupDataTable />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { SelectOption } from "naive-ui";
import EnrollmentGroupDataTable from "../components/EnrollmentGroupDataTable/EnrollmentGroupDataTable.vue";
import {
  __searchPeriods,
  __searchCurriculums,
} from "@/app/shared/services/selectables.services";

const loadingSearchPeriod = ref<boolean>(false);
const optionsPeirod = ref<SelectOption[]>([]);

const handleSearchPeriod = async (search: string) => {
  loadingSearchPeriod.value = true;
  optionsPeirod.value = await __searchPeriods(search);
  loadingSearchPeriod.value = false;
};

const optionscurriculumId = ref<SelectOption[]>([]);

const initView = async () => {
  await handleSearchPeriod("");
  optionscurriculumId.value = await __searchCurriculums("");
};

initView();
</script>
