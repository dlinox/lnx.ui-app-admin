<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      :title="`${item?.modality} - Gestionar grupo`"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
      :segmented="{
        content: true,
        footer: true,
      }"
    >
      <n-form ref="formRef" :model="form">
        <n-row :gutter="16">
          <n-col :span="24">
            <n-form-item label="Docente" path="teacherId">
              <n-select
                v-model:value="form.teacherId"
                placeholder="Seleccionar Docente"
                filterable
                :options="teacherOptions"
                clearable
                remote
                :virtual-scroll="false"
              />
            </n-form-item>
          </n-col>
          <n-col :span="24">
            <n-form-item label="Laboratorio" path="laboratoryId">
              <n-select
                v-model:value="form.laboratoryId"
                placeholder="Seleccionar Laboratorio"
                filterable
                :options="laboratoryOptions"
                clearable
                remote
                :virtual-scroll="false"
              />
            </n-form-item>
          </n-col>
          <n-col :span="24">
            <n-form-item label="Estado" path="status">
              <n-select
                v-model:value="form.status"
                placeholder="Seleccionar Estado"
                :options="[
                  {
                    label: 'ABIERTO',
                    value: 'ABIERTO',
                  },
                  {
                    label: 'CERRADO',
                    value: 'CERRADO',
                  },
                  {
                    label: 'CANCELADO',
                    value: 'CANCELADO',
                  },
                ]"
                :virtual-scroll="false"
              />
            </n-form-item>
          </n-col>
          <n-col :span="24">
            <n-alert
              :type="form.status === 'CANCELADO' ? 'error' : 'info'"
              show-icon
              :title="`GRUPO ${form.status}`"
              :closable="false"
            >
              {{
                form.status === "CERRADO"
                  ? "Las inscripciones virtuales para este grupo están cerradas, pero aún puede realizarse la matrícula de manera presencial."
                  : form.status === "CANCELADO"
                  ? "Los estudiantes no podrán realizar la matrícula de manera presencial ni virtual, y los estudiantes que ya están matriculados serán desvinculados del grupo, sus inscripciones pasarán a un estado de 'CANCELADO'."
                  : "Las inscripciones estan habilitada para todos los estudiantes, tanto virtual como presencialmente."
              }}
            </n-alert>
          </n-col>
        </n-row>
      </n-form>
      <n-space justify="end" class="p-3">
        <n-button
          @click="showModalStudents = true"
          :loading="loading"
          :render-icon="renderIcon('people')"
        >
          Estudiantes MATRICULADOS
        </n-button>
      </n-space>

      <template #footer>
        <n-flex justify="end">
          <n-button @click="() => (showModal = false)">Cancelar</n-button>
          <n-button
            type="primary"
            @click="
              form.status === 'CANCELADO' ? comfirmationSubmit() : submit()
            "
            :loading="loading"
          >
            Guardar
          </n-button>
        </n-flex>
      </template>
    </n-card>
  </n-modal>

  <EnrolledStudents v-model="showModalStudents" :groupId="props.item.id" />
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";

import { _getGroupInitValues } from "@/app/modules/Group/configs/groupForm.confings";

import { __searchTeachers } from "@/app/shared/services/selectables.services";

import { _saveGroupStatus } from "@/app/modules/Group/services/group.services";

import {
  _getTeacherOptions,
  _getLaboratoryOptions,
} from "@/app/modules/Group/services/group.services";

import { _getStudents } from "@/app/modules/Group/services/enrollment-group.services";

import { useDialog } from "naive-ui";
import { renderIcon } from "@/core/utils/icon.utils";
import EnrolledStudents from "@/app/modules/Group/components/EnrolledStudents/EnrolledStudents.vue";

const dialog = useDialog();

const emit = defineEmits(["update:modelValue", "success"]);

const teacherOptions = ref<any[]>([]);
const laboratoryOptions = ref<any[]>([]);

const props = defineProps<{
  modelValue: boolean;
  item: any;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const showModalStudents = ref<boolean>(false);

const loading = ref<boolean>(false);

const form = ref<any>({
  id: null,
  teacherId: null,
  laboratoryId: null,
  status: "ABIERTO",
});

const comfirmationSubmit = async () => {
  dialog.warning({
    title: "Confirmar",
    content:
      "¿Está seguro que desea CANCELAR este registro?, No podrá revertir esta acción.",
    positiveText: "Confirmar",
    negativeText: "Cancelar",
    closable: false,
    showIcon: false,
    negativeButtonProps: {
      type: "tertiary",
      size: "large",
    },
    positiveButtonProps: {
      size: "large",
      type: "error",
    },
    onPositiveClick: () => {
      submit();
    },
  });
};

const submit = async () => {
  loading.value = true;
  form.value.id = props.item.id;

  const response = await _saveGroupStatus(form.value);
  if (response) {
    emit("success");
    showModal.value = false;
  }
  loading.value = false;
};

const initForm = async () => {
  console.log("Inicializando formulario");
  form.value.teacherId = props.item.teacherId;
  form.value.laboratoryId = props.item.laboratoryId;
  form.value.status = props.item.status;
  teacherOptions.value = await _getTeacherOptions();
  let laboratoryTemp = await _getLaboratoryOptions();
  laboratoryOptions.value = laboratoryTemp
    .filter((item) => {
      const tipo = item.label.split("-")[0]; // LABORATORIO o VIRTUAL
      if (props.item.modality === "PRESENCIAL") {
        return tipo === "LABORATORIO";
      } else if (props.item.modality === "VIRTUAL") {
        return tipo === "VIRTUAL";
      }
      return false;
    })
    .map((item) => ({
      value: item.value,
      label: item.label.split("-")[1].trim(),
    }));
};

watch(showModal, async (value) => {
  if (value) {
    await initForm();
  }
});
</script>
