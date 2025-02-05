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
        <n-row>
          <n-col span="24">
            <n-form-item
              path="days"
              label="Días"
              placeholder="Ingrese los días ej. LUN-MIE-VIE"
              :feedback="formErrors?.days"
            >
              <n-input
                :status="formErrors?.days != undefined ? 'error' : ''"
                v-model:value="form.days"
                @input="
                  formErrors != null ? (formErrors.days = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-space justify="end">
              <n-form-item
                label-placement="left"
                label="¿Habilitado?"
                path="isEnabled"
                :show-feedback="false"
              >
                <n-switch v-model:value="form.isEnabled" />
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

import type { FormInst, FormRules } from "naive-ui";

import {
  type ScheduleDTO,
  type ScheduleFormDTO,
  type ScheduleFormErrorsDTO,
} from "@/app/modules/Schedule/types/Schedule.types";

import {
  _getScheduleInitValues,
  _getScheduleRules,
} from "@/app/modules/Schedule/configs/form.configs";

import {
  _storeItem,
  _updateItem,
} from "@/app/modules/Schedule/services/schedule.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: ScheduleDTO | null;
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<ScheduleFormDTO>(_getScheduleInitValues());
const formErrors = ref<ScheduleFormErrorsDTO | null>(null);
const formRules = ref<FormRules>({ ..._getScheduleRules() });

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
        formErrors.value = response.data as ScheduleFormErrorsDTO;
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
  form.value = props.item ? { ...props.item } : _getScheduleInitValues();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
