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
              path="name"
              label="Nombre"
              :feedback="formErrors?.name"
            >
              <n-input
                :status="formErrors?.name != undefined ? 'error' : ''"
                v-model:value="form.name"
                @input="
                  formErrors != null ? (formErrors.name = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-form-item
              path="deviceCount"
              label="Cantidad de dispositivos"
              :feedback="formErrors?.deviceCount"
            >
              <n-input-number
                class="w-full"
                :status="formErrors?.deviceCount != undefined ? 'error' : ''"
                v-model:value="form.deviceCount"
                @input="
                  formErrors != null
                    ? (formErrors.deviceCount = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col span="24">
            <n-form-item
              path="deviceDetail"
              label="Detalle de dispositivos"
              :feedback="formErrors?.deviceDetail"
            >
              <n-input
                :status="formErrors?.deviceDetail != undefined ? 'error' : ''"
                v-model:value="form.deviceDetail"
                @input="
                  formErrors != null
                    ? (formErrors.deviceDetail = null)
                    : () => {}
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
import type { FormInst, FormRules } from "naive-ui";
import { ref, computed, watch } from "vue";
import {
  type LaboratoryDTO,
  type LaboratoryFormDTO,
  type LaboratoryFormErrorsDTO,
} from "@/app/modules/Laboratory/types/Laboratory.types";

import {
  _getLaboratoryInitValues,
  _getLaboratoryRules,
} from "@/app/modules/Laboratory/configs/form.configs";

import { _saveItem } from "@/app/modules/Laboratory/services/laboratory.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: LaboratoryDTO | null;
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<LaboratoryFormDTO>(_getLaboratoryInitValues());
const formErrors = ref<LaboratoryFormErrorsDTO | null>(null);
const formRules = ref<FormRules>({ ..._getLaboratoryRules() });

const handleSubmit = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();

    let response = null;
    if (valid) {
      loading.value = true;
      response = await _saveItem(form.value);
      if (!response.status) {
        formErrors.value = response.data as LaboratoryFormErrorsDTO;
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
  form.value = props.item ? { ...props.item } : _getLaboratoryInitValues();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
