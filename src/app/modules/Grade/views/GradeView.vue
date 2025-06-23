<template>
  <template
    v-if="hasPermission(['enrollment-grade.view', 'enrollment-grade.create'])"
  >
    <n-card
      :segmented="{
        header: true,
        content: true,
      }"
    >
      <template #header>
        <h6 class="text-sm text-gray-400">Ingreso de notas</h6>
        Notas
      </template>

      <template #action> </template>
    </n-card>
    <GroupDataTable />
  </template>
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { SelectOption } from "naive-ui";
import GroupDataTable from "@/app/modules/Grade/components/GroupDataTable/GroupDataTable.vue";
import { __searchPeriods } from "@/app/shared/services/selectables.services";

import { usePermission } from "@/core/composables/usePermission";

const { hasPermission } = usePermission();

const loadingSearchPeriod = ref<boolean>(false);
const optionsPeirod = ref<SelectOption[]>([]);

const handleSearchPeriod = async (search: string) => {
  loadingSearchPeriod.value = true;
  optionsPeirod.value = await __searchPeriods(search);
  loadingSearchPeriod.value = false;
};

const initView = async () => {
  await handleSearchPeriod("");
};

initView();
</script>
