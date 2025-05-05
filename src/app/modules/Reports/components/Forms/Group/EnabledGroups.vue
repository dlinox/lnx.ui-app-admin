<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 800px"
      :title="'Generar Reporte - Grupos Aperturados'"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <n-button
          :render-icon="renderIcon('close-circle')"
          @click="showModal = false"
        >
        </n-button>
      </template>

      <n-row gutter="16">
        <n-col span="24">
          <n-select
            class="mx-auto"
            style="width: 300px"
            v-model:value="search.periodId"
            placeholder="Seleccionar Periodo Académico"
            filterable
            :options="periodOptions"
            clearable
            remote
            :virtual-scroll="false"
            @search="debouncedhandleSearchPeriod"
          />
        </n-col>
      </n-row>
      <template #footer>
        <n-space justify="center">
          <n-button
            :disabled="search.periodId === null"
            secondary
            class="ms-2"
            type="error"
            :loading="loading"
            :render-icon="renderIcon('document-download')"
            @click="pdfEnabledGroups"
          >
            PDF
          </n-button>
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import {
  _pdfEnabledGroups,
  _getGroupsByModuleAndPeriod,
} from "@/app/modules/Reports/services/report.services";
import { __searchModulesByCurriculum } from "@/app/shared/services/selectables.services";
import { __searchPeriods } from "@/app/shared/services/selectables.services";

import { renderIcon } from "@/core/utils/icon.utils";
import type { SelectOption } from "naive-ui";

import debounce from "@/core/utils/debounce.utils";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const loadingSearchPeriod = ref<boolean>(false);

const periodOptions = ref<SelectOption[]>([]);

const search = ref<any>({
  periodId: null,
});

const pdfEnabledGroups = async () => {
  loading.value = true;
  await _pdfEnabledGroups({ periodId: search.value.periodId });
  loading.value = false;
};

const handleSearchPeriod = async (search: string) => {
  loadingSearchPeriod.value = true;
  periodOptions.value = await __searchPeriods(search);
  loadingSearchPeriod.value = false;
};

const debouncedhandleSearchPeriod = debounce((search) => {
  handleSearchPeriod(search);
}, 400);

const init = () => {
  handleSearchPeriod("");
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
