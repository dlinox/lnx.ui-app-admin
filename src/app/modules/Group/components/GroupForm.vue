<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 1200px"
      title="Registro de grupos"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
      :segmented="{
        content: true,
        footer: true,
      }"
    >
      <n-dynamic-input v-model:value="form" :on-create="_getGroupInitValues">
        <template #create-button-default> Nuevo grupo </template>
        <template #default="{ value }">
          <n-row
            gutter="16"
            style="border-bottom: 1px dashed #f0f0f0; padding: 1rem 0"
          >
            <n-col :span="screenSize === 'lg' ? 3 : 4">
              <n-form-item label="Grupo" path="name">
                <n-input v-model:value="value.name" />
              </n-form-item>
            </n-col>
            <n-col :span="screenSize === 'lg' ? 7 : 10">
              <n-form-item label="Docente" path="teacher">
                <n-select
                  v-model:value="value.teacherId"
                  :options="teacherOptions"
                  filterable
                  clearable
                  remote
                  :virtual-scroll="false"
                  @search="searchTeachersDebounce"
                />
              </n-form-item>
            </n-col>
            <n-col :span="screenSize == 'lg' ? 7 : 10">
              <n-form-item label="Laboratorio" path="laboratory">
                <n-select
                  v-model:value="value.laboratoryId"
                  :options="props.laboratoryOptions"
                  filterable
                  clearable
                  :virtual-scroll="false"
                />
              </n-form-item>
            </n-col>

            <n-col :span="screenSize == 'lg' ? 4 : 12">
              <n-form-item label="Modalidad" path="modality">
                <n-select
                  v-model:value="value.modality"
                  :options="MODALITIES"
                  filterable
                  clearable
                  :virtual-scroll="false"
                />
              </n-form-item>
            </n-col>

            <n-col
              :span="screenSize == 'lg' ? 3 : 12"
              style="display: flex; justify-content: end"
            >
              <n-form-item label="Hablitado" path="isEnabled">
                <n-switch v-model:value="value.isEnabled" />
              </n-form-item>
            </n-col>
          </n-row>
        </template>

        <template #action="{ value, index, create, remove }">
          <div
            style="
              width: 120px;
              margin-left: 1rem;
              display: flex;
              justify-content: space-evenly;
              flex-direction: column;
              border-bottom: 1px dashed #f0f0f0;
            "
          >
            <n-button
              secondary
              type="primary"
              :renderIcon="renderIcon('calendar-add')"
              @click="openModalSchedule(value)"
            >
              Horarios
            </n-button>

            <n-button-group style="margin-left: 1rem">
              <n-button
                :render-icon="renderIcon('element-plus')"
                @click="() => create(index)"
              >
              </n-button>
              <n-button
                type="error"
                :render-icon="renderIcon('trash')"
                @click="
                  () => {
                    dialog.warning({
                      title: 'Confirmar',
                      content: '¿Está seguro que desea eliminar este registro?',
                      positiveText: value.id ? 'Eliminar' : 'Quitar',
                      negativeText: 'Cancelar',
                      closable: false,
                      showIcon: false,

                      negativeButtonProps: {
                        type: 'tertiary',
                        size: 'large',
                      },
                      positiveButtonProps: {
                        size: 'large',
                        type: 'error',
                      },
                      onPositiveClick: async () => {
                        if (value.id) {
                          const deleted = await _deleteItem(value);
                          if (deleted) remove(index);
                        } else {
                          remove(index);
                        }
                      },
                    });
                  }
                "
              >
              </n-button>
            </n-button-group>
          </div>
        </template>
      </n-dynamic-input>
      <template #footer>
        <n-flex justify="end">
          <n-button @click="() => (showModal = false)">Cancelar</n-button>
          <n-button type="primary" @click="submit">Guardar</n-button>
        </n-flex>
      </template>
      <ScheduleForm
        v-model="showModalSchedule"
        :groupSelect="groupSelect"
        @submit="updateScheduleForm"
      />
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import debounce from "@/core/utils/debounce.utils";
import { renderIcon } from "@/core/utils/icon.utils";
import useBreakpoints from "@/core/composable/useBreakpoints";

import {
  type GroupDataTableItemDTO,
  type GroupFormDTO,
} from "@/app/modules/Group/types/Group.types";

import { _getGroupInitValues } from "@/app/modules/Group/configs/groupForm.confings";

import { __searchTeachers } from "@/app/shared/services/selectables.services";

import type { SelectOption } from "naive-ui";

import {
  _loadForm,
  _saveItems,
  _deleteItem,
} from "@/app/modules/Group/services/group.services";
import { MODALITIES } from "@/core/constants/modalities.constants";
import ScheduleForm from "./ScheduleForm.vue";
import type { ScheduleDTO } from "@/app/modules/Group/types/Group.types";
import { useDialog } from "naive-ui";
const dialog = useDialog();
const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
  item: GroupDataTableItemDTO | null;
  periodId: number;
  laboratoryOptions: SelectOption[];
}>();

const { screenSize } = useBreakpoints();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const groupSelect = ref<GroupFormDTO | null>(null);
const showModalSchedule = ref<boolean>(false);

const teacherOptions = ref<SelectOption[]>([]);

const form = ref<GroupFormDTO[]>([]);

const openModalSchedule = (item: GroupFormDTO) => {
  groupSelect.value = Object.assign({}, { ...item });
  showModalSchedule.value = true;
};

const updateScheduleForm = (value: ScheduleDTO[], id: number) => {
  console.log("Actualizando horarios", value, id);
  form.value = form.value.map((item) => {
    if (item.id === id) {
      item.schedules = value;
    }
    return item;
  });
};

const submit = async () => {
  console.log("Enviando formulario");
  console.log(form.value);
  console.log(props.item);
  loading.value = true;
  const response = await _saveItems(form.value, props.periodId, props.item!.id);
  if (response.status) {
    emit("success");
    showModal.value = false;
  }
  loading.value = false;
};

const searchTeachers = async ({
  search = null as string | null,
  id = null as string | null,
}) => {
  teacherOptions.value = await __searchTeachers({ search, id });
};

const searchTeachersDebounce = debounce(async (search) => {
  await searchTeachers({ search });
}, 400);

const initForm = async () => {
  console.log("Inicializando formulario");
  if (props.item) {
    const formValues = await _loadForm({
      id: props.item.id,
      periodId: props.periodId,
    });
    console.log(formValues);

    if (formValues) {
      const teacherIdsString = formValues
        .map((item) => item.teacherId)
        .filter((id) => id != null) // Filtrar nulos o indefinidos
        .join(",");
      console.log(teacherIdsString);
      await searchTeachers({ id: teacherIdsString });
      form.value = formValues;
    } else {
      form.value = [{ ..._getGroupInitValues() }];
      searchTeachers({ search: "" });
    }

    // form.value = [];
  } else {
    form.value = [{ ..._getGroupInitValues() }];
  }
};

watch(showModal, (value) => {
  if (value) {
    initForm();
  }
});
</script>
