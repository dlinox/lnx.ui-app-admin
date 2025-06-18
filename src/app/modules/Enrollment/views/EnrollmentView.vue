<template>
  <template
    v-if="
      hasPermission([
        'enrollment.create',
        'enrollment.create-special',
        'enrollment.edit',
        'enrollment.print-record',
      ])
    "
  >
    <n-card
      :segmented="{
        header: true,
        footer: true,
        content: true,
      }"
    >
      <template #header>
        <h6 class="text-sm text-gray-500">Matrícula</h6>
        Matrícula de Estudiantes
      </template>
      <template #header-extra>
        <n-button type="primary" @click="showModal = true">
          Nuevo Estudiante
        </n-button>
      </template>
      <template #action>
        <n-divider title-placement="left" style="margin: 0 0 1rem 0">
          Buscar estudiante
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
        </n-row>
      </template>
    </n-card>

    <n-list hoverable clickable>
      <template #header>
        <div style="text-align: end">
          <i style="padding: 0 1rem; color: #999; font-size: 0.8rem">
            Se muestran los 10 mejores resultados de la busqueda |
            <strong> Total de resultados: {{ listStudent.length }} </strong>
          </i>
        </div>
      </template>
      <n-list-item
        style="margin: 0 1rem"
        v-for="student in listStudent"
        :key="student.id"
      >
        <n-thing
          :title="`${student.name} ${student.lastName}`"
          :description="`${
            student.documentType ? student.documentType : '-'
          }    ${student.documentNumber ? student.documentNumber : '-'}`"
        >
          <n-tag :bordered="false">
            {{ student.studentType }}
          </n-tag>
        </n-thing>

        <div class="pt-3 text-end">
          <n-space align="center" justify="end">
            <n-button
              secondary
              type="primary"
              class="ms-2"
              @click="
                router.push({
                  name: 'EnrollmentStudent',
                  params: { id: student.id },
                })
              "
              v-if="hasPermission(['enrollment.create'])"
            >
              Matricular
            </n-button>
            <n-button
              strong
              secondary
              @click="
                router.push({
                  name: 'EnrollmentSpecialStudent',
                  params: { id: student.id },
                })
              "
              v-if="hasPermission(['enrollment.create-special'])"
            >
              Matriculas Especiales
            </n-button>
          </n-space>
        </div>
      </n-list-item>
    </n-list>
    <StudentForm
      v-if="!loadingView"
      v-model="showModal"
      :item="null"
      :selectables="selectables"
      @success="onRegister"
    />
  </template>
  <template v-else>
    <AppNotAuthorization />
  </template>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { _createColumns } from "@/app/modules/Course/configs/dataTable.configs";
import debounce from "@/core/utils/debounce.utils";
import StudentForm from "@/app/modules/Student/components/StudentForm.vue";
import type {
  StudentListItemDTO,
  StudentSearchListRequestDTO,
} from "@/app/modules/Student/types/Student.types";

import { __searchListStudent } from "@/app/modules/Student/services/student.services";

import { __getStudentTypesForSelect } from "@/app/modules/StudentType/services/studentType.services";
import { __getDocumentTypesForSelect } from "@/app/modules/DocumentType/services/documentType.services";

import { usePermission } from "@/core/composables/usePermission";

const { hasPermission } = usePermission();
const router = useRouter();
const showModal = ref<boolean>(false);
const selectables = ref<any>({});
const search = ref<StudentSearchListRequestDTO>({
  code: "",
  documentNumber: "",
  name: "",
  lastNameFather: "",
  lastNameMother: "",
});

const listStudent = ref<StudentListItemDTO[]>([]);
const loadingView = ref<boolean>(true);
const loadingSearch = ref<boolean>(false);
const onRegister = (e: any) => {
  search.value.documentNumber = e.documentNumber;
  search.value.name = e.name;
  search.value.lastNameFather = e.lastNameFather;
  search.value.lastNameMother = e.lastNameMother;
};

watch(
  search.value,
  debounce(async (value) => {
    loadingSearch.value = true;
    listStudent.value = await __searchListStudent(value);
    loadingSearch.value = false;
  }, 500)
),
  { deep: true };

const initView = async () => {
  loadingView.value = true;
  selectables.value.studentTypesItems = await __getStudentTypesForSelect();
  selectables.value.documentTypesItems = await __getDocumentTypesForSelect();
  loadingView.value = false;
};

initView();
</script>
