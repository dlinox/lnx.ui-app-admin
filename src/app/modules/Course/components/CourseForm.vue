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
          <n-col :span="screenSize === 'sm' ? 12 : 20">
            <n-form-item
              path="name"
              label="Nombre"
              :feedback="formErrors?.name"
            >
              <n-input
                v-model:value="form.name"
                :status="formErrors?.name != undefined ? 'error' : ''"
                @update:value="
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
                v-model:value="form.curriculumId"
                :options="curriculumOptions"
                filterable
                clearable
                :virtual-scroll="false"
                :status="formErrors?.curriculumId != undefined ? 'error' : ''"
                @update:value="onChangeCurriculum(false)"
              />
            </n-form-item>
          </n-col>
          <n-col :span="screenSize === 'sm' ? 24 : 12">
            <n-form-item
              path="areaId"
              label="Área"
              :feedback="formErrors?.areaId"
            >
              <n-select
                v-model:value="form.areaId"
                :options="areaOptions"
                :disabled="form.curriculumId == null"
                filterable
                clearable
                :virtual-scroll="false"
                :status="formErrors?.areaId != undefined ? 'error' : ''"
                @update:value="
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
                :options="moduleOptions"
                :disabled="form.curriculumId == null"
                filterable
                clearable
                :virtual-scroll="false"
                :status="formErrors?.moduleId != undefined ? 'error' : ''"
                @update:value="
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

          <n-col :span="screenSize === 'sm' ? 12 : 4">
            <n-form-item
              path="units"
              label="Unidad"
              :feedback="formErrors?.units"
            >
              <n-input-number
                style="width: 100%"
                clearable
                v-model:value="form.units"
                :status="formErrors?.units != undefined ? 'error' : ''"
                @input="
                  formErrors != null ? (formErrors.units = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 12 : 6">
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
          <n-col :span="screenSize === 'sm' ? 12 : 6">
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
                :options="courseOptions"
                :disabled="form.curriculumId == null"
                placeholder="Seleccione un curso"
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
import { ref, computed, watch } from "vue";
import {
  type CourseDTO,
  type CourseFormDTO,
  type CourseFormErrorsDTO,
} from "@/app/modules/Course/types/Course.types";

import {
  _getCourseInitValues,
  _getCourseRules,
} from "@/app/modules/Course/configs/form.configs";

import {
  _storeItem,
  _updateItem,
  _getItemById,
  __getCoursesForSelect,
} from "@/app/modules/Course/services/course.services";

import useBreakpoints from "@/core/composable/useBreakpoints";

import { __getAreasForSelect } from "@/app/modules/Area/services/area.services";
import { __getModulesForSelect } from "@/app/modules/Module/services/module.services";

const { screenSize } = useBreakpoints();

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: CourseDTO | null;
  modelValue: boolean;
  curriculumOptions: any;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<CourseFormDTO>(_getCourseInitValues());
const formErrors = ref<CourseFormErrorsDTO | null>(null);
const formRules = ref<any>({ ..._getCourseRules() });

const areaOptions = ref<any[]>([]);
const moduleOptions = ref<any[]>([]);
const courseOptions = ref<any[]>([]);

const getCourseOptions = async () => {
  courseOptions.value = await __getCoursesForSelect({
    curriculumId: form.value.curriculumId,
  });
};
const getAreaOptions = async () => {
  areaOptions.value = await __getAreasForSelect({
    curriculumId: form.value.curriculumId,
  });
};
const getModuleOptions = async () => {
  moduleOptions.value = await __getModulesForSelect({
    curriculumId: form.value.curriculumId,
  });
};

const onChangeCurriculum = async (init = false) => {
  console.log("onChangeCurriculum", init);
  if (formErrors.value) {
    formErrors.value.curriculumId = null;
  }
  if (!init) {
    form.value.areaId = null;
    form.value.moduleId = null;
    form.value.preRequisiteId = null;
  }

  await getAreaOptions();
  await getModuleOptions();
  await getCourseOptions();
};

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
        formErrors.value = response.data as CourseFormErrorsDTO;
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
    await onChangeCurriculum(true);
  } else {
    form.value = _getCourseInitValues();
  }
};

const init = async () => {
  await getItemForm();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
