<template>
  <n-modal
    v-model:show="showModal"
    draggable
    :title="item ? 'EDITAR REGISTRO' : 'NUEVO REGISTRO'"
    preset="card"
    style="width: 1024px"
    :segmented="{
      content: true,
      footer: true,
    }"
    size="small"
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
        <n-col :span="screenSize === 'sm' ? 12 : 8">
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
        <n-col :span="screenSize === 'sm' ? 12 : 8">
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

        <n-col :span="screenSize === 'sm' ? 12 : 8">
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
          <n-form-item path="name" label="Nombre" :feedback="formErrors?.name">
            <n-input
              v-upper-case
              :status="formErrors?.name != undefined ? 'error' : ''"
              v-model:value="form.name"
              @input="formErrors != null ? (formErrors.name = null) : () => {}"
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
              v-upper-case
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
              v-upper-case
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
          <n-form-item
            path="email"
            :feedback="formErrors?.email"
            label="Correo Electrónico"
          >
            <n-input
              :status="formErrors?.email != undefined ? 'error' : ''"
              @input="formErrors != null ? (formErrors.email = null) : () => {}"
              v-model:value="form.email"
            />
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
    <n-alert
      v-if="associatedItems"
      :show-icon="false"
      class="mt-4"
      type="error"
    >
      <span class="text-red-500">
        <strong>Atención:</strong> Si guarda este registro, los siguientes
        registros serán eliminados y sus datos serán asociados a este registro.
      </span>

      <ul class="list-disc pl-5 mt-2">
        <li v-for="item in associatedItems" :key="item.id">
          {{ item.code }} - {{ item.name }}
        </li>
      </ul>
    </n-alert>
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
          @click="
            associatedItems && associatedItems.length > 0
              ? dialog.warning({
                  title: 'Confirmar',
                  content:
                    '¿Está seguro que desea eliminar los registros asociados?',
                  positiveText: 'Guardar y Asociar',
                  negativeText: 'Cancelar',
                  closable: false,
                  showIcon: true,
                  negativeButtonProps: {
                    size: 'large',
                  },
                  positiveButtonProps: {
                    size: 'large',
                    type: 'error',
                  },
                  onPositiveClick: handleAssociatedSubmit,
                })
              : handleSubmit()
          "
          :loading="loading"
          >Guardar</n-button
        >
      </n-space>
    </template>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useDialog } from "naive-ui";
import type { FormInst } from "naive-ui";

import { GENDERS_CONST } from "@/core/constants/genders.constans";
import useBreakpoints from "@/core/composables/useBreakpoints";

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
  _loadForm,
  _associatedItem,
} from "@/app/modules/Student/services/student.services";

const emit = defineEmits(["update:modelValue", "success"]);
const dialog = useDialog();
const props = defineProps<{
  item: StudentDataTableItemDTO | null;
  associatedItems?: StudentDataTableItemDTO[] | null;
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

const handleAssociatedSubmit = async () => {
  if (formRef.value) {
    const valid = await formRef.value.validate();
    if (valid && props.associatedItems && props.associatedItems.length > 0) {
      loading.value = true;
      const response = await _associatedItem({
        ...form.value,
        associatedItems: props.associatedItems.map((item) => item.id),
      });
      if (!response.status) {
        formErrors.value = response.data as StudentFormErrorsDTO;
        console.error("Error al asociar los registros:", response.data);
      } else {
        console.log("Registros asociados correctamente:", response.data);
        emit("success", form.value);
        showModal.value = false;
      }
      loading.value = false;
    } else {
      console.warn("No hay registros asociados para procesar.");
    }
  }
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
    form.value = await _loadForm(props.item.id);
  } else {
    form.value = _getStudentFormInitValues();
  }
  return form.value;
};

const init = async () => {
  console.log("Inicializando formulario");
  formErrors.value = null;
  await getItemForm();
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
