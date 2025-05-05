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
      User="dialog"
      aria-modal="true"
    >
      <n-form ref="formRef" :model="form" :rules="formRules" size="large">
        <n-row>
          <n-col span="24" v-if="level === 'teacher'">
            <n-form-item
              label="Docente"
              path="modelId"
              :feedback="formErrors?.modelId"
            >
              <n-select
                :disabled="form.id ? true : false"
                v-model:value="form.modelId"
                :options="teacherOptions"
                filterable
                placeholder="Buscar docente"
                clearable
                remote
                :virtual-scroll="false"
                @search="searchTeachersDebounce"
                @update:value="onSelectedTeacher"
                :status="formErrors?.modelId != undefined ? 'error' : ''"
              />
            </n-form-item>
          </n-col>

          <n-col span="24" v-if="level === 'student'">
            <n-form-item
              label="Estudiante"
              path="modelId"
              :feedback="formErrors?.modelId"
            >
              <n-select
                v-model:value="form.modelId"
                :options="studentOptions"
                filterable
                placeholder="Buscar estudiante"
                clearable
                remote
                :virtual-scroll="false"
                @search="searchStudentsDebounce"
                @update:value="onSelectedStudent"
                :status="formErrors?.modelId != undefined ? 'error' : ''"
              />
            </n-form-item>
          </n-col>
          <n-col span="24">
            <n-form-item
              path="password"
              label="Contraseña"
              :feedback="formErrors?.password"
            >
              <n-input
                type="password"
                show-password-on="click"
                placeholder="Contraseña"
                :minlength="6"
                :status="formErrors?.password != undefined ? 'error' : ''"
                v-model:value="form.password"
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
import type { FormInst, SelectOption } from "naive-ui";
import { ref, computed, watch } from "vue";
import {
  type UserDTO,
  type UserFormDTO,
  type UserFormErrorsDTO,
} from "@/app/modules/User/types/User.types";

import {
  _getUserInitValues,
  _getUserRules,
} from "@/app/modules/User/configs/form.configs";

import {
  _updateAccountItem,
  _storeAccountItem,
  _updateItem,
} from "@/app/modules/User/services/user.services";
import type { ItemSelectDTO } from "@/core/types/Select.types";
import debounce from "@/core/utils/debounce.utils";
import {
  __searchTeachers,
  __searchStudents,
} from "@/app/shared/services/selectables.services";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  item: UserDTO | null;
  level: string;
  modelValue: boolean;
  roleOptions: ItemSelectDTO[];
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const formRef = ref<FormInst | null>(null);
const form = ref<UserFormDTO>(_getUserInitValues(props.level));
const formErrors = ref<UserFormErrorsDTO | null>(null);
const formRules = computed(() => ({ ..._getUserRules(form.value.id) }));
const teacherOptions = ref<SelectOption[]>([]);
const studentOptions = ref<SelectOption[]>([]);

const onSelectedTeacher = (value: number) => {
  if (formErrors.value) {
    formErrors.value.modelId = null;
  }
  form.value.modelId = value;
  let name = teacherOptions.value.find((item) => item.value === value)?.label;
  if (name) {
    form.value.name = name as string;
  }
};

const onSelectedStudent = (value: number) => {
  if (formErrors.value) {
    formErrors.value.modelId = null;
  }
  form.value.modelId = value;
  let name = studentOptions.value.find((item) => item.value === value)?.label;
  if (name) {
    form.value.name = name as string;
  }
};

const handleSubmit = async () => {
  form.value.role = props.level == "teacher" ? "docente" : "estudiante";
  form.value.level = props.level;

  if (formRef.value) {
    const valid = await formRef.value.validate();

    let response = null;
    if (valid) {
      loading.value = true;

      if (form.value.id) {
        response = await _updateAccountItem(form.value);
      } else {
        response = await _storeAccountItem(form.value);
      }
      if (response) {
        emit("success");
        showModal.value = false;
      }
    } else {
      console.log("Formulario inválido");
    }
  }
  loading.value = false;
};

const searchTeachers = async ({
  search = null as string | null,
  id = null as string | null | number,
}) => {
  teacherOptions.value = await __searchTeachers({ search, id });
};

const searchStudents = async ({
  search = null as string | null,
  id = null as string | null | number,
}) => {
  studentOptions.value = await __searchStudents({ search, id });
};

const searchTeachersDebounce = debounce(async (search) => {
  await searchTeachers({ search });
}, 400);

const searchStudentsDebounce = debounce(async (search) => {
  await searchStudents({ search });
}, 400);

const init = () => {
  console.log("Inicializando formulario");
  form.value = props.item ? { ...props.item } : _getUserInitValues(props.level);

  if (props.item && props.level == "teacher") {
    const teacherId = props.item.modelId;
    searchTeachers({ id: teacherId });
  }
  if (props.item && props.level == "student") {
    const studentId = props.item.modelId;
    searchStudents({ id: studentId });
  }
};

watch(showModal, (value) => {
  if (value) {
    formErrors.value = null;
    init();
  }
});
</script>
