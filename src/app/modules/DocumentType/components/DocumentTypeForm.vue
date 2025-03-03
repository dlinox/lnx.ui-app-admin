<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 500px"
      :title="item ? 'EDITAR TIPO DE DOCUMENTO' : 'NUEVO TIPO DE DOCUMENTO'"
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
  type DocumentTypeDTO,
  type DocumentTypeFormDTO,
  type DocumentTypeFormErrorsDTO,
} from "@/app/modules/DocumentType/types/DocumentType.types";

import {
  _getDocumentTypeInitValues,
  _getDocumentTypeRules,
} from "@/app/modules/DocumentType/configs/form.configs";

import {
  _storeItem,
  _updateItem,
} from "@/app/modules/DocumentType/services/documentType.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: DocumentTypeDTO | null;
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<DocumentTypeFormDTO>(_getDocumentTypeInitValues());
const formErrors = ref<DocumentTypeFormErrorsDTO | null>(null);
const formRules = ref<FormRules>({ ..._getDocumentTypeRules() });

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
        formErrors.value = response.data as DocumentTypeFormErrorsDTO;
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
  form.value = props.item ? { ...props.item } : _getDocumentTypeInitValues();
};

watch(showModal, (value) => {
  if (value) {
    formErrors.value = null;
    init();
  }
});
</script>
