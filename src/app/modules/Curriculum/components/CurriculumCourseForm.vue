<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 800px"
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
          <n-col :span="screenSize === 'sm' ? 24 : 12">
            <n-form-item
              path="areaId"
              label="Área"
              :feedback="formErrors?.areaId"
            >
              <n-select
                v-model:value="form.areaId"
                :options="selectables.areaItems"
                filterable
                clearable
                :virtual-scroll="false"
                :status="formErrors?.areaId != undefined ? 'error' : ''"
                @on-update:value="
                  formErrors != null ? (formErrors.areaId = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col :span="screenSize === 'sm' ? 24 : 12">
            <n-form-item
              path="moduleId"
              label="Módulo"
              :feedback="formErrors?.moduleId"
            >
              <n-select
                v-model:value="form.moduleId"
                :options="selectables.moduleItems"
                filterable
                clearable
                :virtual-scroll="false"
                :status="formErrors?.moduleId != undefined ? 'error' : ''"
                @on-update:value="
                  formErrors != null ? (formErrors.moduleId = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col :span="screenSize === 'sm' ? 12 : 4">
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
          <n-col :span="screenSize === 'sm' ? 12 : 4">
            <n-form-item
              path="code"
              label="Código"
              :feedback="formErrors?.code"
            >
              <n-input
                v-model:value="form.code"
                :status="formErrors?.code != undefined ? 'error' : ''"
                @update:value="
                  formErrors != null ? (formErrors.code = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col :span="screenSize === 'sm' ? 24 : 16">
            <n-form-item
              path="courseId"
              label="Curso"
              :feedback="formErrors?.courseId"
            >
              <n-select
                filterable
                clearable
                :options="selectables.courseItems"
                :virtual-scroll="false"
                v-model:value="form.courseId"
                :status="formErrors?.courseId != undefined ? 'error' : ''"
                @update:value="
                  formErrors != null ? (formErrors.courseId = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col :span="screenSize === 'sm' ? 24 : 8">
            <n-form-item
              path="credits"
              label="Créditos"
              :feedback="formErrors?.credits"
            >
              <n-input-number
                style="width: 100%"
                clearable
                v-model:value="form.credits"
                :status="formErrors?.credits != undefined ? 'error' : ''"
                @input="
                  formErrors != null ? (formErrors.credits = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col :span="screenSize === 'sm' ? 24 : 8">
            <n-form-item
              path="hoursPractice"
              label="Horas Practicas"
              :feedback="formErrors?.hoursPractice"
            >
              <n-input-number
                style="width: 100%"
                clearable
                v-model:value="form.hoursPractice"
                :status="formErrors?.hoursPractice != undefined ? 'error' : ''"
                @input="
                  formErrors != null
                    ? (formErrors.hoursPractice = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col :span="screenSize === 'sm' ? 24 : 8">
            <n-form-item
              path="hoursTheory"
              label="Horas Teoricas"
              :feedback="formErrors?.hoursTheory"
            >
              <n-input-number
                style="width: 100%"
                clearable
                v-model:value="form.hoursTheory"
                :status="formErrors?.hoursTheory != undefined ? 'error' : ''"
                @input="
                  formErrors != null
                    ? (formErrors.hoursTheory = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 24 : 24">
            <n-form-item
              path="preRequisiteId"
              label="Pre-Requisito"
              :feedback="formErrors?.preRequisiteId"
            >
              <n-select
                clearable
                filterable
                :options="selectables.preRequisiteItems"
                :virtual-scroll="false"
                v-model:value="form.preRequisiteId"
                :status="formErrors?.preRequisiteId != undefined ? 'error' : ''"
                @update:value="
                  formErrors != null
                    ? (formErrors.preRequisiteId = null)
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
  type CurriculumCourseDataTableItemDTO,
  type CurriculumCourseFormDTO,
  type CurriculumCourseFormErrorsDTO,
  type CurriculumDTO,
} from "@/app/modules/Curriculum/types/Curriculum.types";

import {
  _getCurriculumCourseInitValues,
  _getCurriculumModuleCourseRules,
} from "@/app/modules/Curriculum/configs/form.configs";

import {
  _storeItem,
  _updateItem,
  _getItemById,
} from "@/app/modules/Curriculum/services/curriculumCourse.services";

import useBreakpoints from "@/core/composables/useBreakpoints";

const { screenSize } = useBreakpoints();

const curriculum = inject<Ref<CurriculumDTO | undefined>>("curriculum");

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: CurriculumCourseDataTableItemDTO | null;
  modelValue: boolean;
  selectables: any;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<CurriculumCourseFormDTO>(_getCurriculumCourseInitValues());
const formErrors = ref<CurriculumCourseFormErrorsDTO | null>(null);
const formRules = ref<any>({ ..._getCurriculumModuleCourseRules() });

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
        formErrors.value = response.data as CurriculumCourseFormErrorsDTO;
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
    form.value = _getCurriculumCourseInitValues();
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
