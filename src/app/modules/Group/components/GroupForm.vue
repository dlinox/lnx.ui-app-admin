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
      <n-alert title="¡Importante!" type="default" closable class="mb-4">
        <template #icon>
          <LnxIcon iconName="information" />
        </template>
        Antes de crear un grupo, asegúrese de que el curso tenga los precios
        asignados para la modalidad y tipo de estudiante correspondientes.
      </n-alert>
      <n-spin :show="loadingInitForm" description="Cargando formulario">
        <n-dynamic-input v-model:value="form" :on-create="initGroupValues">
          <template #create-button-default> Nuevo grupo </template>
          <template #default="{ value }">
            <div
              class="border-b border-t border-l border-dashed border-gray-300 py-4 ps-4"
            >
              <n-row gutter="16">
                <n-col
                  :span="screenSize === 'lg' ? 4 : screenSize === 'md' ? 4 : 24"
                >
                  <n-form-item label="Grupo" path="name" default-value="Grupo">
                    <n-input v-model:value="value.name" />
                  </n-form-item>
                </n-col>

                <n-col
                  :span="
                    screenSize === 'lg' ? 8 : screenSize === 'md' ? 10 : 24
                  "
                >
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
                <n-col
                  :span="screenSize == 'lg' ? 8 : screenSize === 'md' ? 10 : 24"
                >
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

                <n-col
                  :span="screenSize == 'lg' ? 4 : screenSize === 'md' ? 8 : 24"
                >
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
                  :span="screenSize === 'lg' ? 6 : screenSize === 'md' ? 6 : 12"
                >
                  <n-form-item label="Cupos máximos" path="maxStudents">
                    <n-input-number
                      v-model:value="value.maxStudents"
                      class="w-full"
                    />
                  </n-form-item>
                </n-col>
                <n-col
                  :span="screenSize === 'lg' ? 6 : screenSize === 'md' ? 6 : 12"
                >
                  <n-form-item label="Cupos mínimos" path="minStudents">
                    <n-input-number
                      v-model:value="value.minStudents"
                      class="w-full"
                    />
                  </n-form-item>
                </n-col>
              </n-row>
            </div>
          </template>

          <template #action="{ value, index, create, remove }">
            <div
              style="
                width: 140px;
                display: flex;
                justify-content: space-evenly;
                flex-direction: column;
              "
              class="border-b border-t border-r border-dashed border-gray-300 p-4"
            >
              <n-button
                secondary
                type="primary"
                :renderIcon="renderIcon('calendar-add')"
                @click="openModalSchedule(value)"
              >
                Horarios
              </n-button>

              <n-button-group>
                <n-button
                  :render-icon="renderIcon('element-plus')"
                  @click="
                    () => {
                      create(index);
                    }
                  "
                >
                </n-button>
                <n-button
                  type="error"
                  :render-icon="renderIcon('trash')"
                  @click="
                    () => {
                      dialog.warning({
                        title: 'Confirmar',
                        content:
                          '¿Está seguro que desea eliminar este registro?',
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
      </n-spin>
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
  type ScheduleFormDTO
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
import { useDialog } from "naive-ui";
import LnxIcon from "@/core/components/LnxIcon.vue";
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

const loadingInitForm = ref<boolean>(false);
const loading = ref<boolean>(false);
const groupSelect = ref<GroupFormDTO | null>(null);
const showModalSchedule = ref<boolean>(false);
const teacherOptions = ref<SelectOption[]>([]);
const form = ref<GroupFormDTO[]>([]);

const initGroupValues = () =>
  Object.assign(
    {},
    {
      ..._getGroupInitValues(),
      name: (props.item!.code + (form.value.length + 1)) as string,
    }
  );

const openModalSchedule = (item: GroupFormDTO) => {
  groupSelect.value = Object.assign({}, { ...item });
  showModalSchedule.value = true;
};

const updateScheduleForm = (value: ScheduleFormDTO, id: number) => {
  form.value = form.value.map((item) => {
    if (item.id === id) {
      item.schedule = value;
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

    if (formValues) {
      const teacherIdsString = formValues
        .map((item) => item.teacherId)
        .filter((id) => id != null) // Filtrar nulos o indefinidos
        .join(",");
      console.log(teacherIdsString);
      await searchTeachers({ id: teacherIdsString });
      form.value = formValues;
    } else {
      form.value = [{ ..._getGroupInitValues(), name: props.item.code }];
      searchTeachers({ search: "" });
    }
  }
  // else {
  // form.value = [{ ..._getGroupInitValues(props.item?.code) }];
  // }
};

watch(showModal, async (value) => {
  if (value) {
    loadingInitForm.value = true;
    await initForm();
    loadingInitForm.value = false;
  }
});
</script>
