<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 800px"
      :title="'Generar Reporte - Matrículas'"
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
        Buscar estudiantes
      </n-divider>
      <n-row gutter="16">
        <n-col span="5">
          <n-input
            type="text"
            v-model:value="search.documentNumber"
            placeholder="N° de Documento"
          />
        </n-col>
        <n-col span="7">
          <n-input
            type="text"
            v-model:value="search.name"
            placeholder="Nombre"
          />
        </n-col>
        <n-col span="6">
          <n-input
            type="text"
            v-model:value="search.lastNameFather"
            placeholder="Apellido Paterno"
          />
        </n-col>
        <n-col span="6">
          <n-input
            type="text"
            v-model:value="search.lastNameMother"
            placeholder="Apellido Materno"
          />
        </n-col>
        <n-col span="24">
          <n-list
            hoverable
            clickable
            style="max-height: 300px; overflow-y: auto"
          >
            <template #header>
              <div style="text-align: end">
                <i style="padding: 0 1rem; color: #999; font-size: 0.8rem">
                  Se muestran los 10 mejores resultados de la busqueda |
                  <strong>
                    Total de resultados: {{ listStudent.length }}
                  </strong>
                </i>
              </div>
            </template>
            <n-list-item
              style="margin: 0 1rem"
              v-for="student in listStudent"
              :key="student.id"
            >
              <n-thing>
                <template #header>
                  <n-tag :bordered="false" class="me-2">
                    {{ student.studentType }}
                  </n-tag>
                  {{ student.name }} {{ student.lastName }}
                </template>
              </n-thing>

              <n-space align="center" justify="end">
                <n-button
                  secondary
                  class="ms-2"
                  type="error"
                  @click="_pdfStudentEnrollments(student)"
                  :render-icon="renderIcon('document-download')"
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

import { _pdfStudentEnrollments } from "@/app/modules/Reports/services/report.services";

import debounce from "@/core/utils/debounce.utils";
import type { StudentListItemDTO } from "@/app/modules/Student/types/Student.types";
import { __searchListStudent } from "@/app/modules/Student/services/student.services";
import { renderIcon } from "@/core/utils/icon.utils";

const emit = defineEmits(["update:modelValue", "success"]);

const props = defineProps<{
  modelValue: boolean;
}>();

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const loading = ref<boolean>(false);
const listStudent = ref<StudentListItemDTO[]>([]);

const search = ref<any>({
  code: "",
  documentNumber: "",
  name: "",
  lastNameFather: "",
  lastNameMother: "",
});

watch(
  search.value,
  debounce(async (value) => {
    loading.value = true;
    listStudent.value = await __searchListStudent(value);
    loading.value = false;
  }, 500)
),
  { deep: true };


const init = () => {};

watch(showModal, (value) => {
  if (value) {
    init();
  }
});
</script>
