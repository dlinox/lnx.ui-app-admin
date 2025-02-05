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
            <n-form-item
              path="startTime"
              label="Hora de Inicio"
              :feedback="formErrors?.startTime"
            >
              <n-input
                :status="formErrors?.startTime != undefined ? 'error' : ''"
                v-model:value="form.startTime"
                @input="
                  formErrors != null ? (formErrors.startTime = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="12">
            <n-form-item
              path="endTime"
              label="Hora de Fin"
              :feedback="formErrors?.endTime"
            >
              <n-input
                :status="formErrors?.endTime != undefined ? 'error' : ''"
                v-model:value="form.endTime"
                @input="
                  formErrors != null ? (formErrors.endTime = null) : () => {}
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
  type SessionTimeDTO,
  type SessionTimeFormDTO,
  type SessionTimeFormErrorsDTO,
} from "@/app/modules/SessionTime/types/SessionTime.types";

import {
  _getSessionTimeInitValues,
  _getSessionTimeRules,
} from "@/app/modules/SessionTime/configs/form.configs";

import {
  _storeItem,
  _updateItem,
} from "@/app/modules/SessionTime/services/sessionTime.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: SessionTimeDTO | null;
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<SessionTimeFormDTO>(_getSessionTimeInitValues());
const formErrors = ref<SessionTimeFormErrorsDTO | null>(null);
const formRules = ref<FormRules>({ ..._getSessionTimeRules() });

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
        formErrors.value = response.data as SessionTimeFormErrorsDTO;
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
  form.value = props.item ? { ...props.item } : _getSessionTimeInitValues();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
