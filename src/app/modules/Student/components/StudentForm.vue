<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 1024px"
      :title="item ? 'EDITAR REGISTRO' : 'NUEVO REGISTRO'"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <n-form
        ref="formRef"
        :model="form"
        :rules="formRules"
        size="large"
        @submit="handleSubmit"
      >
        <n-row :gutter="16">
          <n-col :span="screenSize === 'sm' ? 12 : 6">
            <n-form-item path="studentTypeId" label="Tipo de Estudiante">
              <n-select
                v-model:value="form.studentTypeId"
                clearable
                placeholder="Seleccione"
                :virtual-scroll="false"
                :options="selectables.studentTypesItems"
              />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 12 : 6">
            <n-form-item
              path="code"
              label="Código"
              :feedback="formErrors?.code"
            >
              <n-input
                v-model:value="form.code"
                :status="formErrors?.code != undefined ? 'error' : ''"
                @input="
                  formErrors != null ? (formErrors.code = null) : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 12 : 6">
            <n-form-item path="documentTypeId" label="Tipo de Documento">
              <n-select
                v-model:value="form.documentTypeId"
                clearable
                :virtual-scroll="false"
                placeholder="Seleccione"
                :options="selectables.documentTypesItems"
              />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 12 : 6">
            <n-form-item
              path="documentNumber"
              label="Número de Documento"
              :feedback="formErrors?.documentNumber"
            >
              <n-input
                v-model:value="form.documentNumber"
                :status="formErrors?.documentNumber != undefined ? 'error' : ''"
                @input="
                  formErrors != null
                    ? (formErrors.documentNumber = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 24 : 8">
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

          <n-col :span="screenSize === 'sm' ? 12 : 8">
            <n-form-item
              path="lastNameFather"
              label="Apellido Paterno"
              :feedback="formErrors?.lastNameFather"
            >
              <n-input
                :status="formErrors?.lastNameFather != undefined ? 'error' : ''"
                v-model:value="form.lastNameFather"
                @input="
                  formErrors != null
                    ? (formErrors.lastNameFather = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 12 : 8">
            <n-form-item
              path="lastNameMother"
              label="Apellido Materno"
              :feedback="formErrors?.lastNameMother"
            >
              <n-input
                :status="formErrors?.lastNameMother != undefined ? 'error' : ''"
                v-model:value="form.lastNameMother"
                @input="
                  formErrors != null
                    ? (formErrors.lastNameMother = null)
                    : () => {}
                "
              />
            </n-form-item>
          </n-col>
          <n-col :span="screenSize === 'sm' ? 12 : 6">
            <n-form-item path="gender" label="Genero">
              <n-select
                v-model:value="form.gender"
                clearable
                placeholder="Seleccione"
                :virtual-scroll="false"
                :options="GENDERS_CONST"
              />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 12 : 6">
            <n-form-item path="birthDate" label="Fecha de Nacimiento">
              <n-input
                v-model:value="form.dateOfBirth"
                type="date"
                clearable
                placeholder=""
              />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 12 : 6">
            <n-form-item path="email" label="Correo Electrónico">
              <n-input v-model:value="form.email" />
            </n-form-item>
          </n-col>

          <n-col :span="screenSize === 'sm' ? 12 : 6">
            <n-form-item path="phone" label="Teléfono">
              <n-input v-model:value="form.phone" />
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

import type { FormInst } from "naive-ui";

import { GENDERS_CONST } from "@/core/constants/genders.constans";
import useBreakpoints from "@/core/composable/useBreakpoints";

import {
  type StudentDataTableItemDTO,
  type StudentFormDTO,
  type StudentFormErrorsDTO,
} from "@/app/modules/Student/types/Student.types";

import {
  _getStudentFormInitValues,
  _getStudentFormRules,
} from "@/app/modules/Student/configs/form.configs";

import {
  _storeItem,
  _updateItem,
  _getItemById,
} from "@/app/modules/Student/services/student.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: StudentDataTableItemDTO | null;
  modelValue: boolean;
  selectables: any;
}>();

const { screenSize } = useBreakpoints();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);

const form = ref<StudentFormDTO>(_getStudentFormInitValues());
const formErrors = ref<StudentFormErrorsDTO | null>(null);
const formRules = ref<any>({ ..._getStudentFormRules() });

const handleSubmit = async () => {
  console.log("formRef", form.value);

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
        formErrors.value = response.data as StudentFormErrorsDTO;
      } else {
        emit("success", form.value);
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
    form.value = _getStudentFormInitValues();
  }
  return form.value;
};

const init = async () => {
  console.log("Inicializando formulario");
  await getItemForm();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
