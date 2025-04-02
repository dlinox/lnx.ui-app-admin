<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 500px"
      :title="item ? 'Editar registro' : 'Nuevo registro'"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-form ref="formRef" :model="form" :rules="formRules" size="large">
        <n-row :gutter="16">
          <n-col span="24">
            <n-form-item
              path="periodId"
              label="Periodo"
              :feedback="formErrors?.periodId"
            >
              <n-select
                v-model:value="form.periodId"
                placeholder="Seleccionar Periodo Académico"
                filterable
                :options="periodOptions"
                :loading="loadingSearchPeriod"
                clearable
                remote
                :disabled="form.id != null"
                :virtual-scroll="false"
                @search="debouncedhandleSearchPeriod"
                @update:value="
                  () =>
                    formErrors != null ? (formErrors.periodId = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="12">
            <n-form-item
              path="startDate"
              label="Fecha de inicio"
              :feedback="formErrors?.startDate"
            >
              <n-input
                type="date"
                :disabled="form.id != null"
                v-model:value="form.startDate"
                :status="formErrors?.startDate != undefined ? 'error' : ''"
                @update:value="
                  () =>
                    formErrors != null
                      ? (formErrors.startDate = null)
                      : () => {}
                "
                clearable
                placeholder=""
              />
            </n-form-item>
          </n-col>

          <n-col span="12">
            <n-form-item
              path="endDate"
              label="Fecha de fin"
              :feedback="formErrors?.endDate"
            >
              <n-input
                type="date"
                placeholder=""
                v-model:value="form.endDate"
                :status="formErrors?.endDate != undefined ? 'error' : ''"
                @update:value="
                  () =>
                    formErrors != null ? (formErrors.endDate = null) : () => {}
                "
                clearable
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-form-item
              path="observations"
              label="Observaciones"
              :feedback="formErrors?.observations"
            >
              <n-input
                type="textarea"
                v-model:value="form.observations"
                :status="formErrors?.observations != undefined ? 'error' : ''"
                @update:value="
                  () =>
                    formErrors != null
                      ? (formErrors.observations = null)
                      : () => {}
                "
                clearable
                placeholder="Ingrese observaciones"
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-space justify="end">
              <n-form-item
                label-placement="left"
                label="Matrícula virtual"
                path="isEnabled"
                :show-feedback="false"
              >
                <n-switch v-model:value="form.virtual" />
              </n-form-item>
            </n-space>
          </n-col>
        </n-row>
      </n-form>
      <template #footer>
        <n-space justify="end">
          <n-button
            tertiary
            size="large"
            @click="showModal = false"
            :disabled="loading"
          >
            Cancelar
          </n-button>
          <n-button
            size="large"
            type="primary"
            @click="handleSubmit"
            :loading="loading"
            >Guardar</n-button
          >
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import type { FormInst, SelectOption } from "naive-ui";

import {
  type EnrollmentDeadlineDTO,
  type EnrollmentDeadlineFormDTO,
  type EnrollmentDeadlineFormErrorsDTO,
} from "@/app/modules/EnrollmentDeadline/types/EnrollmentDeadline.types";

import {
  _getEnrollmentDeadlineInitValues,
  _getEnrollmentDeadlineRules,
} from "@/app/modules/EnrollmentDeadline/components/Form/configs";

import { _saveItem } from "@/app/modules/EnrollmentDeadline/services/enrollmentDeadline.services";

import debounce from "@/core/utils/debounce.utils";
import {
  __searchPeriods,
  __searchCurriculums,
} from "@/app/shared/services/selectables.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: EnrollmentDeadlineDTO | null;
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<EnrollmentDeadlineFormDTO>(_getEnrollmentDeadlineInitValues());
const formErrors = ref<EnrollmentDeadlineFormErrorsDTO | null>(null);
const formRules = computed(() => ({
  ..._getEnrollmentDeadlineRules(form.value),
}));

const loadingSearchPeriod = ref<boolean>(false);
const periodOptions = ref<SelectOption[]>([]);

const handleSearchPeriod = async (search: string) => {
  loadingSearchPeriod.value = true;
  periodOptions.value = await __searchPeriods(search);
  loadingSearchPeriod.value = false;
};

const debouncedhandleSearchPeriod = debounce((search) => {
  handleSearchPeriod(search);
}, 400);

const handleSubmit = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();
    let response = null;
    if (valid) {
      loading.value = true;
      response = await _saveItem(form.value);
      if (!response.status) {
        formErrors.value = response.data as EnrollmentDeadlineFormErrorsDTO;
      } else {
        emit("success");
        showModal.value = false;
      }
    }
  }
  loading.value = false;
};

const init = () => {
  form.value = props.item
    ? {
        ...props.item,
        startDate: props.item.lastDate
          ? props.item.lastDate.slice(0, 10)
          : null,
        endDate: null,
        observations: null,
      }
    : _getEnrollmentDeadlineInitValues();
};

watch(showModal, (value) => {
  if (value) {
    formErrors.value = null;
    handleSearchPeriod("");
    init();
  }
});
</script>
