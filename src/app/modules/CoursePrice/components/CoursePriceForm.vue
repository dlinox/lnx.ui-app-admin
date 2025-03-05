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
              path="courseId"
              label="Curso"
              :feedback="formErrors?.courseId"
            >
              <n-select
                v-model:value="form.courseId"
                :options="coursesItems"
                :status="formErrors?.courseId != undefined ? 'error' : ''"
                filterable
                :virtual-scroll="false"
                clearable
                @update:modelValue="
                  formErrors != null ? (formErrors.courseId = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col span="8">
            <n-form-item
              path="presentialPrice"
              label="Precio presencial"
              :feedback="formErrors?.presentialPrice"
            >
              <n-input-number
                v-model:value="form.presentialPrice"
                :status="
                  formErrors?.presentialPrice != undefined ? 'error' : ''
                "
                @update:modelValue="
                  formErrors != null
                    ? (formErrors.presentialPrice = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col span="8">
            <n-form-item
              path="virtualPrice"
              label="Precio virtual"
              :feedback="formErrors?.virtualPrice"
            >
              <n-input-number
                v-model:value="form.virtualPrice"
                :status="formErrors?.virtualPrice != undefined ? 'error' : ''"
                @update:modelValue="
                  formErrors != null
                    ? (formErrors.virtualPrice = null)
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
import { ref, computed, watch } from "vue";

import type { FormInst, FormRules, SelectOption } from "naive-ui";

import {
  type CoursePriceDataTableItemDTO,
  type CoursePriceFormErrorsDTO,
} from "@/app/modules/CoursePrice/types/CoursePrice.types";

import {
  _getPriceInitValues,
  _getPriceRules,
} from "@/app/modules/CoursePrice/configs/form.configs";

import {
  _storeItem,
  _updateItem,
} from "@/app/modules/CoursePrice/services/price.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: CoursePriceDataTableItemDTO | null;
  modelValue: boolean;
  studentTypesItems: SelectOption[];
  coursesItems: SelectOption[];
  curriculumId?: number;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<CoursePriceDataTableItemDTO>(_getPriceInitValues());
const formErrors = ref<CoursePriceFormErrorsDTO | null>(null);
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
        formErrors.value = response.data as CoursePriceFormErrorsDTO;
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
