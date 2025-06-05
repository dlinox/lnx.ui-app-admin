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
            <n-form-item path="studentId" label="Estudiante">
              <n-select
                placeholder="Seleccione un estudiante"
                v-model:value="form.studentId"
                :options="studentOptions"
                :virtual-scroll="false"
                @search="debouncedSearchStudent"
                @update:value="getModuleOptions"
                remote
                filterable
                clearable
              />
            </n-form-item>
          </n-col>

          <n-col span="24">
            <n-form-item path="moduleId" label="Módulo">
              <n-select
                placeholder="Seleccione un módulo"
                v-model:value="form.moduleId"
                :options="moduleOptions"
                :virtual-scroll="false"
                clearable
                filterable
                @update:value="getCourseRecognitionOptions"
              />
            </n-form-item>
          </n-col>

          <n-col span="24">
            <n-form-item path="courseRecognitionId" label="Curso origen">
              <n-select
                placeholder="Seleccione un curso"
                v-model:value="form.courseRecognitionId"
                :options="courseRecognitionOptions"
                :virtual-scroll="false"
                clearable
                @update:modelValue="() => {}"
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-form-item
              path="courseId"
              label="	Curso convalidado -  Especial / Extracurricular"
            >
              <n-select
                placeholder="Seleccione un curso"
                v-model:value="form.courseId"
                :options="courseOptions"
                :virtual-scroll="false"
                clearable
                @update:modelValue="() => {}"
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
            >Guardar</n-button
          >
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import debounce from "@/core/utils/debounce.utils";

import type { FormInst, SelectOption } from "naive-ui";

import { __searchForSelect } from "@/app/modules/Student/services/student.services";

import {
  _getModuleEnrollmentsForSelect,
  _getCourseByModuleForSelect,
  _getCourseExtracurricularsForSelect,
  _storeItem,
  _updateItem,
} from "@/app/modules/Recognition/services/recognition.services";

import { __getItemsByModuleForSelect } from "@/app/modules/Course/services/course.services";

import {
  type RecognitionDTO,
  type RecognitionFormDTO,
  type RecognitionFormErrorsDTO,
} from "@/app/modules/Recognition/types/Recognition.types";

import {
  _getFormInitValues,
  _getFormRules,
} from "@/app/modules/Recognition/components/Form/config";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: RecognitionDTO | null;
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<RecognitionFormDTO>({ ..._getFormInitValues() });
const formErrors = ref<RecognitionFormErrorsDTO | null>(null);
const formRules = ref<any>({ ..._getFormRules() });

const studentOptions = ref<SelectOption[]>([]);
const moduleOptions = ref<SelectOption[]>([]);
const courseOptions = ref<SelectOption[]>([]);
const courseRecognitionOptions = ref<SelectOption[]>([]);

const searchStudent = async (search: string) => {
  console.log(search);
  if (search) {
    const response = await __searchForSelect({ search });
    studentOptions.value = response;
  } else {
    studentOptions.value = [];
  }
};

const getCourseExtracurricularsForSelect = async (studentId: number) => {
  courseOptions.value = await _getCourseExtracurricularsForSelect(studentId);
};

const getModuleOptions = async () => {
  form.value.moduleId = null;
  form.value.courseRecognitionId = null;
  form.value.courseId = null;

  if (!form.value.studentId) {
    moduleOptions.value = [];
    courseOptions.value = [];
    courseRecognitionOptions.value = [];
    return;
  }
  moduleOptions.value = await _getModuleEnrollmentsForSelect(
    form.value.studentId
  );

  await getCourseExtracurricularsForSelect(form.value.studentId);
};

const getCourseRecognitionOptions = async () => {
  if (!form.value.moduleId) {
    courseRecognitionOptions.value = [];
    return;
  }
  courseRecognitionOptions.value = await _getCourseByModuleForSelect({
    moduleId: form.value.moduleId,
    studentId: form.value.studentId,
  });
};

const debouncedSearchStudent = debounce((search) => {
  searchStudent(search);
}, 400);

const handleSubmit = async () => {
  formErrors.value = null;
  if (formRef.value) {
    const valid = await formRef.value.validate();

    let response = null;
    if (valid) {
      loading.value = true;

      response = await _storeItem(form.value);

      if (!response.status) {
        formErrors.value = response.data as RecognitionFormErrorsDTO;
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

const initForm = async () => {
  console.log("Inicializando formulario");
  form.value = { ..._getFormInitValues() };
};

watch(showModal, (value) => {
  if (value) {
    initForm();
  }
});
</script>
