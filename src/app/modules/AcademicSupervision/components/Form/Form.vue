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
          <n-col :span="24">
            <n-form-item
              path="groupId"
              label="Grupo - Docente"
              :show-require-mark="true"
              :feedback="formErrors?.groupId"
            >
              <n-select
                v-model:value="form.groupId"
                :options="groupOptions"
                placeholder="Seleccione un grupo"
                :clearable="true"
                :loading="loading"
                :disabled="loading"
              />
            </n-form-item>
          </n-col>

          <n-col :span="24">
            <n-form-item
              path="type"
              label="Tipo"
              :show-require-mark="true"
              :feedback="formErrors?.type"
            >
              <n-select
                v-model:value="form.type"
                :options="[
                  {
                    label: 'TARDE',
                    value: 'TARDE',
                  },
                  {
                    label: 'FALTA',
                    value: 'FALTA',
                  },
                  {
                    label: 'OTROS',
                    value: 'OTROS',
                  },
                ]"
                placeholder="Seleccione el tipo"
                :clearable="true"
              ></n-select>
            </n-form-item>
          </n-col>
          <n-col :span="24">
            <n-form-item
              path="observations"
              label="Observaciones"
              :show-require-mark="true"
              :feedback="formErrors?.observations"
            >
              <n-input
                v-model:value="form.observations"
                type="textarea"
                placeholder="Ingrese las observaciones"
                :disabled="loading"
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
          >
            Guardar
          </n-button>
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import type { FormInst } from "naive-ui";

import {
  type AcademicSupervisionDTO,
  type AcademicSupervisionFormErrorsDTO,
} from "@/app/modules/AcademicSupervision/types/AcademicSupervision.types";

import {
  _getAcademicSupervisionInitValues,
  _getAcademicSupervisionRules,
} from "@/app/modules/AcademicSupervision/components/Form/configs";

import {
  _saveItem,
  _getActiveGroups,
} from "@/app/modules/AcademicSupervision/services/academicSupervision.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: AcademicSupervisionDTO | null;
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<any>(_getAcademicSupervisionInitValues());
const formErrors = ref<AcademicSupervisionFormErrorsDTO | null>(null);
const formRules = computed(() => ({
  ..._getAcademicSupervisionRules(),
}));

const groupOptions = ref<any[]>([]);

const handleSubmit = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();
    let response = null;
    if (valid) {
      loading.value = true;
      response = await _saveItem(form.value);
      if (!response.status) {
        formErrors.value = response.data as AcademicSupervisionFormErrorsDTO;
      } else {
        emit("success");
        showModal.value = false;
      }
    }
  }
  loading.value = false;
};

const init = async () => {
  form.value = props.item
    ? {
        ...props.item,
        groupId: props.item.groupId,
      }
    : _getAcademicSupervisionInitValues();

  groupOptions.value = await _getActiveGroups();
};

watch(showModal, (value) => {
  if (value) {
    formErrors.value = null;
    init();
  }
});
</script>
