<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
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
          <n-col span="24">
            <n-form-item
              path="studentTypeId"
              label="Tipo de estudiante"
              :feedback="formErrors?.studentTypeId"
            >
              <n-select
                v-model:value="form.studentTypeId"
                :options="studentTypesItems"
                :status="formErrors?.studentTypeId != undefined ? 'error' : ''"
                filterable
                :virtual-scroll="false"
                clearable
                @update:modelValue="
                  formErrors != null
                    ? (formErrors.studentTypeId = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-form-item
              path="moduleId"
              label="Módulo"
              :feedback="formErrors?.moduleId"
            >
              <n-select
                v-model:value="form.moduleId"
                :options="modulesItems"
                :status="formErrors?.moduleId != undefined ? 'error' : ''"
                filterable
                :virtual-scroll="false"
                clearable
                @update:modelValue="
                  formErrors != null ? (formErrors.moduleId = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="8">
            <n-form-item
              path="enrollmentPrice"
              label="Precio de matrícula"
              :feedback="formErrors?.price"
            >
              <n-input-number
                v-model:value="form.price"
                :status="formErrors?.price != undefined ? 'error' : ''"
                @update:modelValue="
                  formErrors != null ? (formErrors.price = null) : () => {}
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

import type { FormInst, FormRules, SelectOption } from "naive-ui";

import {
  type ModulePriceDataTableItemDTO,
  type ModulePriceFormErrorsDTO,
} from "@/app/modules/ModulePrice/types/ModulePrice.types";

import {
  _getPriceInitValues,
  _getPriceRules,
} from "@/app/modules/ModulePrice/configs/form.configs";

import {
  _storeItem,
  _updateItem,
} from "@/app/modules/ModulePrice/services/price.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: ModulePriceDataTableItemDTO | null;
  modelValue: boolean;
  studentTypesItems: SelectOption[];
  modulesItems: SelectOption[];
  curriculumId?: number;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<ModulePriceDataTableItemDTO>(_getPriceInitValues());
const formErrors = ref<ModulePriceFormErrorsDTO | null>(null);
const formRules = ref<FormRules>({ ..._getPriceRules() });

const handleSubmit = async () => {
  formErrors.value = null;
  if (formRef.value) {
    const valid = await formRef.value.validate();

    let response = null;
    if (valid) {
      loading.value = true;
      if (form.value.id) {
        response = await _updateItem(form.value);
      } else {
        form.value.curriculumId = props.curriculumId!;
        response = await _storeItem(form.value);
      }
      if (!response.status) {
        formErrors.value = response.data as ModulePriceFormErrorsDTO;
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
  form.value = props.item ? { ...props.item } : _getPriceInitValues();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
