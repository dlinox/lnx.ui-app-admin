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
        <n-row gutter="12">
          <n-col span="24">
            <n-form-item
              path="curriculumId"
              label="Plan de estudios"
              :feedback="formErrors?.curriculumId"
            >
              <n-select
                clearable
                placeholder="Seleccione un plan de estudios"
                v-model:value="form.curriculumId"
                :options="curriculumOptions"
                :virtual-scroll="false"
                :status="formErrors?.curriculumId != undefined ? 'error' : ''"
                @input="
                  formErrors != null
                    ? (formErrors.curriculumId = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col span="12">
            <n-form-item
              path="code"
              label="Código"
              :feedback="formErrors?.code"
            >
              <n-input
                v-upper-case
                :status="formErrors?.code != undefined ? 'error' : ''"
                v-model:value="form.code"
                @input="
                  formErrors != null ? (formErrors.code = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="12">
            <n-form-item
              path="level"
              label="Nivel"
              :feedback="formErrors?.level"
            >
              <n-select
                clearable
                placeholder="Seleccione un nivel"
                v-model:value="form.level"
                :options="[
                  { label: 'I', value: 1 },
                  { label: 'II', value: 2 },
                  { label: 'III', value: 3 },
                  { label: 'IV', value: 4 },
                  { label: 'V', value: 5 },
                  { label: 'VI', value: 6 },
                  { label: 'VII', value: 7 },
                  { label: 'VIII', value: 8 },
                  { label: 'IX', value: 9 },
                  { label: 'X', value: 10 },
                  { label: 'XI', value: 11 },
                  { label: 'XII', value: 12 },
                  { label: 'XIII', value: 13 },
                  { label: 'XIV', value: 14 },
                  { label: 'XV', value: 15 },
                  { label: 'XVI', value: 16 },
                  { label: 'XVII', value: 17 },
                  { label: 'XVIII', value: 18 },
                  { label: 'XIX', value: 19 },
                  { label: 'XX', value: 20 },
                ]"
                :virtual-scroll="false"
                :status="formErrors?.level != undefined ? 'error' : ''"
                @input="
                  formErrors != null ? (formErrors.level = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
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
              path="description"
              label="Descripción"
              :feedback="formErrors?.description"
            >
              <n-input
                type="textarea"
                :status="formErrors?.description != undefined ? 'error' : ''"
                v-model:value="form.description"
                @input="
                  formErrors != null
                    ? (formErrors.description = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col span="24">
            <n-space justify="end">
              <n-form-item
                label-placement="left"
                label="¿Extracurricular?"
                path="isExtracurricular"
                :show-feedback="false"
              >
                <n-switch v-model:value="form.isExtracurricular" />
              </n-form-item>
            </n-space>
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
import type { FormInst, SelectOption } from "naive-ui";
import { ref, computed, watch } from "vue";
import {
  type ModuleDTO,
  type ModuleFormDTO,
  type ModuleFormErrorsDTO,
} from "@/app/modules/Module/types/Module.types";

import {
  _getModuleInitValues,
  _getModuleRules,
} from "@/app/modules/Module/configs/form.configs";

import {
  _storeItem,
  _updateItem,
} from "@/app/modules/Module/services/module.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: ModuleDTO | null;
  modelValue: boolean;
  curriculumOptions: SelectOption[];
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<ModuleFormDTO>(_getModuleInitValues());
const formErrors = ref<ModuleFormErrorsDTO | null>(null);
const formRules = ref<any>({ ..._getModuleRules() });

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
        formErrors.value = response.data as ModuleFormErrorsDTO;
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
  form.value = props.item ? { ...props.item } : _getModuleInitValues();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
