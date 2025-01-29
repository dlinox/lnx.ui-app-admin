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
              path="areaId"
              label="Área"
              :feedback="formErrors?.areaId"
            >
              <n-select
                v-model:value="form.areaId"
                :options="selectables.areaItems"
                filterable
                :virtual-scroll="false"
                :status="formErrors?.areaId != undefined ? 'error' : ''"
                @on-update:value="
                  formErrors != null ? (formErrors.areaId = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="24" v-if="!form.isExtracurricular">
            <n-form-item
              path="moduleId"
              label="Modulo"
              :feedback="formErrors?.moduleId"
            >
              <n-select
                filterable
                :options="selectables.moduleItems"
                :virtual-scroll="false"
                v-model:value="form.moduleId"
                :status="formErrors?.moduleId != undefined ? 'error' : ''"
                @on-update:value="
                  formErrors != null ? (formErrors.moduleId = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-form-item
              path="order"
              label="Orden"
              :feedback="formErrors?.order"
            >
              <n-input-number
                style="width: 100%"
                clearable
                v-model:value="form.order"
                :status="formErrors?.order != undefined ? 'error' : ''"
                @input="
                  formErrors != null ? (formErrors.order = null) : () => {}
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
                <n-switch
                  v-model:value="form.isExtracurricular"
                  @update:value="form.moduleId = null"
                />
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
import type { FormInst } from "naive-ui";
import { ref, computed, watch, inject, type Ref } from "vue";
import {
  type CurriculumDTO,
  type CurriculumModuleDTO,
  type CurriculumModuleFormDTO,
  type CurriculumModuleFormErrorsDTO,
} from "@/app/modules/Curriculum/types/Curriculum.types";

import {
  _getCurriculumModuleInitValues,
  _getCurriculumModuleRules,
} from "@/app/modules/Curriculum/configs/form.configs";

import {
  _storeItem,
  _updateItem,
  _getItemById,
} from "@/app/modules/Curriculum/services/curriculumModule.services";

const curriculum = inject<Ref<CurriculumDTO | undefined>>("curriculum");

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: CurriculumModuleDTO | null;
  modelValue: boolean;
  selectables: any;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<CurriculumModuleFormDTO>(_getCurriculumModuleInitValues());
const formErrors = ref<CurriculumModuleFormErrorsDTO | null>(null);
const formRules = ref<any>({ ..._getCurriculumModuleRules() });

const handleSubmit = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();

    let response = null;
    if (valid) {
      loading.value = true;
      form.value.curriculumId = curriculum!.value!.id;
      if (form.value.id) {
        response = await _updateItem(form.value);
      } else {
        response = await _storeItem(form.value);
      }
      if (!response.status) {
        formErrors.value = response.data as CurriculumModuleFormErrorsDTO;
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

const getItemForm = async () => {
  if (props.item?.id) {
    form.value = await _getItemById(props.item.id);
  } else {
    form.value = _getCurriculumModuleInitValues();
  }
};

const init = async () => {
  await getItemForm();
  form.value.curriculumId = curriculum!.value!.id;
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
