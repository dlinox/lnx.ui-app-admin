<template>
  <n-row :gutter="16">
    <n-col span="12">
      <n-form-item label="Periodo Académico actual">
        <n-select
          v-model:value="currentPeriod"
          placeholder="Seleccionar Periodo Académico"
          :virtual-scroll="false"
          :options="optionsCurrentPeriod"
          :loading="loadingSearchCurrentPeriod"
          @search="debouncedhandleSearchCurrentPeriod"
          @update:value="confirmChangeCurrentPeriod"
          filterable
          clearable
          remote
        />
      </n-form-item>
    </n-col>
    <n-col span="12">
      <n-form-item label="Periodo de matrícula">
        <n-select
          v-model:value="enrollmentPeriod"
          placeholder="Seleccionar Periodo Académico"
          filterable
          :options="optionsEnrollmentPeriod"
          :loading="loadingSearchEnrollmentPeriod"
          clearable
          remote
          :virtual-scroll="false"
          @search="debouncedhandleSearchEnrollmentPeriod"
          @update:value="confirmChangeEnrollmentPeriod"
        />
      </n-form-item>
    </n-col>
  </n-row>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useDialog } from "naive-ui";
import { __searchPeriods } from "@/app/shared/services/selectables.services";
import {
  _enableCurrent,
  _enableEnrollmentPeriod,
} from "@/app/modules/Period/services/period.services";

import type { SelectOption } from "naive-ui";
import debounce from "@/core/utils/debounce.utils";

import { usePeriodStore } from "@/app/store/period.stores";

const emit = defineEmits(["updated"]);
const periodStore = usePeriodStore();

const modalComfirmChangeCurrentPeriod = useDialog();

const optionsCurrentPeriod = ref<SelectOption[]>([]);
const optionsEnrollmentPeriod = ref<SelectOption[]>([]);

const loadingSearchCurrentPeriod = ref<boolean>(false);
const loadingSearchEnrollmentPeriod = ref<boolean>(false);

const currentPeriod = ref<number | null>(null);
const enrollmentPeriod = ref<number | null>(null);

const handleSearchCurrentPeriod = async (search: string) => {
  loadingSearchCurrentPeriod.value = true;
  optionsCurrentPeriod.value = await __searchPeriods(search);
  loadingSearchCurrentPeriod.value = false;
};

const handleSearchEnrollmentPeriod = async (search: string) => {
  loadingSearchEnrollmentPeriod.value = true;
  optionsEnrollmentPeriod.value = await __searchPeriods(search);
  loadingSearchEnrollmentPeriod.value = false;
};

const debouncedhandleSearchCurrentPeriod = debounce((search) => {
  handleSearchCurrentPeriod(search);
}, 400);

const debouncedhandleSearchEnrollmentPeriod = debounce((search) => {
  handleSearchEnrollmentPeriod(search);
}, 400);

const confirmChangeCurrentPeriod = async () => {
  modalComfirmChangeCurrentPeriod.warning({
    title: "Confirmar",
    content: "¿Está seguro de cambiar el periodo académico actual?",
    positiveText: "Aceptar",
    negativeText: "Cancelar",
    closable: false,
    showIcon: false,
    negativeButtonProps: {
      type: "tertiary",
      size: "large",
    },
    positiveButtonProps: {
      size: "large",
      type: "error",
    },
    onPositiveClick: () => {
      enableCurrent();
    },
  });
};

const confirmChangeEnrollmentPeriod = async () => {
  modalComfirmChangeCurrentPeriod.warning({
    title: "Confirmar",
    content: "¿Está seguro de cambiar el periodo de matrícula?",
    positiveText: "Aceptar",
    negativeText: "Cancelar",
    closable: false,
    showIcon: false,
    negativeButtonProps: {
      type: "tertiary",
      size: "large",
    },
    positiveButtonProps: {
      size: "large",
      type: "error",
    },
    onPositiveClick: () => {
      enableEnrollmentPeriod();
    },
  });
};

const enableCurrent = async () => {
  let periodId = currentPeriod.value as number;
  periodId = periodId ?? 0;
  await _enableCurrent(periodId);
  emit("updated");
  periodStore.getCurrent();
};

const enableEnrollmentPeriod = async () => {
  let periodId = enrollmentPeriod.value as number;

  periodId = periodId ?? 0;
  await _enableEnrollmentPeriod(periodId);
  emit("updated");
  periodStore.getEnrollment();
};

const initComponet = async () => {
  await handleSearchCurrentPeriod("");
  await handleSearchEnrollmentPeriod("");

  currentPeriod.value = periodStore.current?.id ?? null;
  enrollmentPeriod.value = periodStore.enrollment?.id ?? null;
};
initComponet();
</script>
