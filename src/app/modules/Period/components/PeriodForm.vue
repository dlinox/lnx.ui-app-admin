<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 500px"
      :title="item ? 'EDITAR REGISTRO' : 'NUEVO REGISTRO'"
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
          <n-col span="12">
            <n-form-item path="year" label="Año" :feedback="formErrors?.year">
              <n-input-number
                clearable
                maxlength="4"
                :status="formErrors?.year != undefined ? 'error' : ''"
                v-model:value.number="form.year"
                @input="
                  formErrors != null ? (formErrors.year = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="12">
            <n-form-item path="month" label="Mes" :feedback="formErrors?.month">
              <n-select
                clearable
                v-model:value="form.month"
                :options="MONTHS"
                :virtual-scroll="false"
                :status="formErrors?.month != undefined ? 'error' : ''"
                @input="
                  formErrors != null ? (formErrors.month = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-form-item path="status" label="Estado" :feedback="formErrors?.status">
              <n-select
                clearable
                v-model:value="form.status"
                :options="PERIOD_STATUS_CONST"
                :virtual-scroll="false"
                :status="formErrors?.status != undefined ? 'error' : ''"
                @input="
                  formErrors != null ? (formErrors.status = null) : () => {}
                "
              />
            </n-form-item> 
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
import { PERIOD_STATUS_CONST } from "@/app/shared/constants/status.constants";
import type { FormInst } from "naive-ui";

import {
  type PeriodDTO,
  type PeriodFormDTO,
  type PeriodFormErrorsDTO,
} from "@/app/modules/Period/types/Period.types";

import { MONTHS } from "@/core/constants/months.constants";

import {
  _getPeriodInitValues,
  _getPeriodRules,
} from "@/app/modules/Period/configs/form.configs";

import {
  _storeItem,
  _updateItem,
} from "@/app/modules/Period/services/period.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: PeriodDTO | null;
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<PeriodFormDTO>(_getPeriodInitValues());
const formErrors = ref<PeriodFormErrorsDTO | null>(null);
const formRules = ref<any>({ ..._getPeriodRules() });

const handleSubmit = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();

    let response = null;
    if (valid) {
      loading.value = true;
      if (form.value.id) {
        response = await _updateItem(form.value);
      } else {
        response = await _storeItem(form.value);
      }
      if (!response.status) {
        formErrors.value = response.data as PeriodFormErrorsDTO;
      } else {
        emit("success");
        showModal.value = false;
      }
    } else {
      console.log("Formulario inválido");
    }
  }
  loading.value = false;
};

const init = () => {
  console.log("Inicializando formulario");
  form.value = props.item ? { ...props.item } : _getPeriodInitValues();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
