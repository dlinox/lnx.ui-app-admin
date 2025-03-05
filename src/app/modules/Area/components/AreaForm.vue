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
import type { SelectOption, FormInst } from "naive-ui";
import { ref, computed, watch } from "vue";
import {
  type AreaDTO,
  type AreaFormDTO,
  type AreaFormErrorsDTO,
} from "@/app/modules/Area/types/Area.types";

import {
  _getAreaInitValues,
  _getAreaRules,
} from "@/app/modules/Area/configs/form.configs";

import {
  _storeItem,
  _updateItem,
} from "@/app/modules/Area/services/area.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: AreaDTO | null;
  modelValue: boolean;
  curriculumOptions: SelectOption[];
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<AreaFormDTO>(_getAreaInitValues());
const formErrors = ref<AreaFormErrorsDTO | null>(null);
const formRules = ref<any>({ ..._getAreaRules() });

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
        formErrors.value = response.data as AreaFormErrorsDTO;
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
  form.value = props.item ? { ...props.item } : _getAreaInitValues();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
