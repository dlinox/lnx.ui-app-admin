<template>
  <n-card
    :segmented="{
      header: true,
      footer: true,
      content: true,
    }"
  >
    <template #header>
      <h6 style="color: #999; margin: 0">Matricular estudiante</h6>
      Nombre del estudiante
    </template>
    <template #header-extra>
      <n-select
        v-model:value="curriculumId"
        placeholder="Seleccionar Plan de estudio"
        filterable
        :options="curriculumItems"
        :virtual-scroll="false"
        :default-value="1"
        @update:value="getDataEnrollment"
      />
    </template>
    <template #action> </template>
  </n-card>

  <n-row :gutter="16" style="padding: 1rem">
    <n-col span="6">
      <n-card>
        <n-space vertical>
          <n-statistic class="small" label="Tipo de estudiante">
            {{ student?.studentType }}
          </n-statistic>

          <n-statistic class="small" label="Documento">
            {{ student?.documentType }} {{ student?.documentNumber }}
          </n-statistic>

          <n-statistic class="small" label="Nombres">
            {{ student?.name }} {{ student?.lastNameFather }}
            {{ student?.lastNameMother }}
          </n-statistic>

          <n-statistic class="small" label="Correo electronico">
            {{ student?.email ? student?.email : "No registrado" }}
          </n-statistic>

          <n-statistic class="small" label="Telefono">
            {{ student?.phone ? student?.phone : "No registrado" }}
          </n-statistic>
        </n-space>
      </n-card>
    </n-col>
    <n-col span="18" style="border: 1px solid #efefef; padding: 0rem 0">
      <n-card title="Matricula" :bordered="false">
        <template #header-extra>
          <n-tag type="info" :bordered="false" style="margin-right: 0.5rem">
            Periodo: <strong> {{ periodCurrent?.name }} </strong>
          </n-tag>

          <n-tag
            :bordered="false"
            :type="periodCurrent?.enrollmentEnabled ? 'success' : 'error'"
          >
            Matriculas:
            <strong>
              {{
                periodCurrent?.enrollmentEnabled
                  ? "Habilitada"
                  : "Deshabilitada"
              }}
            </strong>
          </n-tag>
        </template>
      </n-card>

      <n-tabs
        v-if="student?.enrollments"
        animated
        addable
        @add="handleAddModule"
        type="card"
        :default-value="
          student?.enrollments.length > 0 ? student?.enrollments[0].id : ''
        "
      >
        <template #prefix>
          <span style="font-weight: 600; margin-left: 1rem"> Modulos </span>
        </template>
        <n-tab-pane
          v-for="module in student?.enrollments"
          :name="module.id"
          :tab="module.moduleName"
        >
          <n-card
            v-for="course in module.courses"
            size="small"
            :key="course.id"
            :title="course.courseName"
            style="margin-bottom: 1rem; padding: 0rem"
          >
            <n-list
              hoverable
              clickable
              v-if="course.enrollmentCourse.length > 0"
            >
              <n-list-item
                v-for="item in course.enrollmentCourse"
                :key="item.id"
              >
                <n-thing :title="`${item.groupName} - S/. ${item.price}`">
                  <template #header-extra>
                    <n-button :render-icon="renderIcon('printer')"></n-button>
                    <n-button
                      style="margin-left: 0.5rem"
                      :render-icon="renderIcon('setting-5')"
                    ></n-button>
                  </template>
                  <template #description>
                    <n-space size="small" style="margin-top: 4px">
                      <n-tag :bordered="false" type="info" size="small">
                        {{ item.modality }}
                      </n-tag>
                    </n-space>
                  </template>

                  Docente: <b> {{ item.teacher }} </b>
                  <br />
                  Laboratorio: <b> {{ item.laboratory }} </b>
                  <br />
                  <n-tag
                    v-for="(j, index) in item.schedules"
                    :key="index"
                    :bordered="false"
                    type="info"
                    size="small"
                  >
                    {{ j.day }} - {{ j.startHour }} - {{ j.endHour }}
                  </n-tag>
                </n-thing>
              </n-list-item>
            </n-list>

            <n-space v-else>
              <n-space>
                <n-button
                  type="primary"
                  size="small"
                  @click="openEnrollmentGroupModal(course.id)"
                >
                  Matricular
                </n-button>
              </n-space>
            </n-space>
          </n-card>
        </n-tab-pane>
      </n-tabs>
    </n-col>
  </n-row>
  <AddModuleForm
    v-if="student"
    v-model="showAddModuleForm"
    :studentId="student.id"
    :curriculumId="curriculumId"
    @success="getDataEnrollment"
  />
  <EnrollmentGroupForm
    v-model="showModal"
    :studentId="student.id"
    :curriculumId="curriculumId"
    :curriculumCourseId="curriculumCourseId"
    @success="getDataEnrollment"
  />
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { _createColumns } from "@/app/modules/Course/configs/dataTable.configs";
import { useRoute } from "vue-router";

import AddModuleForm from "../components/Form/AddModuleForm.vue";

import { _getStudentEnrollment } from "@/app/modules/Enrollment/services/enrollment.services";
import { __current } from "@/app/modules/Period/services/period.services";

import { __getStudentTypesForSelect } from "@/app/modules/StudentType/services/studentType.services";
import { __getDocumentTypesForSelect } from "@/app/modules/DocumentType/services/documentType.services";
import { __searchCurriculums } from "@/app/shared/services/selectables.services";
import EnrollmentGroupForm from "../components/Form/EnrollmentGroupForm.vue";
import { renderIcon } from "@/core/utils/icon.utils";
const route = useRoute();

const showAddModuleForm = ref<boolean>(false);
const showModal = ref<boolean>(false);

const curriculumId = ref<number | null>(null);
const periodCurrent = ref<any | null>(null);

const curriculumItems = ref<any>([]);
const loadingView = ref<boolean>(true);
const student = ref<any>({});

const curriculumCourseId = ref<number | null>(null);

const handleAddModule = () => {
  showAddModuleForm.value = true;
  console.log("Add module");
};

const getDataEnrollment = async () => {
  const id = route.params.id;
  const periodId = periodCurrent.value?.id;
  const response = await _getStudentEnrollment(
    id,
    curriculumId.value!,
    periodId
  );
  student.value = response.data;
};

const openEnrollmentGroupModal = (courseId: number) => {
  curriculumCourseId.value = courseId;
  showModal.value = true;
};

const initView = async () => {
  curriculumItems.value = await __searchCurriculums("");
  periodCurrent.value = await __current();
  curriculumId.value = curriculumItems.value[0].value;
  loadingView.value = true;
  await getDataEnrollment();
  loadingView.value = false;
};

onMounted(() => {
  initView();
});
</script>

<style>
.n-statistic.small {
  .n-statistic-value {
    line-height: 1rem;
    margin-top: 0.1rem;
    font-size: 0.5rem;
    span {
      font-weight: 600;
      font-size: 1rem;
    }
  }
}
</style>
