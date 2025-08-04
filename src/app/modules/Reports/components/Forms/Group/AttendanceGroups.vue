<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 800px"
      :title="'Generar Plantilla - Asistencia'"
      :segmented="{
        content: true,
        footer: true,
      }"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <n-button
          :render-icon="renderIcon('close-circle')"
          @click="showModal = false"
        >
        </n-button>
      </template>
      <n-divider title-placement="left" style="margin: 0 0 1rem 0">
        Buscar grupo
      </n-divider>
      <n-row gutter="16">
        <n-col span="8">
          <n-select
            v-model:value="search.periodId"
            placeholder="Seleccionar Periodo Académico"
            filterable
            :options="periodOptions"
            clearable
            remote
            :virtual-scroll="false"
            @search="debouncedhandleSearchPeriod"
            @update:value="getGroups"
          />
        </n-col>
        <n-col span="8">
          <n-select
            :disabled="search.periodId === null"
            v-model:value="search.curriculumId"
            placeholder="Seleccionar Plan de estudio"
            filterable
            :options="curriculumOptions"
            clearable
            @update:value="onSelectCurriculum"
            :virtual-scroll="false"
          />
        </n-col>
        <n-col span="8">
          <n-select
            :disabled="search.curriculumId === null || search.periodId === null"
            v-model:value="search.moduleId"
            placeholder="Seleccionar Módulo"
            filterable
            :options="modulesOptions"
            clearable
            @update:value="getGroups"
            :virtual-scroll="false"
          />
        </n-col>

        <n-col span="24" class="border-t border-t-gray-200 mt-2">
          <n-list
            hoverable
            clickable
            style="max-height: 300px; overflow-y: auto"
          >
            <n-list-item
              style="margin: 0 1rem"
              v-for="group in groupsItems"
              :key="group.id"
            >
              <n-thing>
                <template #header>
                  <n-tag :bordered="false" class="me-2">
                    {{ group.status }}
                  </n-tag>
                  {{ group.name }} - {{ group.course }}
                </template>
                <i>
                  {{ group.schedule?.days }} - {{ group.schedule?.startHour }} a
                  {{ group.schedule?.endHour }}
                </i>
              </n-thing>

              <n-space align="center" justify="end">
                <n-button
                  secondary
                  class="ms-2"
                  type="error"
                  :render-icon="renderIcon('document-download')"
                  @click="pdfGroupEnrolledStudents(group.id)"
                >
                  PDF
                </n-button>
                <!-- <n-button secondary type="success" @click="" :render-icon="renderIcon('document-download')"> EXCEL </n-button> -->
              </n-space>
            </n-list-item>
          </n-list>
        </n-col>
      </n-row>
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
        </n-space>
      </template>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";

import {
  _pdfAttendanceTemplate,
  _getGroupsByModuleAndPeriod,
} from "@/app/modules/Reports/services/report.services";
import { __searchModulesByCurriculum } from "@/app/shared/services/selectables.services";
import { __searchPeriods } from "@/app/shared/services/selectables.services";

import { renderIcon } from "@/core/utils/icon.utils";
import type { SelectOption } from "naive-ui";

import debounce from "@/core/utils/debounce.utils";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
  curriculumOptions: SelectOption[];
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const loadingSearchPeriod = ref<boolean>(false);
const groupsItems = ref<any[]>([]);

const periodOptions = ref<SelectOption[]>([]);
const modulesOptions = ref<SelectOption[]>([]);

const search = ref<any>({
  periodId: null,
  curriculumId: null,
  moduleId: null,
});

const pdfGroupEnrolledStudents = async (groupId: number) => {
  loading.value = true;
  await _pdfAttendanceTemplate({ groupId: groupId });
  loading.value = false;
};

const handleSearchPeriod = async (search: string) => {
  loadingSearchPeriod.value = true;
  periodOptions.value = await __searchPeriods(search);
  loadingSearchPeriod.value = false;
};

const debouncedhandleSearchPeriod = debounce((search) => {
  handleSearchPeriod(search);
}, 400);

const onSelectCurriculum = async (value: number) => {
  modulesOptions.value = await __searchModulesByCurriculum(value);
};

const getGroups = async () => {
  groupsItems.value = await _getGroupsByModuleAndPeriod(search.value);
};

const init = () => {
  handleSearchPeriod("");
};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
